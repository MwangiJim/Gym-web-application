import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function DashboardComponent({value,percent,icon,Text}) {
  return (
    <Box>
     <div className='box_head'>
       <p>{Text}</p>
       <FontAwesomeIcon icon ={icon} color='gold'/>
     </div>
     <h3>{value}</h3>
     <div className='box_tail'>
        <i>+{percent}%</i>
        <small>Since Last Month</small>
     </div>
    </Box>
  )
}

export default DashboardComponent

let Box = styled.div`
  background-color:#3e2d71bd;
  border-radius:5px;
  padding:8px;
  height:19vh;
  flex-basis:50%;
  margin:1%;
  width:230px;
  .box_head{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:gray;
    p{
      font-size:14px;
      font-weight:300;
    }
  }
  h3{
    color:#fff;
    font-size:25px;
    font-weight:400;
    margin:12% 0;
  }
  .box_tail{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
  }
`