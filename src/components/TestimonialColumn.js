import { faQuoteLeftAlt, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function TestimonialColumn(props) {
    let{DetailsName} = useSelector((state)=>state.gymRegucer)
  //  console.log(props.work)
  return (
    <Container>
        <div className='title_head'>
        {props.image? <img src={props.image}/>:<p className='image'>{DetailsName.UserName.charAt(0)}{DetailsName.UserName.charAt(1)}</p>}
        <h5 className='work'>{props.work}</h5>
        </div>
        <div className='foot'>
            <Left>
             <div className='foot-info'>
                 <div className='head'>
                 <h2>{props.Username?props.Username:DetailsName.UserName}</h2>
                 <small>commented on {props.date} at {props.time}</small>
                 </div>
                 <p>{props.Text}</p>
             </div>
            </Left>
            <FontAwesomeIcon icon={faQuoteLeftAlt} className='quote'/>
        </div>
        <h4>Feedback:{props.Feedback?
        'Please Try out The Virtual Workout Available.'
        :"Glad to see You working out..Keep up the Endurance"}</h4>
    </Container>
  )
}

export default TestimonialColumn
let Container = styled.div`
 background-color:#000;
 box-shadow:3px 3px 5px #f44336;
 border-radius:5px;
 color:#333;
 padding:20px 20px;
 height:150px;
 width:100%;
 flex-basis:33%;
 margin:10px 0;
 border-style:1px solid #333;
 .image{
    color:#fff;
    background-color:#f44336;
    height:25px;
    width:32px;
    border-radius:10px;
    text-align:center;
    padding:7px;
    font-size:20px;
    text-transform:uppercase
}
.work{
    color:#fff;
}
 img{
    width:40px;
    height:40px;
    border:2px solid #f44336;
    border-radius:50%;
}
 @media(max-width:600px){
    flex-basis:60%;
 }
 h4{
     color:#fff;
     font-weight:300;
     font-size:15px;
 }
 p{
     color:#fff;
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
     p{
        margin-top:10px;
     }
     .head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        small{
            margin-left:4px;
            font-size:12px;
        }
     }
 }
`