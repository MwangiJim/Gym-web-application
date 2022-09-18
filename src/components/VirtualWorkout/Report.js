import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ResultsDisplay from './ResultsDisplay'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
function Report(props) {
  let data = [
    {
      year:2017,
      gains:10000,
      loss:5000
    },
    {
      year:2018,
      gains:30000,
      loss:3000
    },
    {
      year:2019,
      gains:13000,
      loss:1000
    },
    {
      year:2020,
      gains:50000,
      loss:6500
    }
  ]
  let[userData,setUserData]=React.useState({
    labels:data.map((data)=>data.year),
    datasets:[{
      label:'Gained',
      data:data.map((data)=>data.gains),

    }]
  })
  return (
    <Container style={props.ReportStyle}>
      <div className='top'>
         <div className='top__area'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={props.BackFnHandler} className='arrow'/>
          <h2>REPORT</h2>
         </div>
         <ResultsDisplay/>
        <div className='chart' style={{width:'70%'}}>
            <Line data={userData} />
        </div>
      </div>
    </Container>
  )
}

export default Report
let Container=styled.div`
 background-color:#fff;
 width:100%;
 height:94vh;
 z-index:9;
 bottom:4px;
 position:absolute;
 .top{
  background-color:rgb(30, 102, 197);
  height:30vh;
  .top__area{
    display:flex;
    align-items:center;
    color:#fff;
    h2{
        margin-left:2%;
    }
    .arrow{
      cursor:pointer;
    }
  }
 }
`