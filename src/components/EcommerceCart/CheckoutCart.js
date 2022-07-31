import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import CheckoutComponent from './CheckoutComponent'
import CheckoutPayment from './CheckoutPayment'

function CheckoutCart() {
    let{userDetails,DetailsName,EcommerceStore}=useSelector((state)=>state.gymRegucer)
  return (
    <Container>
       <LeftSide>
          <div className='image'>
          </div>
          <h4>Your Shopping Cart @{userDetails.Email?userDetails.Email:<i>{DetailsName?.UserName}</i>}</h4>
          <p>{EcommerceStore.length===0?'Your Shopping Cart is Empty':''}</p>
         {EcommerceStore.map((item)=>{
             return(
                <CheckoutComponent
                    key={item.Id}
                    id={item.Id}
                    description={item.Description}
                    price={item.Price} 
                    image={item.ProductImage}
                />
             )
         })}
       </LeftSide>
       <RightSide>
           <CheckoutPayment/>
       </RightSide>
    </Container>
  )
}

export default CheckoutCart
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 background-color:#fff;
 padding:70px;
 @media(max-width:600px){
  flex-direction:column;
 }
`
let LeftSide = styled.div`
  flex-basis:65%;
  .image{
     background-image:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("/Images/banner-bg.jpg");
     background-position:center;
     background-size:cover;
     width:100%;
     height:40vh;
  }
  h4{
      font-size:25px;
      font-weight:400;
  }
`
let RightSide = styled.div`
  flex-basis:33%;
  margin-top:1%;
`