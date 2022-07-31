import React from 'react'
import styled from 'styled-components'
import Questions from '../Data/TrainerQuestions'
import M_Questions from '../Data/MemberQuestions'
import {useDispatch,useSelector} from 'react-redux'
import { SetProfile } from '../../redux/reducers/reducerSlice'
import TrainerQuiz from './TrainerQuiz'

function Joinus() {
    let dispatch = useDispatch()
    let[Form,setForm]=React.useState({
        username:'',
        State:'',
        Age:null,
        location:'',
        Message:'',
    })
    let[RadioForm,setRadioForm]=React.useState({
        periodTraining:'',
        pushups:'',
        once:'Once per week',
        twice:'Twice a week',
        thrice:'Thrice a week',
        fullweek:'Full Body workout',
        two_five:'Two to Five',
        five_ten:'Five to Ten',
        ten_twenty:'Ten to Twenty',
    })
    const HandleInput=(event)=>{
      setForm((prevForm)=>{
         return{
            ...prevForm,
            [event.target.name]:event.target.value
         }
      })
    }
    const Handleinput=(e)=>{
        setRadioForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    const Handleinputs=(e)=>{
        setRadioForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    const HandleForm=(e)=>{
        e.preventDefault()
        if(Form.username,Form.Age,Form.State,Form.location){
            console.log(Form,RadioForm.periodTraining,RadioForm.pushups)
            dispatch(SetProfile({
                UserName:Form.username,
                City:Form.State,
                Years:Form.Age,
                Location:Form.location,
                message:Form.Message,
                Period:RadioForm.periodTraining,
                Pushups:RadioForm.pushups
            }))
        }
    }
    let[TrainerForm,setTrainerForm]=React.useState(false)
    //console.log(QuestionsSelected)
    const showForms=()=>{
        setTrainerForm((prevForm)=>!prevForm)
    }
    let styles = {
        display:TrainerForm?'none':'block'
    }
    let linestyles = {
        left:TrainerForm?'90px':'',
    }
  return (
    <Container>
      <div className='left__side'>
         <div className='textbox'>
           <h2>Join us at BEFIT as a Member or a Trainer</h2>  
           <div className='buttons' onClick={showForms}>
              <button>As a Member</button>
              <button>As a Trainer</button>
           </div>
           <div className='line' style={linestyles}>

           </div>
         </div>
      </div>
      <div className='right__side'>
       <form onSubmit={HandleForm} style={styles}>
        <h3>Fill in the details below as a Member</h3>
        <label>Your Name</label>
        <span>*</span>
        <br/>
       <input
          type={'text'}
          placeholder='Username'
          name='username'
          value={Form.username}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>city/State</label>
          <span>*</span>
          <br/>
         <input
          type={'text'}
          placeholder='State/Province'
          name='State'
          value={Form.State}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Your Age</label>
          <span>*</span>
          <br/>
         <input
          type={'number'}
          placeholder='Your Age'
          name='Age'
          value={Form.Age}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label> Location/Address</label>
          <span>*</span>
          <br/>
         <input
          type={'text'}
          placeholder='Location'
          name='location'
          value={Form.location}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>Summary</label>
          <span>*</span>
          <br/>
         <textarea
          type={'text'}
          placeholder='Tell us About Yourself'
          name='Message'
          value={Form.Message}
          onChange={HandleInput}
          className='input'
         />
         <br/>
          <label>How often do you train?</label>
          <span>*</span>
          <br/>
         <input
          type={'radio'}
          name='periodTraining'
          value={RadioForm.once}
          onChange={Handleinput}
          className='radios'
         />
         <label>Once Per Week</label>
         <br/>
         <input
          type={'radio'}
          name='periodTraining'
          value={RadioForm.twice}
          onChange={Handleinput}
          className='radios'
         />
         <label>Twice Per Week</label>
         <br/>
         <input
          type={'radio'}
          name='periodTraining'
          value={RadioForm.thrice}
          onChange={Handleinput}
          className='radios'
         />
         <label>Four times Per Week</label>
         <br/>
         <input
          type={'radio'}
          name='periodTraining'
          value={RadioForm.fullweek}
          onChange={Handleinput}
          className='radios'
         />
         <label>Full Week Workout</label>
         <br/>
          <label>How many pushups can you do per set</label>
          <br/>
          <input
          type={'radio'}
          name='pushups'
          value={RadioForm.two_five}
          onChange={Handleinputs}
          className='radios'
         />
         <label>2-5 reps(beginner)</label>
         <br/>
         <input
          type={'radio'}
          name='pushups'
          value={RadioForm.five_ten}
          onChange={Handleinputs}
          className='radios'
         />
         <label>5-10 reps(intermediate)</label>
         <br/>
         <input
          type={'radio'}
          name='pushups'
          value={RadioForm.ten_twenty}
          onChange={Handleinputs}
          className='radios'
         />
         <label>10-20 reps(Pro)</label>
         <br/>
         <button>Submit</button>
       </form>
       {TrainerForm?<TrainerQuiz/>:''}
      </div>
    </Container>
  )
}

export default Joinus
let Container = styled.div`
 width:100%;
 height:100vh;
 background-color:#fff;
 display:flex;
 justify-content:space-between;
 padding:80px 8%;
 .left__side{
   flex-basis:50%;
   background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/blog-2.jpg');
   background-position:center;
   background-size:cover;
   .textbox{
     display:flex;
     justify-content:space-between;
     align-items:center;
     flex-direction:column;
     margin-top:30%;
     .line{
        background:radial-gradient(green,red);
        width:120px;
        height:3px;
        bottom:17px;
        right:80px;
        position:relative;
        border-radius:5px;
        transition:0.5s;
    }
     h2{
        font-family: 'Bebas Neue', cursive;
        color:#fff;
       }
       .buttons{
        display:flex;
        justify-content:center;
        margin:2% 0;
        border:3px solid #fff;
        border-radius:20px;
        p{
            color:#fff;
            display:flex;
            align-items:center;
        }
        button{
            color:#fff;
            font-size:16px;
            outline:none;
            cursor:pointer;
            border:none;
            padding:12px 35px;
            border-radius:10px;
            background:transparent;
        }
       }
   }
 }
 .right__side{
    flex-basis:48%;
    span{
        color:red;
    }
    .input{
        width:500px;
        height:45px;
        border-radius:7px;
        margin:1% 0;
        padding:0 10px;
    }
    textarea{
        width:500px;
        border-radius:7px;
        resize:none;
        padding:10px 10px;
    }
    .radios{
        margin:1% 0;
    }
    button{
        background-color:rgb(30, 102, 197);
        padding:12px 39px;
        cursor:pointer;
        border-radius:10px;
        color:#fff;
        outline:none;
        border:none;
    }
 }
`