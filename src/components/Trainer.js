import React, { useState } from 'react'
import styled from 'styled-components'
import StarRate from './StarRate'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetTrainerDetails } from '../redux/reducers/reducerSlice'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { userDetailsContext } from '../App'

function Trainer(props) {
  let{TrainerDetails,DetailsName}=useSelector((state)=>state.gymRegucer)
  let navigate = useNavigate()
  let dispatch = useDispatch()
  //1:Look for way to check if one has already booked a trainer....
  let[booking,setbooking]=React.useState([])
  useEffect(()=>{
     fetch('http://localhost:8080/bookings')
     .then((res)=>res.json())
     .then((data)=>{
        //console.log(data)
        let booked = data.message.map((item)=>{
           return(
              {
                 name:item.FullName,
                 age:item.Age,
                 email:item.Email,
                 trainer:item.Trainer
              }
           )
        })
        setbooking(booked)
     })
     .catch((err)=>{
        console.log(err.message)
     })
  })
  const ShowBooking=()=>{
   // alert('Hello')
   navigate('/booking')
   dispatch(SetTrainerDetails({
     Image:props.image,
     TrainerLevel:props.level,
     TrainerName:props.name,
   }))
   //localStorage.setItem('trainer',props.name)
   // console.log(TrainerDetails)
  }
  const[userCheck,setUserCheck] = React.useState([])
  useEffect(()=>{
    fetch('http://localhost:8080/newMember')
    .then((res)=>res.json())
    .then((data)=>{
     let InfoMember = data.message.map((item)=>{
       return(
         {
           email:item.Email,
           username:item.Username,
         }
       )
     })
     setUserCheck(InfoMember)
    })
  },[1])
  let userDetails = React.useContext(userDetailsContext);
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
            {userCheck.length>0?'':"*to book trainers you need a members account*"}
            {userCheck.map((item)=>{
              return(
                <>
                  {item?.email === userDetails?.data.email?<button onClick={ShowBooking} className='btn'>Book Trainer</button>:
                 <li onClick={()=>navigate(`/joinus`)}><FontAwesomeIcon icon ={faTriangleExclamation}/>Create Member Account *Click here*</li>}
                </>
              )
            })}
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
    li{
      list-style:none;
      color:red;
      font-size:9px;
      padding:10px 20px;
      background:transparent;
      border-radius:5px;
      border:1px solid red;
    }
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