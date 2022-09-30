import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Rating from './Rating'
import { useSelector } from 'react-redux'
import BookingsSection from './BookingsSection.js'

const DashboardCenter = (props) => {
  let{BookingsMade}=useSelector((state)=>state.gymRegucer);
    const[Availability,setAvailability]=React.useState(false);
    const HandleAvailability=()=>{
      setAvailability((prevState)=>!prevState)
    }
    let styles = {
      marginLeft:Availability?'35px':'0px'
    }
    let OffStyles = {
      color:Availability?'#f44336':"#000"
    }
    let OnStyles = {
      color:Availability?'#000':"#f44336"
    }
    let [BookedSessions,setBookedSessions]=React.useState([]);
    useEffect(()=>{
       let fetchedBookings = async()=>{
        await fetch('http://localhost:8080/bookings')
        .then((res)=>res.json())
        .then((data)=>{console.log(data)
           let Booked = data.message.map((item)=>{
            return(
             {
               name: item.FullName,
               age: item.Age,
               date: item.Date,
               phone: item.PhoneNumber,
               level:item.Level,
               email:item.Email
             }
            )
           })
           setBookedSessions(Booked);
        })
        .catch((err)=>{
          console.log(err.message)
        })
       }
       return ()=>{
        fetchedBookings();
       }
    },[1])
    console.log(BookedSessions)
  return (
    <Container>
      {props.Profile.map((data)=>{
        return(
            <>
                <div className='top__section'>
                </div>
                <div className='profile'>
                  <div className='left'>
                      <img src='/Images/avatar2.png'/>
                      <div className='info'>
                        <p>Hello,Mr {data.username}</p>
                      </div>
                  </div>
                  <div className='price'>
                    <small>Charges:${data.hourlypay}/hr</small>
                  </div>
                  <div className='availability'>
                    <small className='bold'>Availability:</small>
                    <div className='box'>
                      <small style={OnStyles}>On</small>
                      <button onClick={HandleAvailability}><span style={styles}></span></button>
                      <small style={OffStyles}>Off</small>
                    </div>
                  </div>
                </div>
                <div className='trainerInfo'>
                  <h4>My Bio</h4>
                   <p>{data.message}</p>
                </div>
                <div className='Address'>
                  <h4>Address Details</h4>
                  <div className='line'>
                       <img src='/Images/location.png'/>
                       <small>{data.location}</small>
                  </div>
                  <div className='line'>
                       <img src='/Images/city.png'/>
                       <small>{data.city}</small>
                  </div>
                  <div className='line'>
                       <img src='/Images/phone.png'/>
                       <small>{data.phone}</small>
                  </div>
                </div>
                <div className='experience'>
                  <h4>Trainer Experience</h4>
                   <small>{data.levelofexperience}</small>
                   <p> {data.levelofexperience === 'Advanced'?
                   'As an Advanced Trainer,I have achieved a lot Through Hardwork and Consistence.The Key to Strength and Endurance is Consistency throughout'
                   :"I Train Beginners trying to get into bodybuilding which can be such a feat if you do not know how to go about it.Therefore i will be here to help"}</p>
                   <h5>Years of Experience:{data.experience}</h5>
                </div>
                <div className='bookings'>
                  <h4>Your Trainees</h4>
                  {/**Map trainees here */}
                  {BookedSessions.length>0? <div className='block'>
                    <small>You have {BookedSessions.length} {BookedSessions.length>1?'Trainees':'Trainee'}</small>
                  {BookedSessions.map((item)=>{
                    return(
                      <BookingsSection
                       name = {item.name}
                       age = {item.age}
                       level = {item.level}
                       date = {item.date}
                       phone = {item.phone}
                       email = {item.email}
                      />
                    )
                  })}
                  </div>:<p>You have no trainees at the moment</p>}
                </div>
                <div className='star__rating'>
                  <h4>Star Rating</h4>
                  <i>This rating is visible to the public.</i>
                  <div className='container__stars'>
                     <Rating/>
                  </div>
                </div>
            </>
        )
      })}
    </Container>
  )
}

export default DashboardCenter
let Container = styled.div`
flex-basis:50%;
height:110vh;
max-height:110vh;
margin:0 1%;
overflow-y:scroll;
::-webkit-scrollbar{
  width:0px;
}
 .top__section{
    width:100%;
    height:30vh;
    border-radius:8px;
    background-position:center;
    background-size:cover;
    background-image:url("/Images/banner-bg.jpg");
    h1{
        color:#fff;
    }
 }
 .profile{
  display:flex;
  margin-bottom:-15px;
  margin-right:20px;
  justify-content:space-between;
  align-items:baseline;
  .left{
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    img{
      width:80px;
      height:80px;
    }
    .info{
      font-size:17px;
      font-weight:600;
    }
  }
 }
 .price{
  border:1px solid rgb(30, 102, 197);
  padding:12px 20px;
  border-radius:40px;
  small{
    font-size:16px;
    font-weight:300;
  }
 }
 .availability{
  display:flex;
  justify-content:space-between;
  align-items:center;
  .bold{
    font-size:18px;
    font-weight:600;
  }
  .box{
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
      background:#000;
      border-radius:20px;
      width:60px;
      height:25px;
      outline:none;
      border:none;
      cursor:pointer;
      span{
        height:23px;
        width:23px;
        border-radius:50%;
        background:#fff;
        display:block;
      }
    }
  }
 }
 .trainerInfo{
  h4{
    font-size:20px;
    font-weight:400;
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
  p{
    line-height:25px;
  }
 }
 .Address{
  margin:2% 0;
   h4{
    font-size:20px;
    font-weight:400;
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
   .line{
    display:flex;
    justify-content:left;
    align-items:center;
    margin:1% 0;
    img{
      width:20px;
      height:20px;
      object-fit:cover;
    }
    small{
      font-size:15px;
      font-weight:500;
    }
   }
 }
 .experience{
  margin:1% 0;
  h4{
    font-size:20px;
    font-weight:400;
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
  p{
    line-height:30px;
  }
 }
 .star__rating{
  margin:1% 0;
  h4{
    font-size:20px;
    font-weight:400;
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
  .container__stars{
    width:450px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    .stars{
      font-size:30px;
      .star{
        margin:0 20px;
      }
    }
  }
 }
 .bookings{
  margin:1% 0;
  h4{
    font-size:20px;
    font-weight:400;
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
 }
`