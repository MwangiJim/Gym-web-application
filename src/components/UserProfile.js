import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useContext } from 'react';
import { UserInformation } from './JoinUsSection/Joinus';

function UserProfile() {
   let profileDetails = useContext(UserInformation);
   console.log(profileDetails.length)
   let{ userDetails,DetailsName}= useSelector((state)=>state.gymRegucer);
   {profileDetails.map((item)=>{
      return(
         console.log(item.name,item.state,item.age,item.location)
      )
   })}
  return (
    <Container>
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
                           <p>{userDetails?.Email?userDetails.Email:DetailsName.Email}</p>
                     </div>
                  </div>
                  <div className='bio'>
                        <img src='/Images/bio.png'/>
                        <small>{item.bio}</small>
                        </div>
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
                  <br/>
                  <small>Charges Per Hour:{}</small>
                  <small>{}</small>
                     </>
                  )
               })}
               
    </Container>
  )
}

export default UserProfile

let Container = styled.div`
 background:#f4f4f4;
 border-radius:15px;
 width:100%;
 height:40vh;
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
`