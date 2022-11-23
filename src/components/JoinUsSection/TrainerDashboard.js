import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import DashboardCenter from './DashboardCenter'


const TrainerDashboard = (props) => {
    let[username,setusername]=React.useState('')
    let[State,setState]=React.useState('')
    let[Age,setAge]=React.useState('')
    let[location,setlocation]=React.useState('')
    let[Message,setmessage]=React.useState('')
    let[password,setpassword]=React.useState('')
    let[hourlypay,sethourlypay]=React.useState('')
//Endpoint:https://countryflagsapi.com/:filetype/:code
 const HandleForm=(e)=>{
    //Make changes to page
    e.preventDefault()
    props.trainerProfile.map((user)=>{
        return(
            fetch(`http://localhost:8080/updateProfile/${user.Trainer_id}`,{
                method:'PUT',
                headers:{"Content-Type":'application/json'},
                body:JSON.stringify({
                  name:username,
                  hourpay:hourlypay,
                  message:Message,
                  age:Age,
                  location:location,
                  city:State  
                })
            })
        )
    })
 }
  return (
    <Container>
         <div className='dashboard'>
              <div className='left__side'>
                 <div className='top__header'>
                    <h1>BEFIT</h1>
                 </div> 
                  <li>Home</li>
                  <li>Settings</li>
                  <li>Trainers</li>
                  <li>Virtual Workout</li>
                  <li>Donate a cup</li>
                  <li>Refer a Friend</li>
                  <h3>Profile Completion</h3>
                <div className='completion'>
                {[...Array(4)].map((item,i)=>{
                    return(
                        <span key={i} style={{backgroundColor:i<3?'rgb(30, 102, 197)':'gray'}}></span>
                    )
                  })}
                  <small>90% completion</small>
                </div>
                <small>BEFIT company||all rights reserved</small>
              </div>
              <DashboardCenter Profile = {props.trainerProfile}/>
             <div className='right__side'>
                <h3>Update Profile</h3>
                <form onSubmit={HandleForm}>
                    <div className='avatar'>
                        <img src='/Images/avatar2.png'/>
                    </div>
                  <label>Your Name</label>
                  <span>*</span>
                  <br/>
                  <input
                    type={'text'}
                    placeholder='Username'
                    name='username'
                    value={username}
                    onChange={(e)=>setusername(e.target.value)}
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
                    value={State}
                    onChange={(e)=>setState(e.target.value)}
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
                    value={Age}
                    onChange={(e)=>setAge(e.target.value)}
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
                    value={location}
                    onChange={(e)=>setlocation(e.target.value)}
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
                    value={Message}
                    onChange={(e)=>setmessage(e.target.value)}
                    />
                     <br/>
                    <label>Hour pay(in $)</label>
                        <span>*</span>
                        <br/>
                        <input
                        type={'number'}
                        placeholder='Proposed Hourly Pay'
                        name='hourlypay'
                        value={hourlypay}
                        onChange={(e)=>sethourlypay(e.target.value)}
                        className='input'
                        />
                    <br/>
                    <button>Submit Changes</button>
                </form>
             </div>
           </div>
    </Container>
  )
}

export default TrainerDashboard
let Container = styled.div`
.dashboard{
    display:flex;
    justify-content:space-between;
    width:100%;
    height:max-content;
    background:#fff;
    left:0%;
    position:absolute;
    top:10.6%;
    z-index:5;
    .left__side{
        flex-basis:24%;
        background:#fff;
         .top__header{
            background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/Images/about-img.jpg');
            background-size:cover;
            background-position:center;
            width:100%;
            height:30vh;
            border-radius:8px;
            h1{
                color:#fff;
                top:20px;
                left:50px;
                position:relative;
            }
         }
        li{
            padding:20px 14px;
            cursor:pointer;
            list-style:none;
            background-color:#f4f4f4;
            margin:1% 0;
        }
        .completion{
            display:flex;
            justify-content:left;
            align-items:center;
            margin:2% 0 ;
            span{
                display:block;
                height:6px;
                width:50px;
                border-radius:8px;
                background-color:rgb(30, 102, 197);
              }
        }
    }
    .right__side{
        flex-basis:20%;
        background-color:#fff;
        h2{
            padding:15px 0;
        }
        form{
             margin:20px 0;
             .avatar{
                flex-basis:45%;
                    img{
                        width:70px;
                        height:70px;
                        cursor:pointer;
                    }
                    small{
                        font-size:10px;
                    }
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    flex-direction:column;
               }
            .input{
                width:300px;
                height:40px;
                border-radius:7px;
                margin:1% 0;
                padding:0 10px;
                border:none;
                background-color:#f4f4f4;
            }
            textarea{
                width:300px;
                border-radius:7px;
                resize:none;
                outline:none;
                height:150px;
                padding:10px 10px;
                border:none;
                background-color:#f4f4f4;
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
}
`