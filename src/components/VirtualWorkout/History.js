import React from 'react'
import styled from 'styled-components'
import Calendar from 'react-calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {useSelector,useDispatch} from 'react-redux'
import ExerciseHistoryComponent from './ExerciseHistoryComponent'
import moment from 'moment';
import { useEffect } from 'react'

function History(props) {
    let[date,setDate]=React.useState(new Date())
   // let dispatch=useDispatch()
    let{StoreExerciseHistory,TimeStart,TimeFinished}=useSelector((state)=>state.gymRegucer)
    const HandleChange=date=>{
        setDate(date)
    }

  let timeDifference = TimeFinished.time.getTime()-TimeStart.time.getTime()
  let time = moment.duration(timeDifference).asSeconds()
  let Timeformat = moment.utc(time*1000).format('mm:ss')
  //get minutes
  let Minutes = moment.duration(timeDifference).asMinutes();
  let Calories = (Minutes*5*60)/200
   let[ExerciseData,setExerciseData]=React.useState([]);
  useEffect(()=>{
     fetch("http://localhost:8080/getCompleteExercises")
     .then((res)=>res.json())
     .then((data)=>{
        console.log(data);
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
  })
  console.log(ExerciseData)
  return (
    <Container style={props.historystyles}>
        <Head>
            <FontAwesomeIcon icon={faArrowLeft} onClick={props.FnHandler} className='arrow'/>
            <h4>History</h4>
        </Head>
        <Calendar
         className='react-calendar'
         onChange={HandleChange}
         value={date}
        />
        <h3>{date.toDateString()}</h3>
        <div className='history'>
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
            })}
        </div>
    </Container>
  )
}

export default History
let Container=styled.div`
 width:100%;
 background-color:#fff;
 top:1px;
 z-index:9;
 position:absolute;
 .react-calendar{
    background-color:#fff;
    padding:10px 12px;
    border:2px solid #000;
    button{
        color:#000;
        border:none;
        outline:none;
        padding:10px 2px;
        background:transparent;
        cursor:pointer;
        font-size:16px;
        :focus{
            background-color:rgb(30, 102, 197);
            color:#fff;
        }
    }
    .__navigation button{
        min-width: 44px;
        background: none;
    }
 }
 .history{
    max-height:40vh;
    height:40vh;
    overflow-y:scroll;
    ::-webkit-scrollbar{
        display:none;
    }
 }
`
let Head =styled.div`
 display:flex;
 align-items:center;
 .arrow{
    cursor:pointer;
    margin:0 1%;
 }
`