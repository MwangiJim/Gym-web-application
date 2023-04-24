import { GoogleAuthProvider,signInWithPopup ,getAuth, sendPasswordResetEmail,signInWithEmailAndPassword} from 'firebase/auth'
import React from 'react'
import styled from 'styled-components'
import {useDispatch}  from 'react-redux'
import { storeUserDetails } from '../../redux/reducers/reducerSlice'
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function LoginPad() {
    let provider = new GoogleAuthProvider()
    let dispatch = useDispatch()
    let auth = getAuth()
    const SignInWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then((result)=>{
          dispatch(storeUserDetails({
              UserName:result.user.displayName,
              PhotoImage:result.user.photoURL,
              Email:result.user.email
          }))
        })
     }
     const ForgotPassword=()=>{
        sendPasswordResetEmail(auth,LoginForm.email)
        .then(()=>{
            console.log('Email sent')
        })
        .catch((error)=>{
            setError(error)
        })
    }
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
                window.localStorage.setItem('token',data.data)
                window.localStorage.setItem('isLoggedIn',true);
                window.location.assign('/')
            }
        })
    }
    const ToggleVisibility=()=>{
        setEye((prevEye)=>!prevEye)
    }
  return (
    <Login>
    <form onSubmit={HandleLoginForm}>
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
            <FontAwesomeIcon icon={Eye?faEye:faEyeSlash} onClick={ToggleVisibility} className='eye'/>
        </div>
        <p onClick={ForgotPassword}>Forgot Your Password?</p>
        <button className='button'>Sign in</button>
          <h4>or</h4>
         <img src='/Images/google.png'  onClick={SignInWithGoogle}/>
        {Error?<div className="error">
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <p>{Error}</p>
                    </div>:''}
    </form>
    <p>Privacy.Terms.About</p>
</Login>
  )
}

export default LoginPad
let Login = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
flex-basis:35%;
p{
    font-size:13px;
}
 h3{
     text-align:center;
     margin:2% 0;
 }
 small{
     left:45%;
     position:relative;
     margin:2% 0;
 }
 .button{
     background-color:#13d4c4;
     width:100%;
     height:42px;
     color:#fff;
     outline:none;
     border:none;
     border-radius:20px;
     cursor:pointer;
     font-size:19px;
     font-weight:400;
     text-transform:uppercase;
     border:2px solid #000;
     margin:3% 0;
     img{
         width:25px;
     }
 }
 form{
    width:300px;
    margin:9% 0;
    img{
        width:30px;
        height:30px;
        border-radius:50%;
        cursor:pointer;
        left:43%;
        top:20px;
        position:relative;
    }
    h4{
        position:relative;
        font-weight:300;
        width:80%;
        display:flex;
        left:7%;
        justify-content:center;
        align-items:center;
        ::before{
            content:'';
            position:absolute;
            background-color:gray;
            height:1px;
            width:100px;
            display:block;
            right:2%;
        }
        ::after{
            content:'';
            position:absolute;
            left:2%;
            background-color:gray;
            height:1px;
            width:100px;
            display:block;
        }
    }
    .error{
        padding:10px 12px;
        margin:2% 0;
        border-radius:8px;
        border:2px solid #f44336;
        display:flex;
        justify-content:center;
        align-items:center;
        color:#f44336;
        p{
            color:#f44336;
        }
    }
     label{
         text-align:left;
         color:#25bd25;
         font-weight:300;
         font-size:14px;
     }
     .input{
         width:100%;
         height:45px;
         margin:1% 0;
         outline:none;
         border-bottom:2px solid  gray;
         border-top:0;
         border-left:0;
         border-right:0;
         background:transparent;
         padding:0 10px;
         color:#000;
         margin-bottom:15px;
     }
     .password{
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:100%;
         height:45px;
         margin:1% 0;
         border-bottom:2px solid gray;
         background:transparent;
         input{
             padding: 0 10px;
             width:600px;
             height:45px;
             outline:none;
             border:none;
             background:transparent;
         }
         .eye{
             margin:0 2%;
         }
     }
     p{
         margin:5% 0;
         color:#25bd25;
         cursor:pointer;
     }
 }
 .btn{
    background-color:#13d4c4;
    color:#fff;
    display:flex;
    justify-content:left;
    align-items:center;
    border-radius:25px;
    width:100%;
    height:42px;
    outline:none;
    border:none;
    padding: 0 3px;
    cursor:pointer;
    img{
        width:40px;
    }
 }
`