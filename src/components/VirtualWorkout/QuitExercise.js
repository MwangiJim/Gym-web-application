import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function QuitExercise(props) {
    let[HideQuit,setHideQuit]=React.useState(false);
   // console.log(HideQuit)
    const HideQuitSection=()=>{
        setHideQuit((prevState)=>!prevState);
    }
    let styles = {
        display:HideQuit?'none':'block'
    }
  return (
    <Container style={styles}>
        <FontAwesomeIcon icon={faArrowCircleLeft} className='left' onClick={HideQuitSection}/>
        <div className='textbox'>
            <h2>Quit</h2>
            <button className='button'>Just take a look</button>
            <button className='button'>Too hard</button>
            <button className='button'>Don't know how to do it</button>
            <div className='btn' onClick={props.quithandler}>
                <h3>Quit</h3>
                <FontAwesomeIcon icon={faArrowCircleRight}/>
           </div>
        </div>
    </Container>
  )
}

export default QuitExercise
let Container=styled.div`
 background-color:rgb(30, 102, 197);
 width:100%;
 height:94vh;
 bottom:-10px;
 position:absolute;
 z-index:8;
 .textbox{
    display:flex;
    jusify-content:space-between;
    align-items:center;
    flex-direction:column;
    h2{
        color:#fff;
        font-size:25px;
    }
    .button{
        color:#fff;
        width:97%;
        height:35px;
        background-color:transparent;
        border-radius:10px;
        outline:none;
        border:none;
        cursor:pointer;
        margin:1% 0;
        border:1px solid #fff;
        :focus{
            background-color:#fff;
            color:#000;
        }
    }
 }
 .btn{
    color:#fff;
    top:0px;
    font-size:17px;
    positon:relative;
    display:flex;
    align-items:center;
    outline:none;
    border:2px solid #fff;
    border-radius:25px;
    cursor:pointer;
    background-color:transparent;
    padding:7px 36px;
    h3{
        margin:0% 1%;
    }
    transition:0.5s;
    :hover{
        background-color:#fff;
        color:#000;
    }
 }
 .left{
    color:#fff;
    margin:2% 20px;
    cursor:pointer;
    font-size:18px;
 }
`