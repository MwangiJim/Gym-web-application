import React from 'react'
import styled from 'styled-components'
import TrainerQuiz from './TrainerQuiz'
import { useEffect } from 'react'
import { createContext } from 'react'
import moment from 'moment'
import Dashboard from './Dashboard'
import TrainerDashboard from './TrainerDashboard'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { userDetailsContext } from '../../App'

export const UserInformation = createContext()


function Joinus() {
    let userDetails = React.useContext(userDetailsContext);
    let{DetailsName} = useSelector((state)=>state.gymRegucer)
   // console.log(DetailsName.Email)
    let[Form,setForm]=React.useState({
        username:'',
        State:'',
        Age:null,
        location:'',
        Message:'',
        password:''
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
   // let[member,setmember]=React.useState(false);
    const HandleForm=async(e)=>{
        e.preventDefault()
        await fetch('http://localhost:8080/newMember',{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
               name:Form.username,
               state:Form.State,
               age:Form.Age,
               location:Form.location,
               biography:Form.Message,
               Period:RadioForm.periodTraining,
               pushups:RadioForm.pushups,  
               email:userDetails.data.email
            })
        })
    }
let[Member,setMember]=React.useState([])
    useEffect(()=>{
        let GetProfile = async()=>{
            await fetch('http://localhost:8080/newMember')
            .then((res)=>res.json())
            .then((data)=>{
               // console.log(data)
                let userProfile = data.message.map((item)=>{
                    return(
                        {
                            name:item.Name,
                            state:item.State,
                            age:item.Age,
                            location:item.Location,
                            bio:item.Bio,
                            frequency:item.TrainingFrequency,
                            pushups:item.PushupReps,
                            member_Id:item._id,
                            email:item.Email
                        }
                    )
                })
                setMember(userProfile)
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }
        return ()=>GetProfile();
    },[1])
    //console.log(Member)

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
    const[Trainer,setTrainer]=React.useState([])
    useEffect(()=>{
        let trainerInfo = async()=>{
            await fetch('http://localhost:8080/newTrainer')
            .then((res)=>res.json())
            .then((data)=>{
                //console.log(data)
                let TrainerInfo = data.message.map((item)=>{
                    return(
                        {
                            age:item.Age,
                            city:item.City,
                            experience:item.Experience,
                            flag:item.Flag,
                            hourlypay:item.HourPay,
                            levelofexperience:item.LevelofExperience,
                            location:item.Location,
                            message:item.Message,
                            phone:item.Phone,
                            username:item.Username,
                            email:item.Email,
                            Trainer_id:item._id
                        }
                    )
                })
                setTrainer(TrainerInfo)
            })
        }
        return ()=>{
            trainerInfo()
        }
    },[1])
    const[EMAIL__VERIFIER,setEMAILVERFIFIER]=React.useState(null);
   // console.log(EMAIL__VERIFIER);
    let box__styles = {
        
    }
  //console.log(Member)
 // console.log(DetailsName.Email)
 let[SingleQuote,setSingleQuote]=React.useState(null)
 useEffect(()=>{
      fetch('https://type.fit/api/quotes')
      .then((res)=>res.json())
      .then((data)=>{
        //console.log(data);
        let randomQuote = data[Math.floor(Math.random()*data.length-1)]
        setSingleQuote(randomQuote);
      })
 },[1])
 console.log(Trainer)
  return (
    <Container>
       <UserInformation.Provider value={Member}>
                {Trainer.map((item)=>{
                    return(
                        <>
                          {item.email === userDetails?.data.email?
                          <TrainerDashboard  trainerProfile = {Trainer}/>
                          :''}
                        </>
                    )
                 })}
                  {Member.map((item)=>{
                    return(
                        <>
                        {item.email === userDetails?.data.email?<Dashboard memberInfo={Member}/>:''}
                        </>
                    )
                 })}
       </UserInformation.Provider>
    <div className="box" style={box__styles}>
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
        <div className='header'>
                <h3>Fill in the details below as a {TrainerForm?'Trainer':'Member'}</h3>
            </div>
       <div  className="form" style={styles}>
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
         <button onClick={HandleForm}>Submit</button>
       </div>
       {TrainerForm?<TrainerQuiz/>:''}
      </div>
    </div>
    </Container>
  )
}

export default Joinus
let Container = styled.div`
 width:100%;
 height:max-content;
 background-color:#fff;
 .box{
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    padding:70px 8%;
    .left__side{
        flex-basis:50%;
        background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/blog-2.jpg');
        background-position:center;
        background-size:cover;
        .quotes{
            top:10%;
            left:50px;
            position:relative;
                .icon{
                    color:#fff;
                    font-size:25px;
                }
            h2{
                color:#fff;
                font-size:25px;
                font-weight:400;
            }
            p{
                font-size:19px;
                color:#fff;
            }
        }
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
             bottom:14px;
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
         .header{
             width:90%;
             justify-content:space-between;
             display:flex;
             align-items:center;
         }
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
 }
`