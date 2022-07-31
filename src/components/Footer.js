import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addPost } from '../redux/reducers/reducerSlice'
import FooterLink from './FooterLink'
import Star from './Star'

function Footer() {
  let dispatch = useDispatch()
    let[Form,setForm] = useState({
        input:'',
        occupation:'',
        checked:false
    })
    const HandleInput =(e)=>{
        const{name,value,checked,type} = e.target
       setForm((prevState)=>{
           return{
               ...prevState,
               [name]:type === 'checkbox'?checked:value
           }
       })
    }
    const HandleForm =()=>{
      if(Form.input){
        dispatch(addPost({
          Message:Form.input,
          Check:Form.checked,
          Occupation:Form.occupation
        }))
      }
    }
  return (
    <Container>
       <div className='footer__background'>
       </div>
       <FooterLink
        header='Quick Links'
        first='Home'
        second='Features'
        third='Pricing'
        fourth='Trainers'
        fifth='Virtual Workout'
        sixth='Join us'
       />
       <FooterLink
        header='Opening Hours'
        first='Monday:'
        Monday = '7:00am - 10:30pm' 
        second='Tuesday:'
        Tuesday = '7:00am - 10:30pm'
        third='Wednesday'
        Wednesday='7:00am - 10:30pm'
        fourth='Thursday'
        Thursday='7:00am - 10:30pm'
        fifth='Friday'
        Friday='7:00am - 10:30pm'
        sixth='Saturday'
        Saturday='7:00am - 10:30pm'
       />
       <div className='cta'>
           <h2>Leave a Comment</h2>
           <small>How was your Experience?</small>
           <br/>
           <input 
            type='text'
            placeholder='Type Your Testimonial Here'
            onChange={HandleInput}
            value={Form.input}
            name='input'
            className='input'
           />
           <br/>
           <small>Tell us about yourself</small>
           <br/>
           <input 
            type='text'
            placeholder='Your Occupation'
            onChange={HandleInput}
            value={Form.occupation}
            name='occupation'
            className='input'
           />
           <br/>
           <input
           type='checkbox'
           onChange={HandleInput}
           value={Form.checked}
           name='checked'
           />
           <label>Are The Gym Workouts Intense?</label>
           <br/>
           <button onClick={HandleForm}>Send Message</button>
       </div>
    </Container>
  )
}

export default Footer
let Container = styled.div`
  display:flex;
  justify-content:space-between;
  @media(max-width:600px){
    flex-direction:column;
    .cta{
      flex-basis:100%;
      .input{
        width:80%;
      }
    }
  }
  .footer__background{
      flex-basis:30%;
      background-image:url("/Images/blog-3.jpg");
      background-position:center;
      background-size:cover;
        width:100%;
        height:50vh;
  }
  .cta{
      text-align:left;
      flex-basis:25%;
      color:#fff;
      h2{
          margin-bottom:20px;
      }
      label{
        margin:2% 0;
      }
      small{
        color:gray;
        font-size:15px;
        margin-bottom:20px;
      }
     .input{
         width:250px;
         outline:none;
         border:none;
         background-color:#333;
         color:#fff;
         height:45px;
         padding:0 10px;
         margin:7px 0;
         ::placeholder{
           color:#fff;
         }
     }
     button{
         background-color:#f44336;
         color:#fff;
         padding:12px 38px;
         cursor:pointer;
         outline:none;
         border:none;
         border-radius:20px;
     }
  }
`
let Stars = styled.div`
display:flex;
justify-content:left;
align-items:center;
margin:2% 0;
`