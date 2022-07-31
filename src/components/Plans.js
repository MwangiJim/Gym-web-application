import { faCheckCircle, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import{useDispatch} from 'react-redux'
import { SetPricingPlan } from '../redux/reducers/reducerSlice'
import { useNavigate } from 'react-router-dom'

function Plans(props) {
  let dispatch = useDispatch()
  let navigate = useNavigate()

  const SelectPlan=()=>{
    dispatch(SetPricingPlan({
      Plan:props.plan,
      Pricing:props.price,
      Training:props.training,
      Area:props.area,
      Third:props.third,
      Diet:props.diet,
      Results:props.results
    }))
    navigate(`/pricing`)
  }
  return (
    <Container>
        <h3>{props.plan}</h3>
        <p>$<strong>{props.price}</strong>/Mo</p>
        <ul>
          <li><FontAwesomeIcon icon={faCheckCircle} className='circle'/>{props.training}</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className='circle'/>{props.area}</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className='circle'/>{props.third}</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className='circle'/>{props.diet}</li>
          <li><FontAwesomeIcon icon={faCheckCircle} className='circle'/>{props.results}</li>
        </ul>
        <button onClick={SelectPlan}>Purchase {props.plan}</button>
    </Container>
  )
}

export default Plans
let Container = styled.div`
 flex-basis:30.3%;
 background-color:#333;
 padding:10px 4px;
 text-align:center;
 cursor:pointer;
 border-radius:10px;
 @media(max-width:600px){
  flex-basis:100%;
  margin:1% 0;
 }
 :hover{
   background-color:#333;
 }
 h3{
   color:#fff;
   font-size:35px;
   font-weight:400;
 }
 p{
   color:#fff;
   font-weight:400;
   strong{
     color:#f44336;
     font-size:35px;
     font-weight:400;
    }
  }
ul{
    flex:1;
    text-align:center;
    display:flex;
    justify-content:left;
    flex-direction:column;
    li{
      list-style:none;
      padding:12px 10px;
      color:#f4f4f4;
      .circle{
        color:#f44336;
        margin:0 2%;
      }
    }
  }
 button{
   padding:12px 40px;
   color:#fff;
   background-color:transparent;
   border:2px solid #f44336;
   outline:none;
   border-radius:25px;
   cursor:pointer;
 }
`