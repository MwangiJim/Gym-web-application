import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function Pricing() {
  let navigate= useNavigate()
  let{StorePricingPlan}=useSelector((state)=>state.gymRegucer);
   let [Time,setTime]=React.useState(10)
  let Counter = React.useRef(Time);

  useEffect(()=>{
    setInterval(()=>{
      Counter.current = Counter.current - 1;
    },1000)
  },[])
  console.log(Counter.current)

  const SelectPlan=()=>{
     navigate(`/pricingpayment`)
  }
  // let[Time,SetTime]=useState(30)

  // useEffect(()=>{
  //    let count= setInterval(()=>{
  //      SetTime(prevTime=>prevTime-1)
  //    },1000)

  //    return ()=>clearInterval(count)
  // },[Time])
  // console.log(Time)
  return (
    <Container>
      <img src='/Images/image1.png'/>
        <div className='center'>
          <h4>Experienced Trainers + Great Equipment</h4>
          <h2>$<strong>{StorePricingPlan.Pricing}</strong>/mo</h2>
          <p>Get Advanced Care And Training Experience with{StorePricingPlan.Plan} with a 12 month Subscription</p>
          <div className='time'>
             <div className='day'>
                <p></p> 
                <h6>days</h6>
             </div>
             <small>:</small>
             <div className='day'>
                <p></p> 
                <h6>hours</h6>
             </div>
             <small>:</small>
             <div className='day'>
                <p></p> 
                <h6>minutes</h6>
             </div>
             <small>:</small>
             <div className='day'>
                <p></p> 
                <h6>seconds</h6>
             </div>
          </div>
          <button onClick={SelectPlan}>Start Now</button>
          <br/>
          <FontAwesomeIcon icon={faCheck} className='check'/>
          <span>30 day money-back guarantee</span>
        </div>
    </Container>
  )
}

export default Pricing

let Container = styled.div`
 background:radial-gradient(#f44336,#f4f4f4);
 width:100%;
 height:100vh;
 @media(max-width:600px){
  img{
    top:300px;
    position:absolute;
  }
 }
 img{
   width:50%;
   top:10%;
   left:50px;
   position:absolute;
 }
 .center{
   top:50%;
   left:50%;
   position:absolute;
   transform:translate(-50%,-50%);
   text-align:center;
   h4{
     font-size:24px;
     margin:3% 0;
   }
   h2{
     font-size:40px;
     font-weight:600;
     strong{
       font-size:90px;
     }
     margin:4% 0;
   }
   p{
     margin:10px 0 20px;
   }
   button{
     background-color:#000;
     padding:12px 50px;
     color:#fff;
     border:none;
     border-radius:25px;
     cursor:pointer;
     outline:none;
     font-size:20px;
     font-weight:600;
     margin:3% 0;
   }
   .check{
     color:#f44336;
     font-weight:600;
     font-size:20px;
   }
   small{
     margin:3% 0;
     color:gray;
   }
   .time{
     display:flex;
     justify-content:center;
     align-items:center;
     .day{
      margin:0 2%;
        p{
          color:#000;
          text-align:center;
          background-color:#fff;
          padding:15px;
          border-radius:10px;
        }
        h6{
          margin-top:-15px;
        }
     }
     span{
       color:gray;
       font-size:18px;
       margin-bottom:30px;
     }
   }
 }
`