import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const PieChart = () => {
  const svgRef = useRef()
    const [salesdata] = React.useState([
        {sales:19545,category:'Dumbells'},
        {sales:25000,category:'Clothing'},
        {sales:45000,category:'Shoes'},
        {sales:38104,category:'Machinery'}
    ])
   useEffect(()=>{
    const height = 200;
    const width = 500;

    const svg = d3.select(svgRef.current)
    .attr('height',height)
    .attr('width',width)
    .style('overflow','visible')
    .style('margin-top','20px')
    .attr('transform',`translate(${width -50},${height -150})`)

    //create formatted data for visualization by pie
    const formattedData = d3.pie().value(d => d.sales)(salesdata)
    //arc generator
    const arcGenerator = d3.arc()
    .innerRadius(50)
    .outerRadius(300)
    .padAngle(0.02)
    .cornerRadius(10)
    //settup colors
    const colorgenerator = d3.scaleOrdinal()
    .range(['#ffc017','#ffc017','gold','gold'])
    //append the pie chart
    svg.selectAll()
    .data(formattedData)
    .join('path')
    .attr('d',arcGenerator)
    .style('fill',d=>colorgenerator(d.data.sales))
    .transition()
    .duration(700)
    .attrTween("d",function(d){
      const interporlation = d3.interpolate(d.startAngle,d.endAngle)
      return function(t){
        d.endAngle = interporlation(t);
        return arcGenerator(d)
      }
    })

     svg.selectAll()
     .data(formattedData)
     .join('text')
     .text(d => d.data.category)
     .attr('transform',d=>`translate(${arcGenerator.centroid(d)})`)
     .style('font-size',0)
     .transition()
     .duration(700)
     .style('font-size','15px')

   },[salesdata])
  return (
<svg ref={svgRef}></svg>
  )
}

export default PieChart