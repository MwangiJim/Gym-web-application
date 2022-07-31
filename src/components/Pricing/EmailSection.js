import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function EmailSection() {
    let{ userDetails,DetailsName}=useSelector((state)=>state.gymRegucer);
  return (
    <Email>
    <h2>2:Create Your Account</h2>
    <h6>The Email Address You will use To Login</h6>
    <input
     placeholder='Enter Email Address'
     type='email'
     value={userDetails.Email?userDetails.Email:DetailsName?.Email}
    />
    <br/>
    <label>We will not share this email to anyone</label>
   </Email>
  )
}

export default EmailSection
let Email = styled.div`
text-align:left;
padding-top:30px;
h2{
    font-size:30px;
    font-weight:400;
}
h6{
    font-size:15px;
    margin:8px 0;
    font-weight:300;
}
input{
    height:60px;
    width:400px;
    color:grey;
    padding:0 10px;
    background-color:#fff;
    box-shadow:3px 3px 6px #333;
    border:none;
    outline:none;
    margin:1% 0;
    border-radius:5px;
    font-size:18px;
    font-weight:300;
}
label{
    font-size:14px;
}
`