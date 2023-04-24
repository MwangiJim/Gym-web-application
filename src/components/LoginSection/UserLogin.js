import React from 'react'
import styled from 'styled-components'
import { db } from '../../firebase'
import{createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, sendEmailVerification,signInWithPopup, updateProfile} from 'firebase/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faE, faEye, faEyeSlash, faPerson,faMailBulk, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
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
    const HandleForm=async(e)=>{
        e.preventDefault()
        await fetch('http://localhost:8080/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
               email:form.email,
               username:form.username,
               password:form.password
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
       <div className='center'>
       <InviteSection>
          <div className='textbox'>
          <h1>{Visual?'Hello,Friend':'Welcome Back'}</h1>
            <p>{Visual?'Login to continue with your Journey':'Enter Your Personal Details to Become part of us'}</p>
          </div>
        </InviteSection>
       <Form>
         <h4>BE<strong>FIT</strong></h4>
          <Button>
            <span onClick={ChangeStatus}>
               <div className='btns'>
                   <h4 style={H4Styles}>Sign Up</h4>
                   <h4 style={h4Styles}>Sign In</h4>
                   <div className='color' style={lineStyles} >

                   </div> 
               </div>
            </span>
          </Button>
            <Box>
            <Register style={styles}>
                {Error?<div className="error">
                        <FontAwesomeIcon icon={faTriangleExclamation}/>
                        <p>{Error}</p>
                    </div>:''}
                <form onSubmit={HandleForm}>
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
                    <label>Address</label>
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
                     <p className='tag'>Privacy.Terms.About</p>
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
    width:90%;
    top:50%;
    left:50%;
    position:relative;
    background: #2a2e2a;
    transform:translate(-50%,-50%);
 }
`
let Form = styled.div`
 padding:15px 10px;
 width:500px;
 height:570px;
 flex-basis:35%;
 color:#fff;
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
    width:300px;
    .btns{
        display:flex;
        padding:3px 8px;
        justify-content:space-between;
        align-items:center;
        font-size:19px;
        font-weight:500;
        position:relative;
        cursor:pointer;
        h4{
            z-index:2;
            font-weight:300;
        }
        .color{
            height:2px;
            border-radius:5px;
            width:110px;
            left:0%;
            bottom:-30%;
            position:absolute;
            background-color:#fff;
            transition:0.5s;
         }
    }
 }
`
let Register = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
.buttons{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:1% 0;
    button{
        margin:0 2%;
    }
}
.gbtn{
    cursor:pointer;
    background-color:#13d4c4;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
    border:2px solid #000;
    width:200px;
    border-radius:20px;
    height:35px;
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
     font-weight:400;
     font-size:17px;
     text-align:center;
 }
 .error{
    padding:8px 12px;
    border-radius:8px;
    border:2px solid #f44336;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#f44336;
    position:relative;
    top:30px;
}
 form{
    margin:8% 13%;
    .tag{
        font-weight:300;
        font-size:13px;
        margin-top:26px;
    }
    h6{
        position:relative;
        font-weight:300;
        width:80%;
        display:flex;
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
    .btn{
        background-color:#13d4c4;
        width:50%;
        height:35px;
        color:#fff;
        border-radius:25px;
        outline:none;
        border:2px solid #000;
        cursor:pointer;
        margin:2% 25%;
        text-transform:uppercase;
        img{
           width:25px;
        }
    }
     label{
         text-align:left;
         font-weight:300;
         font-size:12px;
         color:#25bd25;
         position:relative;
         align-items:start;
     }
     img{
        width:20px;
        height:20px;
     }
     .inputBox{
        display:flex;
        justify-content:left;
        align-items:center;
        width:90%;
        height:40px;
        color:#fff;
        border:none;
        background:none;
        border-bottom:2px solid gray;
        input{
            background:none;
            border:none;
            outline:none;
            padding: 0 15px;
            ::placeholder{
                color:#fff;
             }
        }
     }
     .password{
         display:flex;
         justify-content:left;
         align-items:center;
         width:90%;
         height:40px;
         color:#fff;
         border-bottom:2px solid gray;
         background:none;
         input{
            height:40px;
             width:600px;
             border:none;
             outline:none;
             background:transparent;
             padding: 0 15px;
             ::placeholder{
                color:#fff;
             }
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
      margin:1% 0;
      color:#fff;
      border:none;
      ::placeholder{
        color:#fff;
     }
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
 flex-basis:65%;
 height:600px;
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