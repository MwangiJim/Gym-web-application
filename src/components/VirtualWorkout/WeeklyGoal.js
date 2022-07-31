import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import { SetDaysCount } from '../../redux/reducers/reducerSlice'

function WeeklyGoal(props) {
    let dispatch =  useDispatch()
    let[hideWeeklyGoal,setHideWeeklyGoal]=React.useState(false);
    const HideWeeklyGoal=()=>{
        setHideWeeklyGoal((prevForm)=>!prevForm)
        dispatch(SetDaysCount(TrainingDays.optionselected))
    }
    let styles = {
        display:hideWeeklyGoal?'none':'block'
    }
    let[TrainingDays,setTrainingDays]=React.useState({
        optionselected:null,
        option1:1, 
        option2:2, 
        option3:3, 
        option4:4, 
        option5:5, 
        option6:6, 
        option7:7, 
    })    
    const HandleOption=(e)=>{
         setTrainingDays((PrevChoice)=>{
            return{
                ...PrevChoice,
                [e.target.name]:e.target.value
            }
         })
    }
    let[StartingDay,setStartingDay]=React.useState({
        firstday:'',
        first:'Monday',
        second:'Tuesday',
        third:'Wednesday'
    })
    const Handleoption=(e)=>{
      setStartingDay((prevOptions)=>{
        return{
            ...prevOptions,
            [e.target.name]:e.target.value
        }
      })
    }
    const showProgressDone=()=>{
        setHideWeeklyGoal(true)
    }
  return (
    <Container style={styles}>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow' onClick={HideWeeklyGoal}/>
        <div className='textbox'>
            <h2>Set your weekly goal</h2>
            <small>We recommend training at least 3 days weekly for a better result </small>

            <label>Weekly training days</label>
            <select name='optionselected' onChange={HandleOption}>
                <option value={TrainingDays.option1}>1 day</option>
                <option value={TrainingDays.option2}>2 days</option>
                <option value={TrainingDays.option3}>3 days</option>
                <option value={TrainingDays.option4}>4 days</option>
                <option value={TrainingDays.option5}>5 days</option>
                <option value={TrainingDays.option6}>6 days</option>
                <option value={TrainingDays.option7}>7 days</option>
            </select>
            <label>First day of week</label>
            <select name='firstday' onChange={Handleoption}>
                <option value={StartingDay.first}>Sunday</option>
                <option value={StartingDay.second}>Monday</option>
                <option value={StartingDay.third}>Saturday</option>
            </select>
        </div>
        <button onClick={showProgressDone}>SAVE</button>
    </Container>
  )
}

export default WeeklyGoal

let Container = styled.div`
 bottom:620px;
 position:relative;
 z-index:5;
 background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url('/Images/blog-5.jpg');
 background-position:center;
 background-size:cover;
 width:100%;
 height:95vh;
 .arrow{
    color:#fff;
    font-size:19px;
    cursor:pointer;
    margin:2%;
 }
 .textbox{
    display:flex;
    justify-content:space-between;
    text-align:left;
    flex-direction:column;
    color:#fff;
    padding:10px;
    label{
        margin:5% 0;
    }
    select{
        border-top:none;
        border-bottom:1px solid #f4f4f4;
        border-left:none;
        border-right:none;
        outline:none;
        background:transparent;
        padding:5px 0;
        color:#fff;
        font-size:14px;
        option{
            color:rgb(30, 102, 197);
        }
    }
    small{
        color:grey;
        font-size:16px;
    }
 }
 button{
    outline:none;
    border:none;
    cursor:pointer;
    background-color: rgb(30, 102, 197);
    width:90%;
    color:#fff;
    border-radius:7px;
    height:45px;
    font-size:19px;
    font-weight:700;
    top:190px;
    position:relative;
    left:30px;
}
`