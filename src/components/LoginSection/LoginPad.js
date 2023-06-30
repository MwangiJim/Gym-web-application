
import React from 'react'
import styled from 'styled-components'
import {useDispatch}  from 'react-redux'
import { storeUserDetails } from '../../redux/reducers/reducerSlice'
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../Loader'


function LoginPad() {
    let[LoginForm,setLoginForm]=React.useState({
        email:'',
        password:''
    })
    let[Eye,setEye]=React.useState(false)
    const HandleLogin=(e)=>{
        setLoginForm((prevForm)=>{
            return{
                ...prevForm,
                [e.target.name]:e.target.value
            }
        })
    }
    let[Error,setError] = React.useState('')
    const HandleLoginForm=async(event)=>{
        event.preventDefault()
        await fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:LoginForm.email,
                password:LoginForm.password
            })
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,'Account Verified')
            if(data.status === 'ok'){
                alert('successful login')
                window.localStorage.setItem('token',data.data)
                window.localStorage.setItem('isLoggedIn',true);
                window.location.assign('/redirect')
            }
        })
    }
    const ToggleVisibility=()=>{
        setEye((prevEye)=>!prevEye)
    }
  return (
    <Login>
    <Left>
        <h2>BEFIT<small>TM</small></h2>
    <form onSubmit={HandleLoginForm}>
        <h3>WELCOME BACK!</h3>
        <button> <img src='/Images/google.png'/>
        Sign In With Google
        </button>
        <small>Or Sign In With Email</small>
        <label>Email Address</label>
        <br/>
        <input
         type='email'
         placeholder='Enter Email'
         value={LoginForm.email}
         name='email'
         className='input'
         onChange={HandleLogin}
        />
        <br/>
        <label>Password</label>
        <div className='password'>
            <input
             type={Eye?'text':'password'}
             placeholder='Enter Password'
             value={LoginForm.password}
             name='password'
             onChange={HandleLogin}
            />
        </div>
        <p>Forgot Your Password?</p>
        <button className='button'>Sign in</button>
        {Error?<div className="error">
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <p>{Error}</p>
                    </div>:''}
                    <h6>© Copyright By BEFIT</h6>
    </form>
    </Left>
    <Right>
       <h1>NEW HERE?</h1>
       <p>Join our BEFIT community with over 20,000 sport enthusiasts using our Sports Data. Start by registering your account here.</p>
      <button onClick={()=>window.location.assign('/accountsetup')}>Register</button>
    </Right>
</Login>
  )
}

export default LoginPad
let Login = styled.div`
 top:0;
 left:0;
 position:fixed;
 z-index:30;
 background-color:#fff;
 width:100%;
 height:100vh;
 display:flex;
 justify-content:space-between;
`
let Left = styled.div`
 flex-basis:70%;
 position:relative;
 height:100vh;
 background-color:#f4f4f4;
 form{
    background-color:#fff;
    border-radius:6px;
    box-shadow:4px 4px 10px #333;
    padding:15px;
    left:300px;
    top:100px;
    width:350px;
    position:absolute;
    small{
        color:grey;
        font-size:13px;
        display:flex;
        align-items:center;
        margin:10px 0;
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
    h6{
            text-align:center;
            color:gray;
            font-size:16px;
            font-weight:400;
    }
    button{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
            width:30px;
            height:30px;
        }
        font-weight:bold;
        background:transparent;
        border-radius:20px;
        cursor:pointer;
        border:none;
        outline:none;
        height:40px;
        box-shadow:4px 4px 10px #333;
        width:94%;
        margin:10px 0;
    }
    .button{
        font-weight:bold;
        background:#f44336;
        border-radius:20px;
        cursor:pointer;
        border:none;
        outline:none;
        height:40px;
        box-shadow:4px 4px 10px #333;
        width:94%;
        margin:10px 0;
    }
    h3{
        margin:15px 0;
        text-align:center;
        font-size:35px;
        font-weight:700;
    }
    input{
        width:90%;
        height:50px;
        border-radius:25px;
        padding:0 15px;
        margin:20px 0;
        outline:none;
        border:2px solid #000;
    }
 }
 h2{
    font-size:40px;
    font-weight:500;
    display:flex;
    justify-content:center;
    margin-top:3%;
    small{
        font-size:10px;
    }
 }
`
let Right = styled.div`
 flex-basis:30%;
 background-image:url("/Images/banner2.jpg");
 background-position:center;
 background-size:cover;
 height:100vh;
 display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 h1{
    color:#fff;
 }
 p{
    color:gray;
    font-size:14px;
    width:150px;
    font-weight:600;
    text-align:center;
    margin:20px 0;
    line-height:25px;
 }
 button{
    color:#f44336;
    border:2px solid #f44336;
    border-radius:25px;
    padding:12px 40px;
    background:transparent;
    cursor:pointer;
 }
`