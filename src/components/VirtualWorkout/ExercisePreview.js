import { faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setVisibility } from '../../redux/reducers/reducerSlice';
import ExerciseComponent from './ExerciseComponent';
import PreviewExercises from './PreviewExercises';


function ExercisePreview(props){
    let dispatch=useDispatch();
    let{ WorkoutType,visibility,ExerciseSchedule,TotalTime}=useSelector((state)=>state.gymRegucer);
    //console.log(WorkoutType)
    let styles ={
      display:visibility?'block':'none'
    }
    const ShowExercisePanel=()=>{
      dispatch(setVisibility(false))
    }
  // console.log(ExerciseSchedule.exercise?ExerciseSchedule:'Default state')
  let[Show,setShowPreview]=React.useState(false);
    const ShowPreview=()=>{
       setShowPreview((prevState)=>!prevState)
    }
  return (
    <Container style={styles}>
        <div className='Top__section'>
            <img src={WorkoutType.BannerImage}/>
            <FontAwesomeIcon icon={faArrowCircleLeft} className='arrow_left'onClick={ShowExercisePanel}/>
            <h2>{WorkoutType.ExerciseType}</h2>
        </div>
          {ExerciseSchedule.exercise?
           <Gifs>
             <Header>
              <p> {TotalTime} mins . {ExerciseSchedule.exercise.length} workouts</p>
            </Header>
             <div className='Gifs'>
                {ExerciseSchedule.exercise.map((item,i)=>{
                return(
                  <ExerciseComponent
                    key={i}
                    Gif={item.gifPath}
                    exercise={item.Name}
                    duration={item.Duration}
                    frequency={item.Frequency}
                    showPreview={ShowPreview}
                  />
                )
              })}
            </div>
         </Gifs>:''}
         <Footer>
             <button onClick={props.handler}>START!</button>
         </Footer>
         {Show?<PreviewExercises
         />:''}
    </Container>
  )
}

export default ExercisePreview

let Container = styled.div`
display:none;
position:relative;
.Top__section{
  margin-bottom:-35px;
  cursor:pointer;
  img{
    width:100%;
    height:30vh;
    object-fit:cover;
    border-radius:8px;
  }
  h2{
    color:#fff;
    bottom:130px;
    position:relative;
    left:20px;
  }
  .arrow_left{
    color:#fff;
    font-size:21px;
    bottom:180px;
    position:relative;
    left:10px;
    cursor:pointer;
  }
}
.Gifs{
  height:45vh;
  max-height:45vh;
  overflow-y:scroll;
  ::-webkit-scrollbar{
    display:none;
  }
}
`
let Header = styled.div`
 border-bottom:1px solid grey;
 P{
   font-weight:600;
   color:grey;
   display:flex;
   align-items:center;
   ::before{
     content:'';
     width:3px;
     height:15px;
     background-color:rgb(30, 102, 197);
     display:block;
     margin:0 1%;
   }
   margin:2% 0;
 }
`
let Gifs = styled.div`

`
let Footer = styled.div`
 width:96%;
 z-index:8;
 padding:15px 12px;
 background-color:#fff;
 text-align:center;
 bottom:-45px;
 position:absolute;
 button{
  background-color:rgb(30, 102, 197);
  width:80%;
  height:50px;
  outline:none;
  border:none;
  font-size:20px;
  font-weight:600;
  cursor:pointer;
  color:#fff;
  border-radius:25px;
 }
`