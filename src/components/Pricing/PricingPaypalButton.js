import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux';

function PricingPaypalButton(props) {
  let{StorePricingPlan,PurchaseDetails}=useSelector((state)=>state.gymRegucer);
  console.log(StorePricingPlan.Plan,PurchaseDetails.Price,PurchaseDetails.Period)
 const SubmitDetails=async()=>{
   await fetch('http://localhost:8080/purchased_plan',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      purchasePlan:StorePricingPlan.Plan,
      pricingPlan:PurchaseDetails.Price,
      purchasePlanPeriod:PurchaseDetails.Period,
      datePurchased:new Date().toLocaleDateString(),
      timePurchased:new Date().toLocaleTimeString(),
    })
   })
 }
  return (
    <PayPalButtons
      createOrder={(data,actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              description:StorePricingPlan.Plan,
              amount:{
                value:10,
              }
            }
          ]
        })
      }}
      onApprove={(data,actions)=>{
        const Order = actions.order.capture();//payment-details not stored
        console.log('Order',Order)
        alert(`Transaction Complete..`)
        SubmitDetails();
      }}
      onError={(err)=>{
        alert(err.message)
      }}
    />
  )
}

export default PricingPaypalButton