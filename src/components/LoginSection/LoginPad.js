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
    const HandleLoginForm=(event)=>{
        event.preventDefault()
        if(LoginForm.email,LoginForm.password){
            signInWithEmailAndPassword(auth,LoginForm.email,LoginForm.password)
            .catch((err)=>{
                setError(err.message)
            })
        }
    }
    const ToggleVisibility=()=>{
        setEye((prevEye)=>!prevEye)
    }
  return (
    <Login>
    <h3>Sign In to Account</h3>
    <button onClick={SignInWithGoogle} className='btn'>
         <img src='/Images/google.png'/>
        SIGN IN WITH GOOGLE
    </button>
    <small>or</small>
    <h4>Sign in with Email Address</h4>
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
        <button className='button'>Log in</button>
        {Error?<div className="error">
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <p>{Error}</p>
                    </div>:''}
    </form>
</Login>
  )
}

export default LoginPad
let Login = styled.div`
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
     background-color:rgb(30, 102, 197);;
     box-shadow:4px 4px 9px #000;
     width:100%;
     height:42px;
     color:#fff;
     outline:none;
     border:none;
     border-radius:10px;
     cursor:pointer;
     font-size:19px;
     font-weight:400;
     img{
         width:25px;
     }
 }
 form{
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
     }
     .input{
         width:95%;
         height:45px;
         border-radius:5px;
         margin:2% 0;
         border:none;
         background-color:#f4f4f4;
         padding:0 10px;
         color:#000;
     }
     .password{
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:100%;
         height:45px;
         border:none;
         border-radius:5px;
         background-color:#f4f4f4;
         input{
             padding: 0 10px;
             width:95%;
             height:45px;
             outline:none;
             border:none;
             background-color:#f4f4f4;
         }
         .eye{
             margin:0 2%;
         }
     }
     p{
         margin:2% 0;
         color:#3b5998;
         cursor:pointer;
     }
 }
 .btn{
    background-color:rgb(30, 102, 197);
    color:#fff;
    display:flex;
    justify-content:left;
    align-items:center;
    border-radius:10px;
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