import { faBarChart, faClipboardCheck, faClockFour, faClockRotateLeft, faGear, faGlobeAfrica, faRepeat, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import ExercisePreview from './ExercisePreview';
import MainWorkout from './MainWorkout';
import Options from './Options';
import RightNewsSection from './RightNewsSection';
import ExerciseTrainer from './ExerciseTrainer';
import { SetTimeStart, setVisibility } from '../../redux/reducers/reducerSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reminder from './Reminder';
import WeeklyGoal from './WeeklyGoal';
import Languages from './Languages';
import { userDetailsContext } from '../../App';
export const LangaugeSetter = createContext()//Creating Context

const Virtualworkout = () => {
 // let{DetailsName} = useSelector((state)=>state.gymRegucer)
  let userDetails = React.useContext(userDetailsContext);
    let[Start,setStart]=React.useState(false);
    let StartTime = new Date();
    let dispatch=useDispatch()
    const StartWorkout=()=>{
       setStart((prevView)=>!prevView)
       dispatch(SetTimeStart({
        time:StartTime
       }))
    }
   // console.log(StartTime)
   let[showMainPage,setShowMainPage]=React.useState(false)
  const BackToMainPage=()=>{
     setShowMainPage((prevState)=>!prevState)
     setStart(false);
  }
  //alert(Start)
  let reportstyles = {
    display:showMainPage?'none':'block'
  }
  let ExerciseTrainerStyles = {
    display:showMainPage?'none':'block'
  }
  let[ExerciseVideo,setExerciseVideo]=React.useState([])
  useEffect(()=>{
    let fetchVideoExercise = async()=>{
        await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=pushups&key=AIzaSyAKk3p0zGEes4k0ar4RR5kFFllqCr-SVH0`)
        .then((response)=>response.json())
        .then((data)=>{
           //console.log(data)
           let RandomVideo = data.items[Math.floor(Math.random()*data.items.length-1)];
        //   console.log(RandomVideo.id.videoId)
           setExerciseVideo(RandomVideo.id.videoId)
        })
    }
    fetchVideoExercise()
  })
  //console.log(ExerciseVideo)
  let[Settings,setSettings]=React.useState(false)
  const ShowSettings=()=>{
     setSettings((prevState)=>!prevState)
  }
  let settingsStyles={
    left:Settings?'0px':'-350px'
  }
  const QuitExercise=()=>{
      setStart(false)
  }
  let[reminder,setReminder]=React.useState(false);
  const ShowReminder=()=>{
    setReminder((prevState)=>!prevState)
  }
  let[Weeklygoal,setWeeklyGoal]=React.useState(false)
  const ShowWeeklyGoalsMenu=()=>{
        setWeeklyGoal((prevState)=>!prevState)
  }
  let[langauge,setlanguage]=React.useState(false);
  const ShowLangauges=()=>{
     setlanguage((prevState)=>!prevState)
  }
  let[languages,setlangauges] = React.useState(['English','Deustch','Chinese','Spanish','French','Mexican','Portguese','Turkey','Vietnamese','Japanese'])
  let[PreloaderImg,setPreloaderImg]=React.useState(false);
  useEffect(()=>{
    setTimeout(()=>{
       setPreloaderImg(true);
    },5000);
  })
  let styles = {
    display:PreloaderImg?'none':'block'
  }
   //console.log(Count)
  return (
    <Container>
       {/**Left Container */}
       <div className='preloader-image' style={styles}>
          <div className='content'>
            <h1>Welcome to VirtualWorkout,{userDetails?.data.username?userDetails.data.username:''}</h1>
            <div className='info'>
               <h3>BE<strong>FIT</strong></h3>
            <div className='info-content'>
              <h4>ENERGY & PERSISTENCE</h4>
              <p>Conquer all things</p>
            </div>
            </div>
          </div>
       </div>
       <LeftSide style={settingsStyles}>
          <div className='top__banner'>
            <FontAwesomeIcon icon={faGlobeAfrica} className='africa' onClick={ShowLangauges}/>
              <h2>Home Workout</h2>
          </div>
          <Options
           icontype={faClockRotateLeft}
           text='Training Plans'
           id={1}
          />
          <Options
           icontype={faClipboardCheck}
           text='Discover'
           id={2}
          />
          <Options
           icontype={faBarChart}
           text='Report'
           id={3}
          />
           <Options
           icontype={faClockFour}
           text='Reminder'
           ShowOptionsHandler = {ShowReminder}
           id={4}
          />
          <Options
           icontype={faGlobeAfrica}
           text='Language Options'
           id={5}
          />
          <Options
           icontype={faGear}
           text='Settings'
           id={6}
          />
          <Options
           icontype={faRepeat}
           text='Restart Progress'
           id={7}
          />
       </LeftSide>
       {/**Center */}
      <Center>
           <MainWorkout
            settingsHandler = {ShowSettings}
            menuBoolean = {Settings}
            SetWeeklyGoal={ShowWeeklyGoalsMenu}
           /> 
          {Start? <ExerciseTrainer
            R_Styles = {reportstyles}
            E_Styles = {ExerciseTrainerStyles}
            HAndler = {BackToMainPage}
            Vid_id = {ExerciseVideo}
            QuitHandler = {QuitExercise}
          />: <ExercisePreview
           handler={StartWorkout}
          /> }
          {reminder?<Reminder/>:''}
          {Weeklygoal?<WeeklyGoal/>:''}
          <LangaugeSetter.Provider value={languages}>
              {langauge?<Languages/>:''}
          </LangaugeSetter.Provider>
      </Center>
       {/**Right Container */}
       <RightNewsSection/>
    </Container>
  )
}

export default React.memo(Virtualworkout)

let Container = styled.div`
 width:100%;
 height:100vh;
 z-index:30;
 background-color:#fff;
 display:flex;
 padding:20px 5px;
 justify-content:space-between;
 .preloader-image{
  height:100vh;
  width:100%;
  top:0;
  left:0;
  position:fixed;
  z-index:6;
  background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/abs advanced.jpg');
  background-size:cover;
  background-position:center;
  .content{
    top:80%;
    left:30%;
    position:absolute;
    color:#fff;
    h1{
      font-size:35px;
      font-weight:400;
    }
    .info{
      display:flex;
      border:2px solid #f44336;
      border-radius:6px;
      padding:15px 10px;
      background:linear-gradient(rgba(255,0,0,0.3),rgba(255,0,0,0.3));
      justify-content:center;
      align-items:center;
      h3{
        margin:0 2%;
        strong{
          color:#f44336;
        }
      }
      .info-content{
        text-align:left;
        h4{
          font-size:16px;
          font-weight:300;
        }
      }
    }
  }
 }
`
let LeftSide =styled.div`
 flex-basis:25%;
 margin:4% 0.5%;
 .top__banner{
     background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/about-img.jpg');
     background-size:cover;
     background-position:center;
     width:100%;
     height:30vh;
     h2{
         color:#fff;
         top:80px;
         left:20px;
         font-size:30px;
         font-weight:400;
         position:relative;
     }
     .close{
      display:none;
      color:#fff;
      font-size:20px;
      cursor:pointer;
      left:90%;
      position:relative;
     }
     border-radius:5px;
 }
 .africa{
  color:#fff;
  cursor:pointer;
  left:90%;
  font-size:18px;
  top:10px;
  position:relative;
  :hover{
    color:cyan;
  }
 }
`
let Center=styled.div`
flex-basis:50%;
margin-top:4%;
height:max-content;
position:relative;
`
