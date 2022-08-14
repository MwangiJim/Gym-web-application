import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ResultsDisplay from './ResultsDisplay'

function Report(props) {
  return (
    <Container style={props.ReportStyle}>
      <div className='top'>
         <div className='top__area'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={props.BackFnHandler} className='arrow'/>
          <h2>REPORT</h2>
         </div>
         <ResultsDisplay/>
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