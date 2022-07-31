import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setReminderDetails } from '../../redux/reducers/reducerSlice'
import DaySelector from './DaySelector'

function ReminderSection() {
    let{DaysSelected}=useSelector((state)=>state.gymRegucer)
    let dispatch = useDispatch()
    let[Form,setForm]=React.useState({
        Timer:'',
    })
    const HandleInput=(event)=>{
        setForm((prevState)=>{
            return{
                ...prevState,
                [event.target.name]:event.target.value
            }
          })
    }
    const setReminder=()=>{
        setTimeForm(true)
      dispatch(setReminderDetails({
        TimeSet:Form.Timer,
      }))
    }
    console.log(DaysSelected)
    let[TimeForm,setTimeForm]=React.useState(false)
    const CancelReminder=()=>{
      setTimeForm((prevForm)=>!prevForm)
    }
    let styles = {
        display:TimeForm?'none':'block'
    }
    //console.log(Form.checked)
  return (
    <Container style={styles}>
        <Time>
            <h3>Set Time</h3>
            <div className='set__time'>
                <small>Type in Time</small>
                <br/>
                <input
                 type={'time'}
                 value={Form.Timer}
                 name='Timer'
                 onChange={HandleInput}
                 className='input'
                />
                <DaySelector
                 day='Monday'
                />
                 <DaySelector
                 day='Tuesday'
                />
                 <DaySelector
                 day='Wednesday'
                />
                 <DaySelector
                 day='Thursday'
                />
                 <DaySelector
                 day='Friday'
                />
                 <DaySelector
                 day='Saturday'
                />
                <div className='bottom'>
                    <button onClick={CancelReminder}>CANCEL</button>
                    <button onClick={setReminder}>OK</button>
                </div>
            </div>
        </Time>
    </Container>
  )
}

export default ReminderSection
let Container = styled.div`
background:rgba(76,76,76,0.3);
height:96vh;
width:100%;
 bottom:115px;
 position:relative;
 z-index:4;
`
let Time = styled.div`
 top:50%;
 left:50%;
 position:relative;
 transform:translate(-50%,-50%);
 background-color:#fff;
 width:300px;
 height:max-content;
 border-radius:6px;
 overflow:hidden;
 h3{
    background-color:rgb(30, 102, 197);
    padding:10px 5px;
    color:#fff;
    text-align:center;
 }
 .set__time{
    padding:20px 12px;
    .input{
        width:140px;
        height:35px;
        border:2px solid grey;
        border-radius:7px;
        font-size:18px;
    }
    .bottom{
        display:flex;
        justify-content:space-between;
        align-items:center;
        button{
            cursor:pointer;
            background:transparent;
            padding:10px 20px;
            outline:none;
            border:none;
            color:rgb(30, 102, 197);
        }
    }
 }
`