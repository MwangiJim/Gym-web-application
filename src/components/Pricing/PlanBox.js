import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { SetPurchaseDetails } from '../../redux/reducers/reducerSlice'

function PlanBox(props) {
  let dispatch = useDispatch()
    let nextdate = moment().add(props.period,'M')
   // console.log(nextdate._d.toLocaleDateString())
    const SendPurchaseDetails=()=>{
      dispatch(SetPurchaseDetails({
        Period:props.period,
        Savings:savings,
        Price:B,
        RenewalPrice:props.renewalprice,
        Discount:difference,
        InitialAmount:props.initialAmount
      }))
    }
      let A = props.initialAmount*props.period;
      let B = props.price*props.period;
      let difference = Math.floor(A-B);
      let savings = Math.floor((difference/A)*100)
  return (
    <Container onClick={SendPurchaseDetails}>
       <p>{props.period} {props.period===1?'month':'months'}</p>
       <div className='save'>
          {props.initialAmount?  <h5>Save {savings}%</h5>:'Free Consultation'}
       </div>
       {props.initialAmount &&  <h5 className='crossout'>$ {props.initialAmount}</h5>}
       <h1>${props.price}</h1>
       <small>$/month</small>
       <br/>
     <h6>pricing plan renews at $ {props.renewalprice}/month<br/>on {nextdate._d.toLocaleDateString()}</h6> 
    </Container>
  )
}

export default PlanBox

let Container = styled.div`
 background-color:#fff;
 border-radius:5px;
 padding:30px 12px;
 flex-basis:25%;
 text-align:center;
 cursor:pointer;
 margin:0 1%;
 box-shadow:4px 4px 10px #333;
 @media(max-width:600px){
  flex-basis:100%;
  margin:1.4% 0;
 }
  p{
      font-size:24px;
      font-weight:400;
      margin:4% 0;
  }
  h1{
      font-size:40px;
      font-weight:600;
  }
  small{
      color:gray;
      font-size:18px;
      font-weight:200;
  }
  h6{
      font-weight:300;
      font-size:13px;
      margin-top:4%;
  }
  .save{
    background-color:#000;
    padding:0.5px 12px;
    text-align:center;
    width:40%;
    left:30%;
    bottom:90px;
    position:relative;
    border-radius:25px;
    color:#fff;
    h5{
      margin:10px 0;
      font-size:17px;
    }
  }
  transition:0.5s;
  :hover{
    background-color:#000;
    color:#fff;
  }
  .no{
    display:none;
  }
  .crossout{
    color:#f44336;
    font-size:19px;
    font-weight:300;
    margin-top:-20px;
    ::after{
      text-align:center;
      left:100px;
      bottom:12px;
      position:relative;
      content:'';
      width:63px;
      height:2px;
      display:block;
      background-color:#f44336;
    }
  }
`