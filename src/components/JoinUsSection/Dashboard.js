import React, { useContext } from 'react'
import styled from 'styled-components'
import BookingDisplay from '../BookingDisplay'
import { UserInformation } from './Joinus'

const Dashboard = (props) => {
    let memberprofileInfo = useContext(UserInformation)
    console.log(memberprofileInfo)
        let[Form,setForm]=React.useState({
            username:'',
            State:'',
            Age:null,
            location:'',
            Message:'',
            password:'',
        })
    const HandleInput=(e)=>{
       setForm((prevStates)=>{
        return{
            ...prevStates,
            [e.target.name]:e.target.value
        }
       })
    }
    const HandleForm=async(e)=>{
        e.preventDefault();
          memberprofileInfo.map((item)=>{
            return(
                fetch(`http://localhost:8080/updateMember/${item.member_Id}`,{
                    method:'PUT',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        newName:Form.username,
                        newMessage:Form.Message,
                        newLocation:Form.location,
                        newState:Form.State,
                        newAge:Form.Age
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
                    let complete = i+1
                    return(
                        <span key={i} style={{backgroundColor:complete<=3?'rgb(30, 102, 197)':'gray'}}></span>
                    )
                  })}
                  <small>90% completion</small>
                </div>
                <small>BEFIT company||all rights reserved</small>
              </div>
             <BookingDisplay/>
             <div className='right__side'>
                <h3>Update Profile</h3>
                <form onSubmit={HandleForm}>
                    <div className='avatar'>
                        <img src='/Images/avatar1.png'/>
                    </div>
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
                    <button>Submit Changes</button>
                </form>
             </div>
           </div>
    </Container>
  )
}

export default Dashboard
let Container = styled.div`
.dashboard{
    display:flex;
    justify-content:space-between;
    width:100%;
    height:110vh;
    background:#fff;
    left:0%;
    position:absolute;
    top:8%;
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