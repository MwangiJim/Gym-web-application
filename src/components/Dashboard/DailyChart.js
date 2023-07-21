import React, { useEffect, useRef } from 'react'
import  * as d3 from 'd3'

function DailyChart() {
    const svgRef = useRef()
    let [dailysales]=React.useState([
        [6100,0], [8900,1], [1900,2], [9500,3],[4050,4],  [5020,5],  [3950,6],  [7200,7],  [3800,8],  [5020,9],
        [3700,10],[3000,11],[3005,12],[7010,13], [7040,14], [6900,15], [4600,16], [4700,17], [8000,18], [1200,19],
        [2000,20], [4000,21], [3750,22], [4030,23], [3000,24], [9100,25], [4020,26], [2500,27], [2300,28],[8200,29]
      ])
      useEffect(()=>{
        const width = 1000;
        const height = 500;

        const svg = d3.select(svgRef.current)
        .attr('width',width)
        .attr('height',height)
        .style('background','transparent')
        .style('overflow','visible')
        .style('color','#fff')
        .attr('transform',`translate(${width-950},${height-450})`)

        //setup scales
        const xScale = d3.scaleLinear()
        .domain([0,30])
        .range([0,width])

        const yScale = d3.scaleLinear()
        .domain([d3.max(dailysales,function(d){
            return d[0]
        }),0])
        .range([0,height])
        //setup axis
        svg.append('g')
        .call(d3.axisBottom(xScale))
        .attr('transform',`translate(0,${height})`)

        svg.append('g')
        .call(d3.axisLeft(yScale))

        //setup texts
        svg.append('text')
        .attr('x',width/2)
        .attr('y',height+30)
        .style('color','#fff')
        .text('Day')
        //line generator
        const lineGenerator = d3.line()
        .x((d,i)=>xScale(i))
        .y((d)=>yScale(d[0]))
        .curve(d3.curveCardinal)
        //append line
        svg.append('path')
        .data([dailysales])
        .attr('class','line')
        .style('fill','none')
        .style('stroke','gold')
        .style('stroke-width',1.5)
        .attr('d',lineGenerator)
        

      },[dailysales])
  return (
    <svg ref={svgRef}></svg>
  )
}

export default DailyChart