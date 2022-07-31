import React from 'react'
import styled from 'styled-components'
import Trainer from './Trainer'

function Trainers() {
  return (
    <Container>
        <h2>Expert-Trainers</h2>
        <Row>
            <Trainer
             image='/Images/trainer-1.jpg'
             level='Intermediate Trainer'
             name='Michael Atkinson'
             rating={2}
            />
            <Trainer
             image='/Images/trainer-2.jpg'
             level='Expert Trainer'
             name='Cameron Diaz'
             rating={5}
            />
            <Trainer
             image='/Images/trainer-3.jpg'
             level='Beginner Trainer'
             name='Doyle Marcus'
             rating={4}
            />
            <Trainer
             image='/Images/trainer-4.jpg'
             level='Advanced Trainer'
             name='Martha Dwayne'
             rating={3}
            />
        </Row>
    </Container>
  )
}

export default Trainers
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
`
let Row = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
position:relative;
@media(max-width:600px){
  flex-direction:column;
}
`