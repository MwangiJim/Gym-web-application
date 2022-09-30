import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'
import{createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, sendEmailVerification,signInWithPopup, updateProfile} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEye, faEyeSlash, faPerson,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { storeUserDetails } from '../../redux/reducers/reducerSlice'
import LoginPad from './LoginPad'

function UserLogin() {
    let dispatch = useDispatch()
    let auth = getAuth()
    let[form,setForm] = React.useState({
        email:'',
        username:'',
        password:'',
        address:''
    })
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
    const HandleForm=(e)=>{
        e.preventDefault()
        if(form.email,form.password){
            console.log(form)
             createUserWithEmailAndPassword(auth,form.email,form.password)
             .then((AuthUser)=>{
                 console.log(AuthUser)
                 updateProfile(auth.currentUser,{displayName:form.username})
                 sendEmailVerification(auth.currentUser,form.email)
                 .catch((err)=>{
                    alert(err.message)
                 })
             })
             .catch((error)=>{
                 setError(error.message)
                 alert(error.message)
             })
             localStorage.setItem('address',form.address)
        }
    }
    let fbProvider = new FacebookAuthProvider()
    const signUpWithFacebook=()=>{
       signInWithPopup(auth,fbProvider)
       .then((result)=>{
         dispatch(storeUserDetails({
            Name:result.user.displayName,
            Email:result.user.emailVerified,
            Photo:result.user.photoURL,
         }))
       })
       .catch((err)=>{
        alert(err.message)
       })
    }
    let ghProvider = new GithubAuthProvider()
    const signUpWithGithub=()=>{
        signInWithPopup(auth,ghProvider)
        .then((result)=>{
            dispatch(storeUserDetails({
                Name:result.user.displayName,
                Email:result.user.emailVerified,
                Photo:result.user.photoURL,
            }))
        })
        .catch((error)=>{
            alert(error.message)
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
        marginLeft:Visual?'108px':''
    }
    let h4Styles = {
        color:Visual?"#fff":"#000"
    }
    let H4Styles = {
        color:Visual?"#000":"#fff"
    }
  return (
    <Container>
        <div className='video'>
            <video autoPlay muted loop src='/Images/video-1.mp4' width={'100%'}>
            </video>
        </div> 
       <div className='center'>
       <InviteSection>
          <div className='textbox'>
          <h1>{Visual?'Hello,Friend':'Welcome Back'}</h1>
            <p>{Visual?'Login to continue with your Journey':'Enter Your Personal Details to Become part of us'}</p>
          </div>
        </InviteSection>
       <Form>
         <img src='/Images/logo.png' className='img'/>
         <h4>BE<strong>FIT</strong></h4>
          <Button>
            <span onClick={ChangeStatus}>
               <div className='btns'>
                   <h4 style={H4Styles}>Register</h4>
                   <h4 style={h4Styles}>Login</h4>
                   <div className='color' style={lineStyles} >

                   </div> 
               </div>
            </span>
          </Button>
            <Box>
            <Register style={styles}>
              <div className='buttons'>
              <button className='gbtn' onClick={signUpWithFacebook}>
                     <img src='/Images/facebook.png'/>
                </button>
                <button className='fbtn' onClick={signUpWithGithub}>
                    <img src='/Images/github.png'/>
                </button>
              </div>
                <small>or</small>
                <h5>Sign up with your email address</h5>
                <form onSubmit={HandleForm}>
                    <p>{Error?Error:''}</p>
                    <label>What's Your Email?</label>
                    <br/>
                    <div className='inputBox'>
                    <img src="/Images/mail.png"/>
                        <input
                        type='email'
                        placeholder='Enter Your Email'
                        onChange={HandleInput}
                        value={form.email}
                        name='email'
                        className='input'
                        />
                    </div>
                    <br/>
                    <label>Create a Password</label>
                    <br/>
                   <div className='password'>
                    <img src="/Images/padlock.png"/>
                       <input
                        type={Eye?'text':'password'}
                        placeholder='Enter Your Password'
                        onChange={HandleInput}
                        value={form.password}
                        name='password'
                        />
                        <FontAwesomeIcon icon={Eye?faEye:faEyeSlash} className='eye' onClick={ChangeVisibility}/>
                   </div>
                    <br/>
                    <label>Your UserName</label>
                    <br/>
                    <div className='inputBox'>
                    <img src="/Images/avatar1.png"/>
                        <input
                        type='text'
                        placeholder='Enter username'
                        onChange={HandleInput}
                        value={form.username}
                        name='username'
                        className='input'
                        />
                    </div>
                    <br/>
                    <legend>Address</legend>
                     <div className='inputBox'>
                     <input
                      type={'text'}
                      placeholder='Enter Address/City'
                      onChange={HandleInput}
                      value={form.address}
                      name='address'
                      className='input'
                     />
                     </div>
                    <button className='btn'>Create Account</button>
                    <p>Already have an Account?<i>Login</i></p>
                </form>
            </Register>
            {Visual?<LoginPad/>:''}
            </Box>
       </Form>
       </div>
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
 .video{
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    z-index:-1;
    position:absolute;
 }
 .center{
    box-shadow:5px 5px 12px #000;
    display:flex;
    justify-content:space-between;
    border-radius:10px;
    overflow:hidden;
    width:80%;
    top:50%;
    left:50%;
    position:relative;
    background-color:#fff;
    transform:translate(-50%,-50%);
 }
`
let Form = styled.div`
 padding:15px 10px;
 width:500px;
 height:550px;
 background-color:#fff;
 h4{
     text-align:center;
     strong{
         color:#f44336;
     }
 }
 .img{
     width:50px;
     left:45%;
     position:relative;
 }
`
let Button = styled.div`
display:flex;
justify-content:center;
align-items:center;
 span{
    box-shadow:5px 5px 12px #333;
    margin:0 2%;
    border-radius:30px;
    cursor:pointer;
    overflow:hidden;
    .btns{
        height:37px;
        width:200px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:relative;
        padding:3px 8px;
        background:#fff;
        font-size:19px;
        font-weight:500;
        overflow:hidden;
        h4{
            position:relative;
            z-index:2;
        }
        .color{
            height:44px;
            border-radius:20px;
            width:110px;
            left:0%;
            z-index:1;
            position:absolute;
            background:rgb(30, 102, 197);
            transition:0.5s;
         }
    }
 }
`
let Register = styled.div`
.buttons{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1% 0;
    button{
        margin:0 2%;
    }
}
.fbtn{
    background-color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    border:none;
    width:45px;
    border-radius:50%;
    height:45px;
    margin:1% 0;
    cursor:pointer;
    img{
        width:30px;
    }
}
.gbtn{
    cursor:pointer;
    background-color:#3b5998;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    border:none;
    width:45px;
    border-radius:50%;
    height:45px;
    margin:1% 0;
    img{
        width:30px;
    }
}
small{
    left:45%;
    position:relative;
}
h2{
    text-align:center;
}
 h5{
     font-weight:600;
     font-size:18px;
     text-align:center;
 }
 form{
    margin:2% 0;
    .btn{
        background-color:rgb(30, 102, 197);
        width:100%;
        height:45px;
        color:#fff;
        border-radius:8px;
        outline:none;
        border:none;
        cursor:pointer;
        margin:1% 0;
        img{
           width:25px;
        }
    }
     label{
         text-align:left;
         font-weight:600;
     }
     img{
        width:20px;
        height:20px;
     }
     .inputBox{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:95%;
        height:40px;
        border-radius:5px;
        color:#000;
        border:none;
        background:#f4f4f4;
        input{
            background:transparent;
            border:none;
            outline:none;
            padding: 0 15px;
        }
     }
     .password{
         display:flex;
         justify-content:space-between;
         align-items:center;
         width:95%;
         height:40px;
         border-radius:5px;
         color:#000;
         border:none;
         background:#f4f4f4;
         input{
             background:transparent;
             border:none;
             outline:none;
             padding: 0 15px;
         }
         .eye{
             cursor:pointer;
             margin:0 1%;
         }
     }
     .input{
      width:90%;
      height:40px;
      outline:none;
      padding:0 10px;
      margin:2% 0;
      border-radius:5px;
      color:#000;
      border:none;
      background:#f4f4f4;
  }
  .radios{
      display:flex;
  }
  p{
      text-align:center;
      small{
          color:#3b5998;
      }
  }
 }
`
let Box = styled.div`

`
let InviteSection = styled.div`
 background-image:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/Images/blog-5.jpg');
 background-position:center;
 background-size:cover;
 width:100%;
 flex-basis:44%;
 height:580px;
 color:#f44336;
 .textbox{
    top:50%;
    left:50%;
    position:relative;
    transform:translate(-50%,-50%);
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
 }
`