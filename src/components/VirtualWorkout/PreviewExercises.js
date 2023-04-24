import { faBackward, faBackwardStep, faForward, faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function PreviewExercises() {
    let{ExerciseSchedule}=useSelector((state)=>state.gymRegucer);
    let[Close,setClosePreview]=React.useState(false);
    const ClosePreview=()=>{
      setClosePreview((prevState)=>!prevState)
    }
    let styles = {
        display:Close?'none':'block'
    }
    let[prevIndex,setPrevIndex]=React.useState(0);
    let[Button,setButton] = React.useState(false);
    const MoveFoward=()=>{
       if(prevIndex < ExerciseSchedule.exercise.length-1){
        setPrevIndex((previndex)=>previndex+1)
       }
       else if(prevIndex === ExerciseSchedule.exercise.length-1){
         setButton(true)
       }
       else{
        setPrevIndex(0)
       }
    }
    const MoveBackwards=()=>{
       if(prevIndex > 0){
        setPrevIndex((previndex)=>previndex-1)
       }
       else{
        setPrevIndex(0)
       }
    }
    let buttonStyles = {
        display:Button?'none':'block'
    }
  return (
    <Container style={styles}>
       <div className='display__section'>
         {ExerciseSchedule.exercise?.map((item,index)=>{
            return(
                <div className={prevIndex === index?'container_active':'container_inactive'}>
                   <img src={item.gifPath}/>
                    <div className='description'>
                        <h2>{item.Name}</h2>
                        <button onClick={ClosePreview}>CLOSE</button>
                    </div>
                </div>
            )
         })}
          <Controllers>
             <FontAwesomeIcon icon={faBackwardStep} className='icon' onClick={MoveBackwards}/>
             <h3><strong>{prevIndex+1}</strong>/{ExerciseSchedule.exercise?.length}</h3>
             <FontAwesomeIcon icon={faForwardStep} className='icon' onClick={MoveFoward} style={buttonStyles}/>
          </Controllers>
       </div>
    </Container>
  )
}

export default PreviewExercises

let Container = styled.div`
 height:93vh;
 width:100%;
 z-index:11;
 bottom:-50px;
 position:absolute;
 background:rgba(76,76,76,0.3);
 border-radius:5px;
 .display__section{
    background-color:#fff;
    height:max-content;
    width:60%;
    background-color:#fff;
    border-radius:5px;
    top:50px;
    left:100px;
    position:relative;
    img{
        width:380px;
        height:300px;
        object-fit:cover;
    }
    .description{
        padding:5px;  
        button{
            background-color:transparent;
            cursor:pointer;
            padding:10px 25px;
            text-transform:uppercase;
            font-size:17px;
            border:none;
            outline:none;
            color:rgb(30, 102, 197);
            left:70%;
            position:relative;
        }
    }
 }
`
let Controllers = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#333;
 color:#fff;
 padding:10px 5px;
 .icon{
    cursor:pointer;
    font-size:20px;
 }
 h3{
    strong{
        font-size:30px;
    }
 }
`