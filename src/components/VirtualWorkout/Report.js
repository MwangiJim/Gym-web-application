import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ResultsDisplay from './ResultsDisplay'
import { useEffect } from 'react'
import ExerciseHistoryComponent from './ExerciseHistoryComponent'
import BarChartDisplay from './BarChartDisplay'
function Report(props) {
  let[ExerciseData,setExerciseData]=React.useState([]);
  useEffect(()=>{
     fetch("http://localhost:8080/getCompleteExercises")
     .then((res)=>res.json())
     .then((data)=>{
      //  console.log(data);
        let Exercisedata = data.data.map((item)=>{
            return{
                minutes:item.Minutes,
                exercisename:item.ExerciseName,
                Date:item.Date,
                time:item.Time,
                calories:item.Calories,
                totalTime:item.totalTime
            }
        })
        setExerciseData(Exercisedata);
     })
  },[])
 // console.log(ExerciseData)
  return (
    <Container style={props.ReportStyle}>
      <div className='top'>
         <div className='top__area'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={props.BackFnHandler} className='arrow'/>
          <h2>REPORT</h2>
         </div>
         <ResultsDisplay/>
         </div>
          <BarChartDisplay/>
        <div className='history'>
            {ExerciseData.length > 0?<>
              {ExerciseData.map((data)=>{
                return(
                    <ExerciseHistoryComponent
                      Image={data.Exerciseicon}
                      Date={data.Date}
                      Time={data.time}
                      Exercise={data.exercisename}
                      calories={data.calories}
                      time_format={data.totalTime}
                    />
                )
            })}</>:"You haven't completed any exercises.Start Now!!!"}
        </div>
    </Container>
  )
}

export default Report
let Container=styled.div`
 background-color:#fff;
 width:100%;
 height:94.5vh;
 max-height:94.5vh;
 overflow-y:scroll;
 ::-webkit-scrollbar{
  width:0;
 }
 z-index:9;
 top:0px;
 position:absolute;
 .top{
  background-color:rgb(30, 102, 197);
  padding:5px;
  border-radius:7px;
  height:24vh;
  margin-bottom:10px;
  .top__area{
    display:flex;
    align-items:center;
    color:#fff;
    h2{
        margin-left:2%;
    }
    .arrow{
      cursor:pointer;
    }
  }
 }
 .history{
  max-height:45vh;
  height:45vh;
  overflow-y:scroll;
  ::-webkit-scrollbar{
      display:none;
  }
}
`