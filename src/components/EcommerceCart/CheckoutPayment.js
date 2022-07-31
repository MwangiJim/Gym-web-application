import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

function CheckoutPayment() {
  let navigate = useNavigate()
    let{EcommerceStore}=useSelector((state)=>state.gymRegucer)

     let TotalPrice = EcommerceStore.reduce((amount,item)=>{
      //  console.log('amount'+amount)
      //  console.log('Item'+item.Price)
         return amount+item.Price
     },0)
   //  console.log(TotalPrice)
   const MoveToPayment=()=>{
     navigate(`/payment`)
   }
  return (
    <Container>
        <h3>Subtotal ({EcommerceStore.length} Items):<strong>Ksh{TotalPrice}</strong></h3>
        <input
         type='checkbox'
        />
        <label>This Order Contains a Gift</label>
        <br/>
        <button onClick={MoveToPayment}>Proceed To Checkout</button>
    </Container>
  )
}

export default CheckoutPayment

let Container = styled.div`
 background-color:#f4f4f4;
 border-radius:5px;
 padding:20px 12px;
 h3{
   font-size:25px;
   font-weight:400;
 }
  input{
    margin:2% 0;
  }
  button{
    width:80%;
    padding:12px 40px;
    background-color:#ffc017;
    border-radius:5px;
    color:#000;
    border:none;
    outline:none;
    cursor:pointer;
    margin-top:10px;
  }
`