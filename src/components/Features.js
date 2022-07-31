import React from 'react'
import styled from 'styled-components'
import GymFeature from './GymFeature'
import Image from './Image'

function Features() {
  return (
    <Container>
       <h2>GymFeatures</h2>
       <Row>
          <Image
            image='/Images/f-img-1.jpg'
          />
          <GymFeature
            icon='/Images/icon-2.png'
            Text='Gym For Men'
            description='Get Bulk and Buffed up In A few Months.Carefully Crafted Sessions to be Accessed and Followed for better results'
          />
          <Image
            image='/Images/f-img-3.jpg'
          />
       </Row>
       <Row>
       <GymFeature
            icon='/Images/icon-1.png'
            Text='Body Building'
            description='Take Lessons to build muscles and Gain Confidence,Strengthen your overall endurance'
          />
           <Image
            image='/Images/f-img-2.jpg'
          />
           <GymFeature
            icon='/Images/icon-3.png'
            Text='Gym For Women'
            description='As a Woman Take Sessions and build stamina to improve you core strength'
          />
       </Row>
    </Container>
  )
}

export default Features
let Container =styled.div`
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
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 @media(max-width:600px){
   flex-direction:column;
 }
`