import { faArrowLeft, faFaceGrinBeam, faSadCry, faSmileBeam, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import BMI from './BMI'
import moment from 'moment'
import EmojiBox from './EmojiBox'

function EndofWorkout(props) {
  let{ExerciseSchedule,TimeStart,WorkoutType,TimeFinished}= useSelector((state)=>state.gymRegucer)
   let timeDifference = TimeFinished?.time.getTime() - TimeStart?.time.getTime()
   let time = moment.duration(timeDifference).asSeconds();
   let formatTime = moment.utc(time*1000).format('mm:ss')

   let Time_in_Minutes = moment.duration(timeDifference).asMinutes();
   let Calories = (Time_in_Minutes*5*60)/200;
  // //alert(formatTime)
   //console.log(TimeStart,TimeFinished)
  
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
       <div>
       <FontAwesomeIcon icon={faArrowLeft} className='arrow__left' onClick={props.Handler}/>
        <img src='/Images/leg advanced.jpg' 
         style={{width:"100%",borderRadius:'10px 10px 50% 10px',
         marginBottom:'5px',objectFit:"cover",height:"30vh"}}/>
        <h3 className='head'>Nice you've completed exercise!</h3>
        <p className='sub_head'>{WorkoutType?.ExerciseType?WorkoutType.ExerciseType:""}</p>
      </div> 
       <div className='container'>
       <TextBox>
         <div className='results'>
             <div className='box'>
             <small>Exercises</small>
                <h4>{ExerciseSchedule.exercise.length}</h4>
             </div>
             <hr/>
             <div className='box'>
             <small>Calorie</small>
                <h4>{Calories.toFixed(2)}</h4>
             </div>
             <hr/>
             <div className='box'>
             <small>Time</small>
                <h4>{formatTime}</h4>
             </div>
         </div>
       </TextBox>
    </div>
    <Feedback>
      <h3>How do you feel</h3>
      <small>Your Feedback will help us provide more suitable workouts for you</small>
      <Row>
        <EmojiBox emoji={faSadCry} text="Too Hard"/>
        <EmojiBox emoji={faSmileBeam} text="Just Right"/>
        <EmojiBox emoji={faFaceGrinBeam} text={"Too Easy"}/>
      </Row>
    </Feedback>
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
border-radius:6px;


h3{
  font-size:25px;
}
 .results{
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:93%;
  margin-left:10px;
  background-color: #fff;
  border-radius: 6px;
  padding:20px 10px;
  box-shadow: 3px 3px 8px #333;
  bottom:40px;
  position:absolute;
  hr{
    height:50px;
    width:1px;
    border-radius:5px;
    background-color:grey;
  }
  .box{
    display:block;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:8px 5px;
    h4{
      font-size:30px;
      color:rgb(30, 102, 197);
      margin:2% 0;
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
let Feedback = styled.div`
 margin:2% 0;
 background-color:#fff;
 box-shadow:4px 4px 8px #333;
 padding:10px 12px;
 border-radius:6px;
 text-align:left;
 width:93%;
 margin-left:10px;
 h3{
  font-size:18px;
 }
 small{
  font-size:12px;
  color:gray;
 }
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:3% 0;
 `