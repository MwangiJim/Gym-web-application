import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function MonthlyChart() {
    let[monthlysales]=React.useState([
        [7000,0], [9000,1],[150,3],[19500,3],[40100,4],[250,5],[55000,6],
        [58000,7],[4000,8],[1500,9],[56000,10],[5000,11]
    ])
    let svgRef = useRef()

    useEffect(()=>{
      const width = 1000;
      const height = 550;

      const svg = d3.select(svgRef.current)
      .attr('width',width)
      .attr('height',height)
      .style('overflow','visible')
      .style('background','transparent')
      .style('color','#fff')
      .attr('transform',`translate(${width-950},${height-530})`)
      //setup scales

      const xScale = d3.scaleLinear()
      .domain([0,12])
      .range([0,width])

      const yScale = d3.scaleLinear()
      .domain([d3.max(monthlysales,function(d){
        return d[0]
      }),0])
      .range([0,height])

      //setup axis
      svg.append('g')
      .call(d3.axisBottom(xScale))
      .attr('transform',`translate(0,${height})`)

      svg.append('g')
      .call(d3.axisLeft(yScale))
      //setup line generator
      const linegenerator = d3.line()
      .x((d,i)=>xScale(i))
      .y((d)=>yScale(d[0]))

      //append line
      svg.append('path')
      .data([monthlysales])
      .style('fill','none')
      .style('stroke','gold')
      .style('stroke-width',1.5)
      .attr('d',linegenerator)

    },[monthlysales])
  return (
    <svg ref={svgRef}></svg>
  )
}

export default MonthlyChart