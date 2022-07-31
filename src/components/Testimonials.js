import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TestimonialColumn from './TestimonialColumn'

function Testimonials() {
  let{testimonials,userDetails} = useSelector((state)=>state.gymRegucer)
  console.log(userDetails)
  return (
    <Container>
       <LeftSide>
           <h3>Testimonials</h3>
           <h2>What Our Clients Say</h2>
           <p>Here is a feedback from all the Customers.Find out What is going on in our Gym Facility</p>
       </LeftSide>
       <Row>
         {testimonials.map((item)=>{
           return(
            <TestimonialColumn
              image={userDetails.PhotoImage}
              Username={userDetails.UserName}
              Text={item.Message}
              Feedback={item.Check}
              work={item.Occupation}
            />
           )
         })}
       </Row>
    </Container>
  )
}

export default Testimonials
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 padding:50px;
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:100vw;
 height:40vh;
 max-width:100vw;
 overflow-x:scroll;
 ::-webkit-scrollbar{
     height:3px;
     background-color:#333;
     border-radius:8px;
 }
 ::-webkit-scrollbar-thumb{
     height:3px;
     background-color:#f44336;
     border-radius:8px;
 }
 ::-webkit-scrollbar-track{
     height:3px;
     background-color:#333;
     border-radius:8px;
 }
`
let LeftSide = styled.div`
 text-align:left;
 h3{
     color:#f44336;
     font-size:30px;
     font-weight:400;
 }
 h2{
     font-size:40px;
     font-weight:400;
     color:#fff;
 }
 p{
     color:gray;
     font-size:15px;
 }
`