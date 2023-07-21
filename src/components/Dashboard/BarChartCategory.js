import React, { useEffect } from 'react'
import * as d3 from 'd3'

const BarChartCategory = () => {
    const [salesdata] = React.useState([
        {sales:19545,category:'Dumbells'},
        {sales:25000,category:'Clothing'},
        {sales:45000,category:'Shoes'},
        {sales:38104,category:'Machinery'}
    ])
    const svgRef = React.useRef();
    useEffect(()=>{
      const width = 400;
      const height = 200;

      const svg = d3.select(svgRef.current)
      .attr('height',height)
      .attr('width',width)
      .style('overflow','visible')
      .attr('transform',`translate(${width - 250},${height - 50})`)

    //format data into pie chart
    const formatdata = d3.pie().startAngle(-0.75 * Math.PI).value(d => d.sales)(salesdata)
    //setup arc generator

    const arcGenerator = d3.arc()
    .innerRadius(40)
    .outerRadius(130)
    .padAngle(0.04)
    .cornerRadius(10)
    
    //setup colors
    const colors = d3.scaleOrdinal()
    .range(['#ffc017','#ffc017','gold','gold'])
    //append our arcs
    svg.selectAll()
    .data(formatdata)
    .join('path')
    .attr('d',arcGenerator)
    .style('fill',d => colors(d.data.sales))
    .style('stroke','#fff')
    .style('stroke-width',1.5)
    .transition()
    .duration(800)
    .attrTween('d',function(d){
      const interpolation = d3.interpolate(d.startAngle,d.endAngle)
      return function(t){
        d.endAngle = interpolation(t)
        return arcGenerator(d)
      }
    })

    //add labels
    svg.selectAll()
    .data(formatdata)
    .join('text')
    .text(d => d.data.category)
    .attr('transform',d => `translate(${arcGenerator.centroid(d)})`)
    .style('font-size',0)
    .transition()
    .duration(800)
    .style('font-size','15px')
    .style('color','#fff')
    },[salesdata])
  return (
    <svg ref={svgRef}></svg>
  )
}

export default BarChartCategory