import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Plans from './Plans'

function Planning() {
  return (
    <Container>
       <h2>MonthlyPricing</h2>
       <div className='row'>
           <div className='left_side'>
               <p>Pricing Plan</p>
               <h3>Affordable Pricing<br/>Plan For You</h3>
               <small>The Pricing Plans are categorised into Basic(for beginners),Premium Plan(for advanced and intermediate Training)</small>
               <ul>
                   <li><FontAwesomeIcon icon={faCircleCheck} className='icon'/>Cardio Exercise</li>
                   <li><FontAwesomeIcon icon={faCircleCheck} className='icon'/>Weight Lifting</li>
                   <li><FontAwesomeIcon icon={faCircleCheck} className='icon'/>Muscle Building</li>
                   <li><FontAwesomeIcon icon={faCircleCheck} className='icon'/>Overall Results</li>
               </ul>
           </div>
           <Plans
             plan='Basic Plan'
             price={2500*0.0086}
             training='Gym Training'
             area='Core Enhancement'
             third='Weight Lifts'
             diet='Diet Plan'
             results='Overall Results'
            />
            <Plans
              plan='Premium Plan'
              price={4500*0.0086}
              training='Personal Training'
              area='Full body Endurance'
              third='Full Body Exercise'
              diet='Diet Plan'
              results='Overall Results'
            />
       </div>
    </Container>
  )
}

export default Planning
let Container = styled.div`
padding:50px;
h2{
    color:#f44336;
    text-align:center;
    display:flex;
    align-items:center;
    ::after{
        content:'';
        width:100%;
        height:2px;
        background-color:gray;
        display:block;
    }
    ::before{
     content:'';
     width:100%;
     height:2px;
     background-color:gray;
     display:block;
 }
}
@media(max-width:600px){
    .row{
        flex-direction:column;
        .left_side{
            flex-basis:100%;
        }
    }
}
.row{
    display:flex;
    justify-content:space-between;
    .left_side{
        margin:2% 0;
        flex-basis:33.3%;
        p{
            color:#f44336;
        }
        h3{
            color:#fff;
            font-size:35px;
            font-weight:400;
            margin:3% 0;
        }
        small{
            color:grey;
            text-align:left;
            line-height:25px;
        }
        ul{
            li{
                color:#fff;
                padding:12px 10px;
                list-style:none;
                .icon{
                    color:#f44336;
                    margin-right:2%;
                }
            }
        }
    }
}
`