import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import UserProfile from './UserProfile';

function BookingDisplay(props) {

    let{ userDetails,DetailsName}= useSelector((state)=>state.gymRegucer);

   // console.log(userProfileInfo)
  return (
    <Container>
        <Content>
               <div className='user__details'>
                  <h4>{userDetails.UserName?userDetails.UserName:DetailsName?.UserName}</h4>
                  <small>{userDetails.Email?userDetails.Email:DetailsName?.Email}</small>
               </div>
        </Content>
        <div className='profile'>
       <UserProfile
       />
        </div>
    </Container>
  )
}

export default BookingDisplay

let Container = styled.div`
 background-color:#fff;
 border-radius:5px;
 overflow:hidden;
 flex-basis:55%;
 margin:0 1%;
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
 height:30vh;
 background-image:url("/Images/home-bg-1.jpg");
 background-position:center;
 background-size:cover;
 color:#fff;
 .icon{
  font-size:20px;
  left:95%;
  top:5%;
  cursor:pointer;
  color:#fff;
  position:relative;
}
.user__details{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
  top:4%;
  position:relative;
  h4,small{
    font-family: 'Smooch', cursive;
  }
  .user__Profile{
    top:30px;
    position:relative;
    z-index:3;
    p{
      color:#fff;
      background-color:#f44336;
      height:25px;
      width:32px;
      border-radius:10px;
      text-align:center;
      padding:6px;
      font-size:20px;
      text-transform:uppercase
   }
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