import React, { useState } from 'react'
import styled from 'styled-components'
import StarRate from './StarRate'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetTrainerDetails } from '../redux/reducers/reducerSlice'

function Trainer(props) {
  let{TrainerDetails}=useSelector((state)=>state.gymRegucer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const ShowBooking=()=>{
    navigate('/booking')
    dispatch(SetTrainerDetails({
      Image:props.image,
      TrainerLevel:props.level,
      TrainerName:props.name,
    }))
    console.log(TrainerDetails)
  }
  return (
    <Container>
       <div className='details'>
       <img src={props.image}/>
        <div className='bottom'>
            <h4>{props.level}</h4>
            <StarRate
             rate={props.rating}
            />
            <p>{props.name}</p>
            <button onClick={ShowBooking} className='btn'>Book Trainer</button>
        </div>
       </div>
    </Container>
  )
}

export default Trainer
let Container = styled.div`
flex-basis:25%;
cursor:pointer;
margin:0 0.5%;
@media(max-width:600px){
}
img{
     width:100%;
 }
 .btn{
    color:#fff;
    background-color:#f44336;
    outline:none;
    border:4px solid #000;
    cursor:pointer;
    padding:12px 35px;
    transition:1s;
    border-radius:10px;
}
 .bottom{
    padding:10px 12px;
    background-color:#333;
    bottom:54px;
    position:relative;
    h4{
        color:#f44336;
        font-weight:400;
        font-size:20px;
    }
    p{
        color:#fff;
        margin:4% 0;
    }
  }
`