import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

function BarChartDisplay() {
  const svgRef = useRef()
  let[data]=useState([
    {calories:262,day:'Mon'},
    {calories:362,day:'Tue'},
    {calories:100,day:'Wed'},
    {calories:150,day:'Thur'},
    {calories:289,day:'Fri'},
    {calories:350,day:'Sat'},
    {calories:88,day:'Sun'},
  ])

  let totalCaloriesBurnt = data.reduce((item,initialAmount)=>{
    return initialAmount + item.calories;
  },0)
  useEffect(()=>{
    const width = 500
    const height = 300
     //setup svg container
    const svg = d3.select(svgRef.current)
    .attr("width",width)
    .attr("height",height)
    .style("background","#f3f3f3")
    .style("overflow","visible")
    .style("margin-top","40px")
    .style("margin-left","80px")
    .style("margin-bottom","30px")
    //setup scales
    const xScale = d3.scaleBand()
    .domain(data.map((data)=>{
       return data.day
    }))
    .range([0,width])
    .padding(0.2)

    const yScale = d3.scaleLinear()
    .domain([d3.max(data,function(d){
       return d.calories;
    })+50,0])
    .range([0,height])

    //setp axes
    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)
//append axis
    svg.append('g')
    .call(xAxis)
    .attr('transform',`translate(0,${height})`)

    svg.append('g')
    .call(yAxis)
//append texts

    svg.append('text')
    .attr('x',width/2)
    .attr('y',height + 30)
    .text('Days')
    .style('color','rgb(30, 102, 197)')

    svg.append('text')
    .attr('x',-80)
    .attr('y',height/2)
    .text('KCAL')
    .style("color","rgb(30, 102, 197)")
    .style("font-size","15px")
    .style("font-weight","400")

    //set total calories burnt that week
    svg.append('text')
    .attr('x',width/2 + 40)
    .attr('y',height - 280)
    .text(`Total Calories:0`)
    .attr('color','rgb(30, 102, 197)')

    svg.selectAll('.bar')
    .data(data)
    .join('rect')
    .attr('x',(data)=>xScale(data.day))
    .attr('y',(data)=>yScale(data.calories))
    .attr('width',xScale.bandwidth())
    .attr('height',d => height - yScale(d.calories))
   .style('fill','rgb(30, 102, 197)')
   // .attr('x',data => data.Country)
   // .attr('y',data=> data.value) to map values to the ticks at the axis bottom or left
  },[data])
 // console.log(totalCaloriesBurnt)
  return (
    <svg ref={svgRef}></svg>
  )
}

export default BarChartDisplay