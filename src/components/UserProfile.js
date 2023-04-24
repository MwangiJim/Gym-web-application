import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useContext } from 'react';
import { UserInformation } from './JoinUsSection/Joinus';
import BookingsSection from './JoinUsSection/BookingsSection';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Comments from './JoinUsSection/Comments';
import DeleteMemberAccount from './JoinUsSection/DeleteMemberAccount';
import { userDetailsContext } from '../App';

function UserProfile() {
   let profileDetails = useContext(UserInformation);
//   console.log(profileDetails.length)
   let{ DetailsName}= useSelector((state)=>state.gymRegucer);
   let[TrainerData,setTrainerData]=React.useState([]);
   useEffect(()=>{
      fetch('http://localhost:8080/newTrainer')
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data)
         let TrainerInfo = data.message.map((item)=>{
            return(
               {
                  name:item.Username,
                  age:item.Age,
                  phone:item.Phone,
                  experience:item.LevelofExperience,
                  email:item.Email,
                  location:item.Location
               }
            )
         })
         setTrainerData(TrainerInfo)
      })
      .catch((err)=>{
         console.log(err.message)
      })
   })
   let[booking,setbooking]=React.useState([])
   useEffect(()=>{
      fetch('http://localhost:8080/bookings')
      .then((res)=>res.json())
      .then((data)=>{
         //console.log(data)
         let booked = data.message.map((item)=>{
            return(
               {
                  name:item.FullName,
                  age:item.Age,
                  email:item.Email,
                  trainer:item.Trainer
               }
            )
         })
         setbooking(booked)
      })
      .catch((err)=>{
         console.log(err.message)
      })
   })
   let[TrainerComment,setTrainerComment] = React.useState([])
   useEffect(()=>{
    fetch('http://localhost:8080/Trainercomments')
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data)
      let trainer = data.message.map((item)=>{
        return(
          {
            comment:item.Comment,
            time:item.TimeCommented,
            date:item.DateCommented,
            rate:item.Rate
          }
        )
      })
      setTrainerComment(trainer)
    })
   })
   let[MemberComment,setMemberComment] = React.useState([])
   useEffect(()=>{
    fetch('http://localhost:8080/Membercomments')
    .then((res)=>res.json())
    .then((data)=>{
      //console.log(data)
      let member = data.message.map((item)=>{
        return(
          {
            comment:item.Comment,
            time:item.TimeCommented,
            date:item.DateCommented,
            rate:item.Rate
          }
        )
      })
      setMemberComment(member)
    })
   })
   let[memberTerminate,setMemberTerminate]=React.useState(false);
   function deleteMemberAccount(){
       setMemberTerminate((prevState)=>!prevState)
   }
   let userDetails = useContext(userDetailsContext);
  return (
    <Container>
      {memberTerminate?<DeleteMemberAccount/>:''}
               {profileDetails.map((item)=>{
                  return(
                     <>
                       <div className='details'>
                     <div className='name'>
                        <img src='/Images/avatar1.png' className='avatar'/>
                        <br/>
                        <div className='content'>
                        <img src='/Images/name.png' className='avatar__name'/>
                        <p>{item.name}</p>
                        </div>
                     </div>
                     <div className="email">
                           <img src="/Images/mail.png"/>
                           <p>{userDetails?.data.email?userDetails.data.email:''}</p>
                     </div>
                  </div>
                  <h2>biography</h2>
                  <div className='bio'>
                        <img src='/Images/bio.png'/>
                        <small>{item.bio}</small>
                        </div>
                        <h2>Address</h2>
                  <div className='location'>
                     <div className='city'>
                        <img src='/Images/city.png'/>
                        <h4>{item.state}</h4>
                     </div>
                     <br/>
                     <div className='loc'>
                        <img src="/Images/location.png"/>
                        <h4>{item.location}</h4>
                     </div>
                  </div>
                  <h2>Your Trainer</h2>
                   {booking.length>0?<div className='trainer'>
                     {TrainerData.map((item,i)=>{
                        return(
                           <BookingsSection
                               key={i}
                               name={item.name}
                               age = {item.age}
                               phone= {item.phone}
                               level={item.experience}
                               email={item.email}
                               location={item.location}
                               data = {TrainerData}
                            />
                        )
                     })}
                   </div>:'You have no Trainers..Book if you wish to train'}
                   <br/>
                   <h2><FontAwesomeIcon icon={faMessage}/> Chats</h2>
                    {MemberComment.map((item,i)=>{
                     return(
                        <Comments
                        key={i}
                        id={1}
                        comment={item.comment}
                        date={item.date}
                        time={item.time}
                        rate={item.rate}
                        />
                     )
                    })}
                    {TrainerComment.map((item,i)=>{
                     return(
                        <Comments
                        key={i}
                        id={2}
                        comment={item.comment}
                        date={item.date}
                        time={item.time}
                        rate={item.rate}
                        />
                     )
                    })}
                     <br/>
                     <h2 className='blue'>Danger Zone</h2>
                     <div className='danger__zone'>
                        <FontAwesomeIcon icon={faTriangleExclamation} className='warning'/>
                        <h3>Delete Account</h3>
                        <button onClick={deleteMemberAccount}>Delete My {item.name?'Member':'Trainer'} Account</button>
                     </div>
                     </>
                  )
               })}
               
    </Container>
  )
}

export default UserProfile

let Container = styled.div`
 background:#f4f4f4;
 border-radius:3px;
 margin:1% 0;
 width:100%;
 height:70vh;
 max-height:70vh;
 overflow-y:scroll;
 ::-webkit-scrollbar{
     width:0;
 }
 .bio{
   display:flex;
   justify-content:left;
   flex-direction:column;
   background:#f4f4f4;
   padding:20px 12px;
   width:100%;
   box-shadow:2px 2px 4px #333;
   border-radius:8px;
   margin:2% 0;
   img{
      width:20px;
      height:20px;
   }
 }
 .details{
    display:flex;
    justify-content:left;
    flex-direction:column;
    color:#fff;
    background:#f4f4f4;
    padding:20px 12px;
    color:#000;
    border-radius:5px;
    margin-top:5%;
    p{
      font-size:12px;
    }
    h4{
      font-size:12px;
    }
    .name{
      display:flex;           
      justify-content:left;
      flex-direction:column;
      .content{
         display:flex;
      }
      .avatar{
         width:80px;
         height:80px;
      }
      .avatar__name{
         width:20px;
         height:20px;
      }
    }
    .email{
      display:flex;
      justify-content:left;
      align-items:center;
      img{
         width:20px;
         height:20px;
      }
    }
    div{
        display:block;
        text-align:center;
        small{
            font-size:17px;
            font-weight:300;
        }
    }
    margin:1% 0;
    box-shadow:2px 2px 5px #333;
 }
 .name{
    font-weight:300;
 }
 .location{
    display:flex;
    justify-content:left;
    flex-direction:column;
    background:#f4f4f4;
    padding:20px 12px;
    .city{
      color:#000;
      display:flex;
      align-items:center;
      img{
         width:20px;
         height:20px;
      }
       h4{
         font-size:12px;
       }
    }
    .loc{
      color:#000;
      align-items:center;
      display:flex;
      img{
         width:20px;
         height:20px;
      }
      h4{
         font-size:12px;
       }
    }
    div{
        display:block;
        text-align:center;
        margin:0 2%;
        h4{
            font-weight:300;
            font-size:18px;
        }
    }
    box-shadow:2px 2px 5px #333;
    border-radius:5px;
    padding:7px;
    color:#fff;
 }
 .summary{
    border-radius:20px;
    background-color:rgb(30, 102, 197);
    padding:10px;
    color:#fff;
    box-shadow:3px 3px 8px #333;
    margin-bottom:3%;
 }
 .head__summary{
    font-weight:300;
    margin-bottom:3%;
 }
 h2{
   ::after{
      content:'';
      width:100px;
      background-color:rgb(30, 102, 197);
      height:4px;
      border-radius:8px;
      display:block;
      margin:1% 0;
    }
 }

 .danger__zone{
   width:90%;
   height:20vh;
   left:5%;
   position:relative;
   border-radius:5px;
   border:2px solid #f44336;
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:column;
   background-color:#b36661e0;
   padding:6px;
   .warning{
     color:#f44336;
     font-size:40px;
   }
   button{
     padding:12px 45px;
     border-radius:8px;
     background:#f44336;
     color:#fff;
     border:none;
     outline:none;
     cursor:pointer;
   }
 }
`