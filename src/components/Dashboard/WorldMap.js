import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import {feature} from 'topojson'

let projection = d3.geoEqualEarth()
let Path = d3.geoPath(projection)
let Graticule = d3.geoGraticule()

const WorldMap = () => {
    const svgRef = useRef()
    const[data,setData]=React.useState({})
    const[cities,setCities] =React.useState([])
    let url = 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'
    let Url = "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv"
    useEffect(()=>{
        d3.json(url).then(data =>{
          const {countries} = data.objects;
          setData(feature(data,countries))
        })
    },[])
    //console.log(data)
    useEffect(()=>{
      let row = (d) =>{
        d.lat = parseFloat(d.lat)
        d.lng = parseFloat(d.lng)
        d.population = parseFloat(d.population)
        return d;
      }
      d3.csv(Url,row).then(setCities)
    },[])
    console.log(cities)
    useEffect(()=>{
        const height = 500;
        const width = 600;
        const svg = d3.select(svgRef.current)
        .attr('height',height)
        .attr('width',width)
        .style('overflow','visible')
        .style('color','grey')

        // svg.append('path')
        // .attr('d',Path({type:'Sphere'}))
        // .style('fill','none')

    },[])
    const sizeScale = d3.scaleSqrt()
    .domain([0,d3.max(cities,function(d){
      return d.population
    })])
    .range([0,15])
    let sizeValue = (d)=>d.population
  return (
    <svg ref={svgRef}>
      <path d={Path({type:'Sphere'})} style={{fill:'#ececec'}}/>
      <path d={Path(Graticule())} style={{stroke:'#1f94d8',strokeWidth:0.5,strokeOpacity:0.6,fill:'none'}}/>
          {data.features?.length > 0?<>
         {data.features.map((feature,i)=>{
          return(
            <path className='feature' d = {Path(feature)} key={i} style={{fill:'grey'}}/>
          )
         })}
        </>:""}
      {cities.map((city,i)=>{
        const[xVal,yVal] = projection([city.lng,city.lat])
        return(
          <circle cx={xVal} cy={yVal} r={sizeScale(sizeValue(city))} 
          style={{fill:'#137b80',fillOpacity:0.4,stroke:'red',strokeWidth:2}}/>
        )
      })}
    </svg>
  )
}

export default WorldMap