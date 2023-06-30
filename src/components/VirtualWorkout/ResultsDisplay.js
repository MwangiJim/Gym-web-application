import React ,{useEffect}from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'

function ResultsDisplay() {
  let{TotalResults}=useSelector((state)=>state.gymRegucer);
  let[Records,setRecords]=React.useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/exerciseRecords")
    .then((res)=>res.json())
    .then((data)=>{
     // console.log(data);
      let dataRecord = data.data.map((item)=>{
        return{
          calories:item.Calories,
          exercises:item.Exercises,
          minutes:item.Minutes,
          id:item._id
        }
      })
      setRecords(dataRecord);
    })
  })
  //console.log(Records);
  return (
    <Container>
     {Records.length >= 1?<>
      {Records.map((item,i)=>{
        return(
          <>
            <Col>
              <h2>{item.exercises}</h2>
              <p>WORKOUTS</p>
            </Col>
            <Col>
              <h2>{item.calories.toFixed(0)}</h2>
              <p>KCAL</p>
            </Col>
            <Col>
              <h2>{item.minutes.toFixed(0)}</h2>
              <p>MINUTES</p>
            </Col>
          </>
        )
      })}</>:<div className='no-records'>
      <div>
            <h2>----</h2>
            <p>WORKOUTS</p>
      </div>
      <div>
            <h2>----</h2>
            <p>KCAL</p>
      </div>
      <div>
            <h2>----</h2>
            <p>MINUTES</p>
      </div>
    </div>}
    </Container>
  )
}

export default ResultsDisplay
let Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:1% 3%;
.no-records{
  color:#fff;
  display:flex;
  width:100%;
  padding:2px 0px;
  justify-content:space-between;
  align-items:center;
  div{
    text-align:center;
    flex-basis:33%;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
  }
}
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