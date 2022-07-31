import React from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useSelector } from 'react-redux';

function PricingPaypalButton(props) {
  let{StorePricingPlan,PurchaseDetails}=useSelector((state)=>state.gymRegucer);
  console.log(StorePricingPlan.Plan,PurchaseDetails.Price)
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
        const Order = actions.order.capture();
        console.log('Order',Order)
        alert(`Transaction Complete..`)
      }}
      onError={(err)=>{
        alert(err.message)
      }}
    />
  )
}

export default PricingPaypalButton