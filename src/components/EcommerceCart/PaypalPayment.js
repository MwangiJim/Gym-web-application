import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import CheckoutCart from './CheckoutCart'
import CheckoutComponent from './CheckoutComponent'
import PaypalCheckoutButton from './PaypalCheckoutButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import PaymentHistory from './PaymentHistory'
import { userDetailsContext } from '../../App'

function PaypalPayment() {
  let{EcommerceStore,DetailsName}=useSelector((state)=>state.gymRegucer)
  let[menu,setMenu]=useState(false);

  let totalPrice = EcommerceStore.reduce((amount,item)=>{
    return amount+item.Price
  },0)
  const ShowHistory=()=>{
    setMenu((prevMenu)=>!prevMenu)
  }
  let userDetails = React.useContext(userDetailsContext);
  return (
    <Container>
       <Head>
        <h2>Checkout({EcommerceStore.length} Items)</h2>
          <FontAwesomeIcon icon={faHistory} className='Icon' onClick={ShowHistory}/>
       </Head>
         {menu?<PaymentHistory/>:''}
        <Row>
          <div className='left__side'>
              <h4>Delivery Address</h4>
          </div>
          <div className='right__side'>
            <p>{userDetails.data.username}</p>
            <p>{userDetails.data.email}</p>
            <p>Ruiru Nairobi,Kenya</p>
            <p>(0 100),Ruiru</p>
          </div>
        </Row>
        <Row>
          <div className='left__side'>
               <h4>Review Items and<br/>delivery</h4>
          </div>
          <div className='right__side'>
            {EcommerceStore.length===0?'You have no Items in the Cart':''}
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
          </div>
        </Row>
        <Row>
          <div className='left__side'>
              <h4>Payment Method</h4>
          </div>
          <div className='right__side'>
               <p>Card Details</p>
               <div className='paypal'>
                   <h5>Order Total:Ksh{totalPrice}</h5>
                   <PaypalCheckoutButton
                    Price={totalPrice}
                   />
               </div>
          </div>
        </Row>
    </Container>
  )
}

export default PaypalPayment

let Container = styled.div`
background-color:#f4f4f4;
padding-top:60px;
h2{
  font-size:30px;
  font-weight:400;
  padding:10px 0;
  text-align:center;
  background-color:#f4f4f4;
}
`
let Row = styled.div`
 padding:20px 12px;
 background-color:#fff;
 display:flex;
 justify-content:left;
 @media(max-width:600px){
   flex-direction:column;
   .left__side{
    flex-basis:100%;
  }
  .right__side{
    flex-basis:100%;
  }
 }
 .left__side{
   flex-basis:20%;
 }
 .right__side{
   flex-basis:80%;
   text-align:left;
   .paypal{
     box-shadow:2px 2px 4px #333;
     padding:20px 12px;
     border-radius:7px;
     width:50%;
     h5{
       font-size:25px;
       font-weight:400;
       margin:2% 0;
     }
   }
 }
`
let Head = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:0 4%;
 .Icon{
   cursor:pointer;
   font-size:20px;
 }
`