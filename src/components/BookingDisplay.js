import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import UserProfile from './UserProfile';

function BookingDisplay() {
  let navigate = useNavigate()
    let{ BookingsMade,userDetails,DetailsName,Userprofile}= useSelector((state)=>state.gymRegucer);
    let[State,setState]=React.useState(false);
    const CloseBookings=()=>{
      setState((prevState)=>!prevState)
    }
    let styles = {
        display:State?'none':'block'
    }
    console.log(BookingsMade)
  return (
    <Container style={styles}>
        <Content>
           <FontAwesomeIcon icon={faTimesCircle} className='icon' onClick={CloseBookings}/>
               <div className='user__details'>
                  <h4>{userDetails.UserName?userDetails.UserName:DetailsName?.UserName}</h4>
                  <small>{userDetails.Email?userDetails.Email:DetailsName?.Email}</small>
                 <div className='user__Profile'>
                 {userDetails.PhotoImage? <img src={userDetails.PhotoImage}/>: 
                 <p>{DetailsName?.UserName.charAt(0)}{DetailsName?.UserName.charAt(1)}</p>}
                 </div>
               </div>
        </Content>
        {Userprofile?.UserName? 
        <div className='profile'>
         <UserProfile/>
        </div>:<h5>Please set up your Profile <br/><strong onClick={()=>navigate(`/joinus`)}>Here</strong> as a Member or Trainer</h5>}
    </Container>
  )
}

export default BookingDisplay

let Container = styled.div`
 background-color:#fff;
 width:400px;
 height:max-content;
 border-radius:5px;
 overflow:hidden;
 left:70%;
 position:fixed;
 top:11%;
 z-index:5;
 .profile{
   bottom:10px;
   position:relative;
 }
 h5{
  padding:7px;
  strong{
    color:rgb(30, 102, 197);
    cursor:pointer;
    border-bottom:1px solid rgb(30, 102, 197);
    cursor:pointer;
  }
 }
`
let Content = styled.div`
 width:100%;
 height:20vh;
 background-image:url("/Images/34.jpg");
 background-position:center;
 background-size:cover;
 color:#fff;
 .icon{
  font-size:20px;
  left:90%;
  cursor:pointer;
  color:#fff;
  position:relative;
}
.user__details{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  h4,small{
    font-family: 'Smooch', cursive;
  }
  .user__Profile{
    top:30px;
    position:relative;
    z-index:3;
    img{
      width:60px;
      height:60px;
      border-radius:50%;
    }
    p{
      padding:13px;
    }
  }
}
`