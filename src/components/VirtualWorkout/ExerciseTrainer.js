import { faArrowAltCircleLeft, faArrowAltCircleRight, faCheck, faCheckCircle, faPause, faQuestionCircle, faThumbsDown, faThumbsUp, faVideo, faVideoCamera, faVolumeHigh, faVolumeLow, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import styled from 'styled-components'
import { SetExerciseHistory, SetTimeFinished, SetTotalResults} from '../../redux/reducers/reducerSlice'
import EndofWorkout from './EndofWorkout'
import History from './History'
import ProgressCheck from './ProgressCheck'
import QuitExercise from './QuitExercise'
import Report from './Report'
import Rest from './Rest'
import moment from 'moment'
import useSpeechSynthesis from 'react-speech-kit/dist/useSpeechSynthesis'
import NegativeFeedback from './NegativeFeedback'
import VideoPreviewSection from './VideoPreviewSection'


function ExerciseTrainer(props){
  let[ExerciseIndex,setExerciseIndex]=React.useState(0)
  let[ShowQuit,setShowQuit]=React.useState(false)
  let {ExerciseSchedule,WorkoutType,ExercisesIcons,TimeStart,TimeFinished}=useSelector((state)=>state.gymRegucer)
  let [time,settime]=React.useState(30);
  let dispatch=useDispatch();
  let date = new Date().toDateString();

   let timeDifference = TimeFinished.time?.getTime()-TimeStart.time?.getTime()
   let time_difference = moment.duration(timeDifference).asMilliseconds()
  //  let Timeformat = moment.utc(time_difference*1000).format('mm:ss')
   //get minutes
   let Minutes = Math.floor(moment.duration(timeDifference).asMinutes())
   let Calories = Math.floor((Minutes*5*60)/200)
  useEffect(()=>{
    if(time>0){
      let RestTime = setInterval(()=>{
        settime((prevTime)=>prevTime-1)
      },1000)
      return ()=> clearInterval(RestTime)
    }
  })
 // console.log(ExerciseSchedule)
  const BackToExercisePreview=()=>{
    setShowQuit((prevState)=>!prevState)
  }
  let[Restover,setRestover]=React.useState(false);
  let styles ={
    display:Restover?'none':'block'
  }
  //Controls for Foward movement
  const MoveExerciseFoward=()=>{
    if(ExerciseIndex <=ExerciseSchedule.exercise.length-1){
      setExerciseIndex((nextExercise)=>nextExercise+1)
      setRestover((prevstate)=>!prevstate)
      settime(30)
      setTime(30)
    }
    else{
      setExerciseIndex(null)
    }
  }
  //Controls for Backward movement
  const MoveExerciseBackwards=()=>{
    if(ExerciseIndex >0){
      setExerciseIndex((prevExercise)=>prevExercise-1)
    }
    else{
      setExerciseIndex(0)
    }
  }
  let[Time,setTime]=React.useState(30)
  useEffect(()=>{
    if(Time>0){
      let Timer = setInterval(()=>{
        setTime((prevSeconds)=>prevSeconds-1)
    },1000)
    return ()=>clearInterval(Timer)//clean up functions prevent memory leaks
    }
    else{
     // console.log('Time Up!!')
    }
  })
 //console.log(Time)
 let[rest,setRest]=React.useState(false);//Show Rest Display
 let[showFinished,setShowFinished]=React.useState(false)
 let FinishTime = new Date();
 let [totalExercises,setTotalExercises]=React.useState(0)

  const GoToRest=()=>{
     if(ExerciseIndex>=ExerciseSchedule.exercise.length-1){
      //alert('End of the road')
      setTotalExercises((preValue)=>preValue+1)
      setShowFinished((prevPage)=>!prevPage)
      dispatch(SetExerciseHistory({
          Date:date,
          ExerciseName:WorkoutType.ExerciseType,
          Exerciseicon:ExercisesIcons.image
      }))
      dispatch(SetTimeFinished({
        time:FinishTime
      }))
     }
     else{
      setRest((prevForm)=>!prevForm)
     }
  }
  //console.log(rest)
  let btnStyles = {
    opacity:ExerciseIndex>=ExerciseSchedule.exercise.length-1?0:1
  }
  let[EndPage,setEndPage]=React.useState(false)
  const ShowLandingPage=()=>{
    setEndPage((prevForm)=>!prevForm)
  }
  let EndofWorkoutStyles ={
    display:EndPage?'none':'block'
  }
  let[showReport,setShowReport]=React.useState(false)
  const ShowReport=()=>{
     setShowReport((prevState)=>!prevState)
     dispatch(SetTotalResults({
      exercisesComplete:totalExercises,
      timeElapsed:Minutes,
      calories:Calories
     }))
  }
  let stylesReport = {
    display:showReport?'none':'block'
  }
  let[showThankyou,setShowThankyou]=React.useState(false)
  const ShowThankYouSection=()=>{
    setShowThankyou((prevState)=>!prevState)
  }
  let thankyoustyles ={
    bottom:showThankyou?'590px':'625px'
  }
  let thumbstyle = {
    backgroundColor:showThankyou?'rgb(30, 102, 197)':'#333'
  }
  let[ShowFeedback,setShowFeedback]=React.useState(false)
  const Showfeedbacksection=()=>{
     setShowFeedback((prevState)=>!prevState)
  }
  let[Video,setVideo]=React.useState(false);

  const ShowVideo=()=>{
    setVideo((prevState)=>!prevState)
   // alert('Clicked')
  }
 // console.log(ExerciseVideo)
  return (
    <Container style = {props.E_Styles}>
         <div className='top__bar'>
           <FontAwesomeIcon icon={faArrowAltCircleLeft} className='icon' onClick={BackToExercisePreview}/>
            <Right>
              <FontAwesomeIcon icon={faVideo} className='icons' onClick={ShowVideo}/>
              <FontAwesomeIcon icon={faVolumeUp} className='icons'/>
            </Right>
         </div>
          {ExerciseSchedule.exercise?
           <div className='session'>
             {ExerciseSchedule.exercise.map((item,index)=>{
               return(
                  <div className={ExerciseIndex === index?'visible':'invisible'}>
                     {/*{speak({text:`The Next ${item.Frequency?item.Frequency:`${item.Duration} seconds`},${item.Name}`})}*/}
                        <img src={item.gifPath}/>
                          {/**Progress Bar */}
                          <ProgressCheck
                            complete={ExerciseIndex+1}
                          />
                          <div className='likes'>
                            <FontAwesomeIcon icon={faThumbsDown} className='thumb' onClick={Showfeedbacksection}/>
                            <FontAwesomeIcon icon={faThumbsUp} className='thumb' onClick={ShowThankYouSection} style={thumbstyle}/>
                          </div>
                          <div className='Exercise__details'>
                            <h2>{item.Name}</h2>
                            <FontAwesomeIcon icon={faQuestionCircle}/>
                          </div>
                          <h1>{item.Frequency?item.Frequency:`00:${Time<10?`0${Time}`:Time}`}</h1>
                          {item.Frequency? <button className='BTN' onClick={GoToRest}>
                            <FontAwesomeIcon icon={faCheck}/>
                            DONE
                          </button>:<div className='pause'>
                            <FontAwesomeIcon icon={faPause} className='icon'/>
                            PAUSE
                            </div>}
                  </div>
               )
             })}
           </div>:''
          }
         <Controls>
           <div className='previous' onClick={MoveExerciseBackwards}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
              <h4>Previous</h4>
           </div>
            <div className='next' onClick={MoveExerciseFoward} style={btnStyles}>
            <FontAwesomeIcon icon={faArrowAltCircleRight}/>
             <h4>Next</h4>
          </div>
         </Controls>
         <div className='thankyou' style={thankyoustyles}>
            <FontAwesomeIcon icon={faCheckCircle} className='check'/>
            <h2>Thank You For the Feedback</h2>
          </div>
         {ShowQuit&&<QuitExercise
          quithandler={props.QuitHandler}
         />}
         {rest&&<Rest
           NextExerciseIndex={ExerciseIndex+1}
           Complete={ExerciseIndex+1}
           handler={MoveExerciseFoward}
           restStyles={styles}
           TIME={time}
         />} 
       {showFinished?<EndofWorkout
        Handler={ShowLandingPage}
        endofworkstyles={EndofWorkoutStyles}
       />:''} 
       {EndPage?<History
         FnHandler={ShowReport}
         historystyles={stylesReport}
       />:''}
       {showReport?<Report
         BackFnHandler={props.HAndler}
         ReportStyle={props.R_Styles}
       />:''}
       {ShowFeedback?<NegativeFeedback/>:''}
       {Video?<VideoPreviewSection
        vid_id = {props.Vid_id}
       />:''}
    </Container>
  )
}

export default ExerciseTrainer
let Container = styled.div`
 width:100%;
 height:max-content;
 position:relative;
 .pause{
  display:flex;
  justify-content:center;
  color:#fff;
  font-size:30px;
  background-color:rgb(30, 102, 197);
  border-radius:20px;
  width:40%;
  padding:5px;
  left:30%;
  position:relative;
  align-items:center;
  .icon{
    margin:0 1%;
  }
 }
 .top__bar{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:0 5%;
  .icon{
    font-size:20px;
    cursor:pointer;
  }
 }
 img{
  width:100%;
  object-fit:cover;
  height:50vh;
 }
 .likes{
  bottom:40px;
  position:relative;
  left:88%;
  color:#fff;
  .thumb{
    background-color:#333;
    margin:0 1%;
    padding:5px;
    border-radius:50%;
    cursor:pointer;
    :focus{
      background-color:rgb(30, 102, 197);
    }
  }
 }
 .Exercise__details{
  display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  h2{
    margin:0 1%;
    font-weight:600;
  }
 }
 h1{
  text-align:center;
  margin:2%;
  font-weight:600;
  font-size:35px;
 }
 .BTN{
  text-align:center;
  background-color:rgb(30, 102, 197);
  outline:none;
  border:none;
  width:60%;
  height:40px;
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:25px;
  left:20%;
  position:relative;
  margin:12px 0 40px;
  font-weight:600;
  font-size:20px;
  cursor:pointer;
 }
 .thankyou{
  display:flex;
  bottom:500px;
  position:relative;
  z-index:7;
  align-items:center;
  justify-content:center;
  background-color:#fff;
  padding:5px 0;
  .check{
    color:green;
  }
 }
`
let Right=styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 .icons{
  cursor:pointer;
  margin:0 12%;
  background-color:#333;
  color:#fff;
  padding:5px;
  border-radius:50%;
 }
`
let Controls=styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 .previous{
  display:flex;
  align-items:center;
  cursor:pointer;
 }
 .next{
  display:flex;
  align-items:center;
  cursor:pointer;
 }
`