import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

function ResultsDisplay() {
  let{TotalResults}=useSelector((state)=>state.gymRegucer);
  return (
    <Container>
            <Col>
              <h2>{TotalResults.exercisesComplete?TotalResults.exercisesComplete:'----'}</h2>
              <p>WORKOUTS</p>
            </Col>
            <Col>
              <h2>{TotalResults.calories?TotalResults.calories:'----'}</h2>
              <p>KCAL</p>
            </Col>
            <Col>
              <h2>{TotalResults.timeElapsed?TotalResults.timeElapsed:'----'}</h2>
              <p>MINUTES</p>
            </Col>
    </Container>
  )
}

export default ResultsDisplay
let Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:1% 3%;
`
let Col = styled.div`
 display:block;
 color:#fff;
 text-align:center;
 p{
     font-size:16px;
     font-weight:600;
 }
`