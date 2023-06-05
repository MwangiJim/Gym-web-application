import React, { useContext } from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'
import{createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, sendEmailVerification,signInWithPopup, updateProfile} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEye, faEyeSlash, faPerson,faMailBulk, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { storeUserDetails } from '../../redux/reducers/reducerSlice'
import LoginPad from './LoginPad'
import { userDetailsContext } from '../../App'

function UserLogin() {
    let dispatch = useDispatch()
    let auth = getAuth()
    let[form,setForm] = React.useState({
        email:'',
        username:'',
        password:'',
        address:'',
        secondPwd:''
    })
    let[usertype,setusertype]=React.useState({
        chosen:"",
        user:'User',
        admin:'Admin'
    })
    const handleRadio=(e)=>{
        setusertype((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    let[secretKey,setSecretKey]=React.useState("");
    const HandleInput =(event)=>{
        setForm((prevForm)=>{
            return{
                ...prevForm,
                [event.target.name]:event.target.value
            }
        })
    }
    let[Eye,setEye]=React.useState(false)
    const ChangeVisibility=()=>{
       setEye((prevState)=>!prevState)
    }
    let[Error,setError] = React.useState('')
    const HandleForm=async(e)=>{
        e.preventDefault()
        if(usertype.chosen === 'Admin' && secretKey !== 'P@ssword'){
            alert('Invalid Admin...Are you Admin???');
        }
        await fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
               email:form.email,
               username:form.username,
               password:form.password,
               userType:usertype.chosen,
               date:new Date().toLocaleDateString(),
               time:new Date().toLocaleTimeString()
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert('User Registered..Kindly Sign In Now.')
            console.log(data,'User registered')
        })
        .catch((err)=>{
            console.log('error',err)
        })
    }
    let[Visual,setVisual]=React.useState(false)
    const ChangeStatus=()=>{
       setVisual((prevState)=>!prevState)
    }
    let styles = {
        display:Visual?'none':'block'
    }
    let lineStyles = {
        marginLeft:Visual?'190px':''
    }
    let h4Styles = {
        color:Visual?"#fff":"gray"
    }
    let H4Styles = {
        color:Visual?"gray":"#fff"
    }
  return (
    <Container>
      <Left>
      <div className='textbox'>
         <h3>BEFIT<small>TM</small></h3> 
            <h1>BEST GYM PARTNER</h1>
            <p>The leading store in providing training,gym equipment  and all other sports details</p>
         <h2>ALREADY HAVE AN ACCOUNT?</h2>
         <button onClick={()=>window.location.assign('/login')}>Login</button>
         </div>
      </Left>
       <Right>
            <Register>
            <h4>WELCOME</h4>
            <button className='btn'><img src="/Images/google.png"/>Sign Up With Google</button>
              <small>Or register with email</small>
                <form onSubmit={HandleForm}> 
                    <div className='choice' style={{display:'flex',marginBottom:'10px',justifyContent:'space-between',alignItems:'center'}}>
                    <p>Register as </p>
                    <input
                     type='radio'
                     onChange={handleRadio}
                     value={usertype.user}
                     name='chosen'
                    /><label>User</label>
                    <br/>
                    <input
                    type='radio'
                    onChange={handleRadio}
                    value={usertype.admin}
                    name='chosen'
                    /><label>Admin</label>
                    <br/>
                    </div>
                    {usertype.chosen === 'Admin'?<div className='secretbox'>
                        <label>Secret Key</label>
                        <br/>
                        <input
                        className='input'
                         type='text'
                         placeholder='----'
                         value={secretKey}
                         autoComplete={false}
                         name='secretKey'
                         onChange={(e)=>setSecretKey(e.target.value)}
                        />
                    </div>:''}
                    <label>Email Address</label>
                    <br/>
                    <div className='inputBox'>
                        <input
                        className='input'
                        type='email'
                        onChange={HandleInput}
                        value={form.email}
                        name='email'
                        />
                    </div>
                    <br/>
                    <label>Password</label>
                    <br/>
                       <input
                       className='input'
                        type={Eye?'text':'password'}
                        onChange={HandleInput}
                        value={form.password}
                        name='password'
                        />
                    <br/>
                    <label>Confirm Password</label>
                    <br/>
                       <input
                       className='input'
                        type={Eye?'text':'password'}
                        onChange={HandleInput}
                        value={form.secondPwd}
                        name='secondPwd'
                        />
                    <br/>
                    <label>Full Name</label>
                    <br/>
                    <div className='inputBox'>
                        <input
                        className='input'
                        type='text'
                        onChange={HandleInput}
                        value={form.username}
                        name='username'
                        />
                    </div>
                    <br/>
                    <label>Address</label>
                     <div className='inputBox'>
                     <input
                     className='input'
                      type={'text'}
                      onChange={HandleInput}
                      value={form.address}
                      name='address'
                     />
                     </div>
                    <button className='Btn'>Register Account</button>
                </form>
                <h6>© Copyright by BEFIT,2023</h6>
            </Register>
       </Right>
    </Container>
  )
}

export default UserLogin
let Container = styled.div`
 top:0;
 left:0;
 position:fixed;
 z-index:50;
 width:100%;
 height:100vh;
 background-color:#fff;
 display:flex;
 justify-content:space-between;
`
let Left = styled.div`
 flex-basis:30%;
 height:100vh;
 background-image:url("/Images/abs advanced.jpg");
 background-position:center;
 background-size:cover;
 .textbox{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    color:#fff;
 }
 button{
    color:red;
    border:2px solid red;
    outline:none;
    border-radius:20px;
    background:none;
    padding:12px 35px;
    cursor:pointer;
 }
 h2{
    color:#fff;
    text-align:center;
    margin:30px 0;
 }
 h3{
    color:#fff;
    display:flex;
    small{
        font-size:8px;
    }
    margin:2% 0;
 }
 h1{
    width:150px;
    text-align:center;
    margin:20px 0;
 }
 p{
    color:grey;
    font-size:15px;
    line-height:30px;
    width:130px;
    text-align:center;
 }
 padding:20px;
`
let Right = styled.div`
 flex-basis:70%;
 background-color:#f4f4f4;
 position:relative;
 overflow-y:scroll;
 height:100vh;
 max-height:100vh;
`
let Register = styled.div`
   height:max-content;
   background-color:#fff;
   border-radius:6px;
   box-shadow:4px 4px 10px #333;
   padding:15px;
   width:400px;
   left:250px;
   top:30px;
   position:absolute;
   margin-bottom:20px;
   h6{
    color:gray;
    font-size:12px;
    margin:20px 0;
    text-align:center;
    font-size:14px;
    font-weight:300;
   }
   form{
    label{
        font-weight:bold;
    }
    .Btn{
        background-color:#f44336;
        border-radius:25px;
        color:#fff;
        width:95%;
        padding:12px 40px;
        cursor:pointer;
        outline:none;
        border:none;
    }
    .input{
        width:90%;
        height:50px;
        border-radius:25px;
        padding:0 15px;
        margin:20px 0;
        outline:none;
        border:2px solid #000;
    }
   }
   h4{
    text-align:center;
    font-size:35px;
    margin:25px 0;
   }
   .btn{
    background-color:#fff;
    box-shadow:3px 3px 9px #333;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    outline:none;
    border:none;
    padding:8px 40px;
    width:100%;
    font-weight:600;
    margin:15px 0;
    img{
        width:30px;
        height:30px;
        flex:0.2;
    }
    font-size:16px;
    cursor:pointer;
   }
   small{
    color:grey;
    font-size:13px;
    display:flex;
    align-items:center;
    ::before{
        content:'';
        background-color:gray;
        height:2px;
        width:100px;
        display:block;
        margin:auto;
    }
    ::after{
        content:'';
        background-color:gray;
        height:2px;
        width:100px;
        display:block;
        margin:auto;
    }
   }
`