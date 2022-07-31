import React from 'react'
import styled from 'styled-components'
import Pointer from './Pointer'

function BMI(props) {
    let bmi = props.Kilogram/(props.height*props.height)
   // console.log(bmi)
    let StartPoint = 15;
    let EndPoint = 40;
    let Position = (bmi/EndPoint)*100;
 //   console.log(Position)
  return (
    <Container>
        <Pointer
         pointerPosition={Position}
        />
       <SevereUnderWeight>

       </SevereUnderWeight>
       <Average>

       </Average>
       <Healthy>

       </Healthy>
       <Fat>

       </Fat>
       <Overweight>

       </Overweight>
       <Obese>

       </Obese>
    </Container>
  )
}

export default BMI
let Container=styled.div`
 height:40px;
 display:flex;
 align-items:center;
`
let SevereUnderWeight=styled.div`
 width:11%;
 height:40px;
 background-color:grey;
`
let Average=styled.div`
 width:13%;
 height:40px;
 background-color:blue;
`
let Healthy=styled.div`
height:40px;
 width:36%;
 background-color:green;
`
let Fat=styled.div`
height:40px;
 width:14%;
 background-color:yellow
`
let Overweight=styled.div`
height:40px;
 width:15%;
 background-color:orange;
`
let Obese=styled.div`
height:40px;
 width:10%;
 background-color:red;
`