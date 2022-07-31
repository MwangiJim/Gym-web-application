import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function ExerciseComponent(props){
  return (
    <Container onClick={props.showPreview}>
      <div className='left__side'>
         <FontAwesomeIcon icon={faBars} className='menu'/>
      </div>
      <div className='right__side'>
         <img src={props.Gif}/>
         <div className='gif__details'>
             <h2>{props.exercise}</h2>
             <p>{props.duration?`00:${props.duration}`:props.frequency}</p>
         </div>
      </div>
    </Container>
  )
}

export default ExerciseComponent
let Container = styled.div`
 display:flex;
 cursor:pointer;
 justify-content:space-between;
 align-items:center;
 padding:10px 12px;
 .left__side{
    flex-basis:5%;
    .menu{
        font-size:26px;
        color:grey;
    }
 }
 .right__side{
    border-bottom:1px solid gray;
    margin-bottom:1px;
     display:flex;
     justify-content:left;
     flex-basis:95%;
     text-align:left;
     img{
         cursor:pointer;
         width:20%;
         object-fit:cover;
     }
     .gif__details{
        h2{
            font-size:18px;
        }
        p{
            color:gray;
            margin-top:4%;
        }
     }
 }
`