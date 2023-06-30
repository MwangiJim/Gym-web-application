import React ,{useEffect, useRef, useState}from 'react'
import * as d3 from 'd3'

const OverviewSection = ({selectedData,Choice}) => {
    const svgRef = useRef();
    //console.log(selectedData)
    useEffect(()=>{
       const height = 500;
       const width = 900;

       const svg = d3.select(svgRef.current)
       .attr("height",height)
       .attr('width',width)
       .style('background','transparent')
       .style('color','#fff')
       .style('overflow','visible')
       .attr('transform',`translate(${width-850},${height-470})`)
       .style('font-size','15px')

       //settup scales
       const xScale = d3.scaleBand()
       .domain(selectedData.map((item)=>{
        return item.month
       }))
       .range([0,width]).padding(0.2)

       const yScale = d3.scaleLinear()
       .domain([d3.max(selectedData,function(d){
        return d.units || d.sales
       }),0])
       .range([0,height])

       //setup axes
       svg.append('g')
       .call(d3.axisBottom(xScale))
       .attr('transform',`translate(0,${height})`)

       svg.append('g')
       .call(d3.axisLeft(yScale))

       //setup texts
       svg.append('text')
       .attr('x',width/2)
       .attr('y',height+30)
       .text('Month')
       .style('color','#fff')

       svg.append('text')
       .attr('x',-60)
       .attr('y',height/2)
       .text(`Total ${Choice} per Year`)
       .style('color','#fff')
       //setup bars
       svg.selectAll('.bar')
       .data(selectedData)
       .join('rect')
       .attr('x',(d)=>xScale(d.month))
       .attr('y',(d)=>yScale(d.units))
       .attr('height',(d)=>height - yScale(d.units) || yScale(d.sales))
       .attr('width',xScale.bandwidth())
       .style('fill','gold')
    },[selectedData])
  return (
    <svg ref={svgRef}>

    </svg>
  )
}

export default React.memo(OverviewSection)