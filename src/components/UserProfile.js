import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function UserProfile() {
    let{ Userprofile } = useSelector((state)=>state.gymRegucer)
  return (
    <Container>
       <h3 className='name'>{Userprofile.UserName}</h3>
        <div className='details'>
           <div>
                <small>{Userprofile.Years}</small>
                <h6>Age</h6>
           </div>
            <div>
              {Userprofile.Phone && <small>{Userprofile.Phone}</small>}
             <h6>Tel</h6>
            </div>
            <div>
            <small>{Userprofile.HourlyPay}</small>
            <h6>Charges/Hr</h6>
            </div>
            <div>
            <small>{Userprofile.LevelofExperience}</small>
            <h6>Level</h6>
            </div>
        </div>
       <div className='location'>
          <div>
             <h4>{Userprofile.City}</h4>
             <small>City/state</small>
          </div>
         <div>
         <h4>{Userprofile.Location}</h4>
         <small>Location</small>
         </div>
       </div>
        <h3 className='head__summary'>Summary</h3>
       <small className='summary'>{Userprofile.message?Userprofile.message:'Please Give us a Summary of Yourself'}</small>
       <br/>
       {Userprofile.HourlyPay?<small>Charges Per Hour:{Userprofile.HourlyPay}</small>:
       <small>{Userprofile.Period}</small>}
    </Container>
  )
}

export default UserProfile

let Container = styled.div`
 background:#f4f4f4;
 border-radius:15px;
 width:100%;
 height:40vh;
 .details{
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    background-color:rgb(30, 102, 197);
    padding:8px;
    border-radius:5px;
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
    justify-content:center;
    align-items:center;
    background-color:rgb(30, 102, 197);
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