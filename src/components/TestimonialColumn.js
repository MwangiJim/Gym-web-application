import { faQuoteLeftAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function TestimonialColumn(props) {
    let{DetailsName} = useSelector((state)=>state.gymRegucer)
  return (
    <Container>
        <p>{props.Text}</p>
        <h4>Feedback:{props.Feedback?
        'Please Try out The Virtual Workout Available.'
        :"Glad to see You working out..Keep up the Endurance"}</h4>
        <div className='foot'>
            <Left>
             {props.image? <img src={props.image}/>:<p>{DetailsName.UserName.charAt(0)}{DetailsName.UserName.charAt(2)}</p>}
             <div className='foot-info'>
                 <h2>@{props.Username?props.Username:DetailsName.UserName}</h2>
                 <small>{props.work}</small>
             </div>
            </Left>
            <FontAwesomeIcon icon={faQuoteLeftAlt} className='quote'/>
        </div>
    </Container>
  )
}

export default TestimonialColumn
let Container = styled.div`
 background-color:#333;
 border-radius:5px;
 padding:20px 20px;
 height:150px;
 max-width:600px;
 flex-basis:33%;
 margin:0 1%;
 border-style:1px solid #333;
 @media(max-width:600px){
    flex-basis:60%;
 }
 h4{
     color:#fff;
     font-weight:300;
     font-size:15px;
 }
 p{
     color:gray;
     marging:3% 0;
     font-size:16px;
 }
 .foot{
     display:flex;
     justify-content:space-between;
     align-items:center;
     margin-top:4%;
     h1{
         font-size:80px;
         color:#f44336;
     }
     .quote{
         color:#f44336;
         font-size:30px;
     }
 }
`
let Left = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 img{
     width:40px;
     height:40px;
     border:2px solid #f44336;
     border-radius:50%;
 }
 .foot-info{
     text-align:left;
     small{
         color:#f44336;
     }
     h2{
         font-size:17px;
         font-weight:300;
         color:#fff;
     }
 }
 p{
    color:#fff;
    background-color:#f44336;
    height:25px;
    width:32px;
    border-radius:10px;
    text-align:center;
    padding:6px;
    font-size:25px;
    text-transform:uppercase
}
`