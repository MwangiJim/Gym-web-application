import { faBars, faNewspaper, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ResultsDisplay from './ResultsDisplay'
import WeekGoalDisplay from './WeekGoalDisplay'
import WorkoutButtons from './WorkoutButtons'

function MainWorkout(props){
  let{visibility,DaysCount}=useSelector((state)=>state.gymRegucer);

  let styles = {
    display:visibility?'none':'block'
  }
 // console.log(props.weekProgress)
 
  return (
    <Container style={styles}>
      <div className='top__section'>
        <div className='line'>
          <FontAwesomeIcon icon={props.menuBoolean?faTimesCircle:faBars} className='menu' onClick={props.settingsHandler}/>
          <h1>HOME WORKOUT</h1>
          <FontAwesomeIcon icon={faNewspaper} className='news' onClick={props.newsHandler}/>
        </div>
        <ResultsDisplay/>
        <WeekGoal>
            <div className='head'>
                <h4>WEEK GOAL</h4>
                <p>0/5</p>
            </div>
            <div className='center'>
                <small>Set weekly goals for a better body shape</small>
                <button onClick={props.SetWeeklyGoal}>SET A GOAL</button>
            </div>
            {/* {props.weekProgress?<WeekGoalDisplay/>:''} */}
        </WeekGoal>
      </div>
      <Buttons>
        <h3>BEGINNER</h3>
         <WorkoutButtons
           id={1}
          difficulty_level={1}
          Exercise='ABS BEGINNER'
          imagebackground='/Images/abs beginner.jpg'
         />
         <WorkoutButtons
           id={2}
          difficulty_level={1}
          Exercise='CHEST BEGINNER'
          imagebackground='/Images/chest beginner.jpg'
         />
         <WorkoutButtons
           id={3}
          difficulty_level={1}
          Exercise='ARM BEGINNER'
          imagebackground='/Images/arm beginner.jpg'
         />
         <WorkoutButtons
           id={4}
          difficulty_level={1}
          Exercise='LEG BEGINNER'
          imagebackground='/Images/leg beginner.jpg'
         />
         <WorkoutButtons
           id={5}
          difficulty_level={1}
          Exercise='SHOULDER & BACK BEGINNER'
          imagebackground='/Images/shoulder beginner.jpg'
         />
          <h3>INTERMEDIATE</h3>
         <WorkoutButtons
           id={6}
          difficulty_level={2}
          Exercise='ABS INTERMEDIATE'
          imagebackground='/Images/abs intermediate.jpg'
         />
         <WorkoutButtons
           id={7}
          difficulty_level={2}
          Exercise='CHEST INTERMEDIATE'
          imagebackground='/Images/chest intermediate.jpg'
         />
         <WorkoutButtons
           id={8}
          difficulty_level={2}
          Exercise='ARM INTERMEDIATE'
          imagebackground='/Images/arm intermediate.jpg'
         />
         <WorkoutButtons
           id={9}
          difficulty_level={2}
          Exercise='LEG INTERMEDIATE'
          imagebackground='/Images/leg intermediete.jpg'
         />
         <WorkoutButtons
           id={10}
          difficulty_level={2}
          Exercise='SHOULDER & BACK INTERMEDIATE'
          imagebackground='/Images/shoulder intermediate.jpg'
         />
          <h3>ADVANCED</h3>
         <WorkoutButtons
           id={11}
          difficulty_level={3}
          Exercise='ABS ADVANCED'
          imagebackground='/Images/abs advanced.jpg'
         />
         <WorkoutButtons
           id={12}
          difficulty_level={3}
          Exercise='CHEST ADVANCED'
          imagebackground='/Images/chest advanced.jpg'
         />
         <WorkoutButtons
           id={13}
          difficulty_level={3}
          Exercise='ARM ADVANCED'
          imagebackground='/Images/arm advanced.jpg'
         />
         <WorkoutButtons
           id={14}
          difficulty_level={3}
          Exercise='LEG ADVANCED'
          imagebackground='/Images/leg advanced.jpg'
         />
         <WorkoutButtons
           id={15}
          difficulty_level={3}
          Exercise='SHOULDER & BACK ADVANCED'
          imagebackground='/Images/shoulder advanced.jpg'
         />
         <p style={{color:'gray',fontSize:'14px',textAlign:'center'}}>© Copyright by BEFIT,2023</p>
      </Buttons>
    </Container>
  )
}

export default MainWorkout
let Container = styled.div`
 .row{
     display:flex;
     justify-content:space-between;
     align-items:center;
     margin:1% 3%;
  }
 .top__section{
     background-color: rgb(30, 102, 197);
     height:30vh;
     width:100%;
     .line{
       display:flex;
       justify-content:space-between;
       align-items:center;
       margin-left:1%;
       .menu{
        color:#fff;
        cursor:pointer;
        font-size:25px;
        display:none;
        z-index:6;
        @media(max-width:600px){
         display:block;
        }
       }
       h1{
        color:#fff;
        font-size:27px;
        font-weight:500;
        margin-left:2%;
       }
       .news{
        color:#fff;
        font-size:25px;
        margin-right:1%;
        cursor:pointer;
        display:none;
        @media(max-width:600px){
          display:block;
        }
      }
     }
     border-radius:6px 6px 50% 6px;
 }
`
let WeekGoal =styled.div`
 background-color:#fff;
 box-shadow:3px 3px 7px #333;
 border-radius:8px;
 padding:10px 12px;
 top:10px;
 position:relative;
 width:93%;
 height:20vh;
 left:10px;
 @media(max-width:600px){
  height:15vh;
  top:80px;
  position:relative;
 }
 .center{
     text-align:center;
     top:25px;
     position:relative;
     button{
         background-color:rgb(30, 102, 197);
         border-radius:25px;
         width:70%;
         height:45px;
         border:none;
         outline:none;
         cursor:pointer;
         margin-top:1%;
         color:#fff;
         font-size:20px;
         font-weight:500;
     }
     small{
         font-size:14px;
         color:grey;
     }
 }
 .head{
  display:flex;
  justify-content:space-between;
  align-items:center;
 }
`
let Buttons=styled.div`
 margin-top:9%;
 max-height:55vh;
 height:55vh;
 overflow-x:hidden;
 overflow-y:scroll;
 ::-webkit-scrollbar{
   display:none;
 }
`