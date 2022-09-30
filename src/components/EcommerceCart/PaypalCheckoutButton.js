import React from 'react'
import styled from 'styled-components'
import { PayPalButtons } from '@paypal/react-paypal-js'
import Cart from './Cart';
import { useDispatch,useSelector } from 'react-redux';
import { AddPurchasedItems } from '../../redux/reducers/reducerSlice';

function PaypalCheckoutButton(props) {
  let[isPaid,setIsPaid]=React.useState(false);
  let[Error,seterror]=React.useState(null);
  let dispatch = useDispatch()
  let{EcommerceStore,PurchasedItems}=useSelector((state)=>state.gymRegucer)

// console.log(PurchasedItems)

  const handleApprove=(OrderId)=>{
      setIsPaid(true)
  }
  if(Error){
    alert(Error)
  }
  return (
    <Container>
      <PayPalButtons
      // onClick={(data,actions)=>{
      //    const Clicked = false;
      //    if(Clicked){
      //      console.log('You Have Already Bought These Item')
      //      return actions.resolve()
      //    }
      //    else{
      //      return actions.reject()
      //    }
      // }}
        createOrder={(data,actions)=>{
           return actions.order.create({
             purchase_units:[
               {
                 description:'Gym Equipment',
                 amount:{
                   value:props.Price*0.0086,
                 }
               }
             ]
           })
        }}
        onApprove={async(data,actions)=>{
           const Order = await actions.order.capture();
          //  .then((details)=>{
          //    alert('Transaction was sucessfully Completed by:',details.payer.name)
          //  })
           console.log('Order',Order)
           handleApprove(data.orderID)
           dispatch(AddPurchasedItems({
             history:EcommerceStore
           }))
           alert("Transaction was Sucessfully Completed by:",Order.payer.name.surname)
        }}
        onCancel={(()=>{

        })}
        onError={((err)=>{
          seterror(err.message)
          alert('Paypal Error transaction',err.message)
        })}
      />
    </Container>
  )
}

export default PaypalCheckoutButton

let Container = styled.div`
 
`