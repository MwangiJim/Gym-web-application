import { faClock, faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function ExerciseHistoryComponent(props) {
  return (
    <Container>
      <div className='image'>
         <img src={props.Image}/>
      </div>
       <div className='history_info'>
          <small>{props.Time},3:45 pm</small>
          <h3>{props.Exercise}</h3>
          <div className='details'>
             <Detail>
               <FontAwesomeIcon icon={faClock} className='clock'/>
                <small>{props.time_format}</small>
             </Detail>
             <Detail>
              <FontAwesomeIcon icon={faFire} className='fire'/>
               <small>{props.calories} kcal</small>
             </Detail>
          </div>
       </div>
    </Container>
  )
}

export default ExerciseHistoryComponent

let Container=styled.div`
  padding:10px 14px;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background-color:#f4f4f4;
  border-bottom:1px solid grey;
 .image{
  flex-basis:10%;
  img{
    width:40px;
    height:40px;
    object-fit:cover;
  }
 }
  .history_info{
    flex-basis:90%;
    margin-left:2%;
    text-align:left;
    .details{
      display:flex;
      justify-content:left;
      align-items:center;
    }
    h3{
      margin:1% 0;
    }
  }
`
let Detail = styled.div`
 display:flex;
 align-items:center;
 margin-left:1%;
 .clock{
  color:rgb(30, 102, 197);
 }
 .fire{
  color:#f44336;
 }
`