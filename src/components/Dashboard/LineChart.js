import React, { useEffect, useState } from 'react'
import * as d3 from 'd3'

function LineChart() {
    const svgRef = React.useRef()
    let [data]= useState([
      [9000,0],[20000,1], [25000,2],[40000,3],[79000,4], [60000,5],
        [130000,6], [180000,7], [185000,8],[175000,9],[210000,10],[150000,11]
    ])
    useEffect(()=>{
       const width = 550;
       const height = 280;

       const svg =  d3.select(svgRef.current)
       .attr('height',height)
       .attr('width',width)
       .style('color','#ffff')
       .style('overflow','visible')
       .attr('transform',`translate(${width-500},${height-280})`)

       const xScale = d3.scaleLinear()
       .domain([0,11])
       .range([0,width])

       const yScale =  d3.scaleLinear()
       .domain([d3.max(data,function(d){
        return d[0]
       }),0])
       .range([0,height])

       svg.append('g')
       .call(d3.axisBottom(xScale))
       .attr('transform',`translate(0,${height})`)

       svg.append('g')
       .call(d3.axisLeft(yScale))
       //line generator
       const lineGenerator = d3.line()
       .x((d)=>xScale(d[1]))
       .y((d)=>yScale(d[0])).curve(d3.curveCardinal)

       //append line
       svg.append('path')
       .data([data])
       .attr('class','line')
       .style('fill','none')
       .style('stroke','gold')
       .style('stroke-width',1.5)
       .attr('d',lineGenerator)
    },[data])
  return (
    <svg ref={svgRef}></svg>
  )
}

export default LineChart