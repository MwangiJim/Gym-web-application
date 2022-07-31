import { faBarChart, faClipboardCheck, faClockFour, faClockRotateLeft, faGear, faGlobeAfrica, faRepeat, faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'
import ExercisePreview from './ExercisePreview';
import MainWorkout from './MainWorkout';
import Options from './Options';
import RightNewsSection from './RightNewsSection';
import ExerciseTrainer from './ExerciseTrainer';
import { SetTimeStart, setVisibility } from '../../redux/reducers/reducerSlice';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reminder from './Reminder';
import WeeklyGoal from './WeeklyGoal';
import Languages from './Languages';
export const LangaugeSetter = createContext()//Creating Context

const Virtualworkout = () => {
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
           console.log(RandomVideo.id.videoId)
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
  let[SportsNews,setSportsNews]=React.useState([])
  //https://newsapi.org/v2/everything?q=fitness&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125
  useEffect(()=>{
       let FetchNews=async()=>{
            await fetch('https://newsapi.org/v2/everything?q=workouts&apiKey=dc2d56d3ed754a1295c8d6fc4f1a6125')
            .then((response)=>response.json())
            .then((data)=>{
              //console.log(data)
              let Information = data.articles.map((item)=>{
                return(
                  {
                    Author:item.author,
                    Description:item.description,
                    timePublished:item.publishedAt,
                    Publisher:item.source.name,
                    Title:item.title,
                    Image:item.urlToImage,
                    PostLink:item.url,
                    Id:item.source.id
                  }
                )
              })
              setSportsNews(Information);
            })
            .catch((err)=>{
              console.log(err.message);
            })
       }
       FetchNews()
       return ()=>{
         FetchNews()
       }
  },[])
  let[News,setNews]=React.useState(false);
  const ShowNews=()=>{
    setNews((prevNews)=>!prevNews)
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
  return (
    <Container>
       {/**Left Container */}
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
            newsHandler = {ShowNews}
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

export default Virtualworkout

let Container = styled.div`
 width:100%;
 height:100vh;
 z-index:30;
 background-color:#fff;
 display:flex;
 padding:20px 5px;
 justify-content:space-between;
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
`
