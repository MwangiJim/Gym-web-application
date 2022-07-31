import { faCircleDollarToSlot, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import PlanBox from './PlanBox'
import EmailSection from './EmailSection'
import PricingPaypalButton from './PricingPaypalButton'

function PricingPayment() {
    let{StorePricingPlan,PurchaseDetails}=useSelector((state)=>state.gymRegucer);

  return (
    <Container>
     <div className='header'>
     <FontAwesomeIcon icon={faCircleDollarToSlot} className='dollar'/>
      <h3>30 day money-back guarantee</h3>
     </div>
     <p>If you are not satisfied with BEFIT,we'll refund your payment</p>
    <Box>
    <div className='line__head'>
         <h2>You are Almost Done!Get Your Pricing Order Now</h2>
         <p>30-DAY<br/>MONEY-BACK-GUARANTEE</p>
     </div>
      <h3>1:Choose a Training Plan</h3>
      <small>selected plan:<strong>{StorePricingPlan.Plan}</strong></small>
      <Row>
        <PlanBox
          period={1}
          price={StorePricingPlan.Plan==='Basic Plan'?2500*0.0086:4500*0.0086}
          renewalprice={StorePricingPlan.Plan==='Basic Plan'?7000*0.0086:9000*0.0086}
       />
         <PlanBox
          period={6}
          price={StorePricingPlan.Plan==='Basic Plan'?1350*0.0086:3000*0.0086}
          renewalprice={StorePricingPlan.Plan==='Basic Plan'?6000*0.0086:8000*0.0086}
          initialAmount={StorePricingPlan.Plan==='Basic Plan'?5000*0.0086:6000*0.0086}
       />
         <PlanBox
          period={12}
          price={StorePricingPlan.Plan==='Basic Plan'?1300*0.0086:2775*0.0086}
          renewalprice={StorePricingPlan.Plan==='Basic Plan'?5995*0.0086:7599*0.0086}
          initialAmount={StorePricingPlan.Plan==='Basic Plan'?5000*0.0086:6000*0.0086}
       />
         <PlanBox
          period={24}
          price={StorePricingPlan.Plan==='Basic Plan'?1440*0.0086:2700*0.0086}
          renewalprice={StorePricingPlan.Plan==='Basic Plan'?4999*0.0086:9500*0.0086}
          initialAmount={StorePricingPlan.Plan==='Basic Plan'?5000*0.0086:6000*0.0086}
         />
      </Row>
      <EmailSection/>
       <Paysection>
           <h3>3:Make Secure Payment</h3>
           <div className='purchase__details'>
            <div className='box'>
                <Line>
                <small>{StorePricingPlan.Plan}-{PurchaseDetails.Period} month plan</small>
              {PurchaseDetails.InitialAmount?  <p>$ {PurchaseDetails.InitialAmount*PurchaseDetails.Period}</p>: <p>{PurchaseDetails.Price}</p>}
                </Line>
                <Line>
                    <small>Plan Activation</small>
                    <p>$ 0</p>
                </Line>
                <Line>
                    <small>Setup</small>
                    <p>$ 0</p>
                </Line>
                <Line>
                   {PurchaseDetails.Savings? <small>Discount-{PurchaseDetails.Savings}%</small>:''}
                   {PurchaseDetails.Discount? <p className='red'>-$ {PurchaseDetails.Discount}</p>:''}
                </Line>
                <Line>
                    <small>Total</small>
                    <p>$ {PurchaseDetails.Price}</p>
                </Line>
                <PricingPaypalButton
                 planCost = {PurchaseDetails.Price}
                />
            </div>
           </div>
       </Paysection>
    </Box>
    </Container>
  )
}

export default PricingPayment

let Container = styled.div`
 background-color:#f4f4f4;
 width:100%;
 height:max-content;
 @media(max-width:600px){
    .header{
        flex-direction:column;
    }
    .line__head{
        flex-direction:column;
    }
 }
 .header{
     display:flex;
     justify-content:center;
     align-items:center;
     padding-top:90px;
     h3{
         font-size:35px;
     }
     .dollar{
         font-size:35px;
         color:#f44336;
     }
 }
 p{
     text-align:center;
 }
 .line__head{
     display:flex;
     justify-content:space-between;
     align-items:center;
     h2{
        font-weight:400;
     }
     p{
        font-weight:bold;
     }
 }
`
let Box = styled.div`
 padding:10px 50px;
 margin:2% 0;
 h3{
     font-size:25px;
     font-weight:400;
 }
 small{
     font-size:19px;
     color:gray;
     strong{
         font-size:20px;
         color:#000;
     }
     margin-left:1%;
 }
`
let Row =styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin-top:5%;
 @media(max-width:600px){
    flex-direction:column;
 }
`
let Paysection = styled.div`
text-align:left;
padding-top:20px;
margin:3% 0;
h3{
    font-size:30px;
    font-weight:300;
}
width:50%;
.box{
 box-shadow:4px 4px 8px #333;
border-radius:6px;
padding:20px 12px;
}
@media(max-width:600px){
    width:80%;
}
`
let Line = styled.div`
 display:flex;
 margin:1% 0;
 padding:7px 0;
 justify-content:space-between;
 align-items:center;
 p{
     font-weight:bold;
     font-size:18px;
 }
 small{
     font-weight:300;
 }
 :last-child{
     border-bottom:1px solid grey;
 }
 .red{
     color:#f44336;
 }
`