import React from 'react'
import { useSelector } from 'react-redux';
//import moment from 'moment'

function ProgressCheck(props){
  // let secs = moment.duration().asSeconds()
  // let time = moment.utc(secs).format('mm:ss')
  //console.log(time)
let{ExerciseSchedule}=useSelector((state)=>state.gymRegucer);
  return (
    <div className='progress'>
       {[...Array(ExerciseSchedule.exercise.length)].map((item,i)=>{
        let completeExercise = i+1;
        return(
            <div className='span' key={i}
              style={{backgroundColor:completeExercise<=props.complete?'rgb(30, 102, 197)':'grey'}}
            ></div>
        )
       })}
    </div>
  )
}

export default ProgressCheck