import React, { useState } from 'react'
import styled from 'styled-components'
import StarRate from './StarRate'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetTrainerDetails } from '../redux/reducers/reducerSlice'
import { useEffect } from 'react'

function Trainer(props) {
  let{TrainerDetails,userDetails,DetailsName}=useSelector((state)=>state.gymRegucer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  const ShowBooking=()=>{
   // alert('Hello')
    navigate('/booking')
    dispatch(SetTrainerDetails({
      Image:props.image,
      TrainerLevel:props.level,
      TrainerName:props.name,
    }))
   // console.log(TrainerDetails)
  }
  const[userCheck,setUserCheck] = React.useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/newTrainer')
    .then((res)=>res.json())
    .then((data)=>{
     let InfoTrainer = data.message.map((item)=>{
       return(
         {
           email:item.Email,
           username:item.Username,
         }
       )
     })
     setUserCheck(InfoTrainer)
    })
  },[1])
  return (
    <Container>
       <div className='details'>
        {!props.image?<img className="image"src='/Images/avatar2.png'/>:<img src={props.image}/>}
        <div className='bottom'>
            <h4>{props.level} Trainer</h4>
            <StarRate
             rate={props.rating}
            />
            <p>{props.name}</p>
            <button onClick={userCheck.map((item)=>{
              return(
                <>
                 {item.email !== DetailsName.Email?ShowBooking():console.log('Not Possible')}
                </>
              )
            })} className='btn'>Book Trainer</button>
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
.image{
  width:100%;
  height:260px;
}
img{
     width:100%;
     object-fit:cover;
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