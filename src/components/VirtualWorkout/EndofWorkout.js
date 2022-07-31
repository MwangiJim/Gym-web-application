import { faArrowLeft, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import BMI from './BMI'
import moment from 'moment'

function EndofWorkout(props) {
  let{ExerciseSchedule,TimeStart,TimeFinished}= useSelector((state)=>state.gymRegucer)
    let timeDifference = TimeFinished.time.getTime() - TimeStart.time.getTime()
    let time = moment.duration(timeDifference).asSeconds();
    let formatTime = moment.utc(time*1000).format('mm:ss')

    let Time_in_Minutes = moment.duration(timeDifference).asMinutes();
    let Calories = (Time_in_Minutes*5*60)/200
  //alert(formatTime)
  console.log(TimeStart,TimeFinished)
  
  let[Weight,setWeight]=React.useState({
    weight:''
  })
  let [Height,SetHeight]=React.useState({
    height:''
  })
  const setweight=(event)=>{
    setWeight((prevWeight)=>{
      return{
        ...prevWeight,
        [event.target.name]:event.target.value
      }
    })
  }
  const setHeight=(event)=>{
     SetHeight((prevHeight)=>{
      return{
        ...prevHeight,
        [event.target.name]:event.target.value
      }
     })
  }
  //from KGS to Pounds
 let[conversion,setConversion]=React.useState(false)
  const Conversion=()=>{
    setConversion((prevState)=>!prevState)
  }
  //From Metres to Feet
  let[heightchange,setHeightChange]=React.useState(false)
  const HeightConversion=()=>{
    setHeightChange((prevHeight)=>!prevHeight)
  }
  let bmi =Math.round( Weight.weight/(Height.height*Height.height))
    //console.log(bmi)

  return (
    <div className='section' style={props.endofworkstyles}>
       <div className='container'>
      <FontAwesomeIcon icon={faArrowLeft} className='arrow__left' onClick={props.Handler}/>
       <TextBox>
         <FontAwesomeIcon icon={faTrophy} className='trophy'/>
         <h3>Nice you've done it!</h3>
         <div className='results'>
             <div className='box'>
                <h4>{ExerciseSchedule.exercise.length}</h4>
                <small>Exercises</small>
             </div>
             <div className='box'>
                <h4>{Calories}</h4>
                <small>kcal</small>
             </div>
             <div className='box'>
                <h4>{formatTime}</h4>
                <small>Duration</small>
             </div>
         </div>
         <div className='buttons'>
           <button>DO IT AGAIN</button>
            <div className='right_btn'>
              <button>NEXT</button>
              <button>SHARE</button>
            </div>
         </div>
       </TextBox>
    </div>
    <div className='weight__area'>
       <h3>Weight</h3>
       <input
        type='text'
        placeholder='WEIGHT'
        onChange={setweight}
        value={conversion?`${Weight.weight*2.205}`:`${Weight.weight}`}
        name='weight'
       />
       <button onClick={Conversion}>{conversion?'LB':'KG'}</button>
       <h3>Height</h3>
       <input
        type='text'
        placeholder='HEIGHT IN METRES'
        onChange={setHeight}
        value={heightchange?`${Height.height*3.33} `:`${Height.height}`}
        name='height'
       />
       <button onClick={HeightConversion}>{heightchange?'FT':'M'}</button>
       <h4>BMI(kg/m2):{bmi?bmi:''}</h4>
       <BMI
        Kilogram={Weight.weight}
        height={Height.height}
        />
    </div>
    </div>
  )
}

export default EndofWorkout
let TextBox=styled.div`
display:flex;
justify-content:center;
flex-direction:column;
text-align:center;
margin-top:2%;
h3{
  font-size:25px;
}
 .results{
  padding:10px 15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:2% 5%;
  .box{
    h4{
      font-size:30px;
    }
  }
 }
 .trophy{
  color:#ffc017;
  font-size:90px;
  margin:1% 0;
 }
 .buttons{
  display:flex;
  justify-content:space-between;
  align-items:center;
  button{
    background:transparent;
    outline:none;
    border:none;
    padding:12px 35px;
    cursor:pointer;
    font-size:22px;
  font-weight:600;
  color:#fff;
  }
 }
`