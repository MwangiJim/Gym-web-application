import React from 'react'
import styled from 'styled-components'

function Pointer(props) {
  let name;
    if(props.pointerPosition > 0&& props.pointerPosition <15){
       name = 'Severely Underweight'
    }
    if(props.pointerPosition > 16&& props.pointerPosition <30){
      name = 'Average Weight'
    }
    if(props.pointerPosition > 35&& props.pointerPosition <55){
      name = 'Healthy weight'
    }
    if(props.pointerPosition > 56&& props.pointerPosition <65){
      name='Fat'
    }
    if(props.pointerPosition > 67&& props.pointerPosition <80){
      name='Obese'
    }
    if(props.pointerPosition > 84&& props.pointerPosition <100){
      name='Severely Obese'
    }
  return (
    <Container style={{left:`${props.pointerPosition<0?0:props.pointerPosition}%`}}>
         <p>{name}</p>
    </Container>
  )
}

export default Pointer
let Container=styled.div`
 display:block;
z-index:5;
left:0%;
position:relative;
width:5px;
background-color:#000;
height:120%;
border-radius:10px;
p{
  top:50px;
  position:relative;
  color:green;
}
`