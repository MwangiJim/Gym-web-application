import { faBell, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import ReminderSection from './ReminderSection'
import {useSelector} from 'react-redux'
import ReminderComponent from './ReminderComponent'

function Reminder() {
    let{ReminderStorage}=useSelector((state)=>state.gymRegucer)
    let[showReminderSetter,setShowReminderSetter]=React.useState(false)
    const ShowReminderSetter=()=>{
         setShowReminderSetter((prevState)=>!prevState)
    }
  return (
    <Container>
      <div className='header'>
        <FontAwesomeIcon icon={faTimesCircle} className='close'/>
        <h1>REMINDER</h1>
      </div>
      {ReminderStorage?.length === 0?<div className='no__reminders'>
         <FontAwesomeIcon icon={faBell} className='bell'/>
         <p>Please set your reminder</p>
      </div>: <div className='reminders'>
         {ReminderStorage.map((reminder)=>{
        return(
          <ReminderComponent
           timepicked = {reminder.TimeSet}
          />
        )
       })}
      </div>}
      {showReminderSetter?<ReminderSection/>:''}
      <FontAwesomeIcon icon={faPlusCircle} className='plus' onClick={ShowReminderSetter}/>
    </Container>
  )
}

export default Reminder

let Container = styled.div`
 width:100%;
 height:96vh;
 bottom:630px;
 position:relative;
 z-index:4;
 background-color:#fff;
 .header{
    display:flex;
    justify-content:left;
    align-items:center;
    padding:5px 10px;
    h1{
        font-weight:500;
        font-size:30px;
        margin-left:5%;
    }
    .close{
        font-size:25px;
        cursor:pointer;
    }
 }
 .plus{
    left:47.5%;
    position:relative;
    color: rgb(30, 102, 197);
    font-size:40px;
    cursor:pointer;
 }
 .no__reminders{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    .bell{
        font-size:60px;
    }
 }
`