import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function ReminderComponent(props) {
  let{DaysSelected}=useSelector((state)=>state.gymRegucer)
  return (
    <Container>
      <div className='top'>
      <h3>{props.timepicked}</h3>
       <FontAwesomeIcon icon={faTrash} className='trash'/>
      </div>
       <div className='bottom'>
          {DaysSelected.map((day)=>{
            return(
              <p>{day.DayPicked}</p>
            )
          })}
       </div>
    </Container>
  )
}

export default ReminderComponent
let Container = styled.div`
 width:90%;
 padding:15px 10px;
 border-radius:6px;
 box-shadow:0px 0px 5px 5px #333;
 margin:3% 1%;
 .bottom{
  display:flex;
  justify-content:center;
  align-items:center;
 }
 .top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  .trash{
    cursor:pointer;
    :hover{
      color:red;
    }
  }
 }
`