import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import TestimonialColumn from './TestimonialColumn'

function Testimonials() {
  let [testimonials,setTestimonials] = React.useState([])

  useEffect(()=>{
    let FetchedTestimonials = async()=>{
      await fetch('http://localhost:8080/testimonials')
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        let fetchedData = data.message.map((item)=>{
          return(
            {
              profession:item.Profession,
              time:item.timeCommented,
              date:item.dateCommented,
              Message:item.message
            }
          )
        })
        setTestimonials(fetchedData)
      })
    }
    return ()=>{
      FetchedTestimonials()
    }
  },[1])
  //console.log(testimonials)
  return (
    <Container>
       <LeftSide>
           <h3>Testimonials</h3>
           <h2>What Our Clients Say</h2>
           <p>Here is a feedback from all the Customers.Find out What is going on in our Gym Facility</p>
       </LeftSide>
       <Row>
         {testimonials.map((info,i)=>{
          return(
            <TestimonialColumn
             key={i}
             work = {info.profession}
             time = {info.time}
             date = {info.date}
             Text = {info.Message}
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
 padding:40px 0;
 margin:0 4%;
 background:#000;
`
let Row = styled.div`
 flex-basis:60%;
 height:30vh;
 width:100%;
 overflow-y:scroll;
 padding:10px 15px;
 overflow-x:hidden;
 ::-webkit-scrollbar{
  background-color:#fff;
  width:5px;
  border-radius:8px;
 }
 ::-webkit-scrollbar-thumb{
  background-color:#f44336;
  width:5px;
  border-radius:8px;
 }
 ::-webkit-scrollbar-track{
  background-color:#fff;
  width:5px;
  border-radius:8px;
 }
`
let LeftSide = styled.div`
 text-align:left;
 flex-basis:40%;
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