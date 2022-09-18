import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { SetBookings } from '../redux/reducers/reducerSlice'
import BookingDisplayComponent from './BookingDisplayComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSearch } from '@fortawesome/free-solid-svg-icons';

function TrainerbookingSection() {
    let{TrainerDetails,BookingsMade}=useSelector((state)=>state.gymRegucer);
    let[book,setBooked]=React.useState(false);
    let dispatch = useDispatch()
    let[Form,setForm]=React.useState({
        name:'',
        date:'',
        Age:null,
        telNumber:''
    })
    const HandleInput=(event)=>{
        setForm((prevForm)=>{
          return{
              ...prevForm,
              [event.target.name]:event.target.value
          }
        })
  }
    let[selection,setSelection] = React.useState({
        options:'',
        first:'Beginner',
        second:'Intermediate',
        third:'Advanced'
    })
    const Handleinput=(e)=>{
    setSelection((prevState)=>{
        return{
            ...prevState,
            [e.target.name]:e.target.value
        }
    })
    }
    let[savedSuccessfully,setSavedSuccessfully]=React.useState(false);
    const HandleForm=(e)=>{
        e.preventDefault()
        if(Form.name,Form.date,Form.Age){
           // console.log(Form,selection.options)
            dispatch(SetBookings({
                Name:Form.name,
                Age:Form.Age,
                Booked_Date:Form.date,
                Level:selection.options,
                PhoneNumber:Form.telNumber
            }))
            setBooked((prevForm)=>!prevForm)
            setSavedSuccessfully(true)
        }
    }
    useEffect(() => {
      let Timer = setTimeout(()=>{
        setSavedSuccessfully(false)
      },1500)
      return () => {
        clearInterval(Timer)
      }
    })
     let styles = {
        opacity:savedSuccessfully?1:0
     }  
  return (
    <Container>
      <div className='left__side'>
        <hr/>
      <form onSubmit={HandleForm}>
      <h2>Make a Booking</h2>
        <br/>
        <label>Enter Full Name</label>
           <small className='small'>*</small>
           <input
            type='text'
            placeholder='Enter Name'
            value={Form.name}
            name='name'
            onChange={HandleInput}
            />
            <br/>
            <label>Your Age</label>
            <small className='small'>*</small>
            <input
            type='number'
            placeholder='Your Age'
            value={Form.Age}
            name='Age'
            onChange={HandleInput}
            />
            <br/>
            <label>What is your Training Level?</label>
            <small className='small'>*</small>
            <select name='options' onChange={Handleinput}>
                 <option>[....Training Level....]</option>
                 <option value={selection.first}>Beginner</option>
                 <option value={selection.second}>Intermediate</option>
                 <option value={selection.third}>Advanced</option>
            </select>
            <br/>
            <label>Set A Date</label>
            <small className='small'>*</small>
            <input
            type={'date'}
            placeholder='Book date'
            value={Form.date}
            name='date'
            onChange={HandleInput}
            />
            <br/>
            <label>Phone Number</label>
            <input
             type='text'
             placeholder='Phone'
             value={Form.telNumber}
             name='telNumber'
             onChange={HandleInput}
            />
         <button>Submit</button>
       </form>
       <hr/>
       <small>@BEFIT Training Center||All rights Reserved</small>
      </div>
      <div className='right__side'>
       <div className='head'>
            <h3>Bookings</h3>
            <div className='saved' style={styles}>
                <FontAwesomeIcon icon={faCheck}/>
                <small>Booking Saved</small>
            </div>
       </div>
         {BookingsMade.length === 0?
         <div className='no__bookings'>
            <FontAwesomeIcon icon={faSearch} className='icons search'/>
             <p>No bookings Made</p>
         </div>:''}
         <div className='bookings'>
         {BookingsMade.map((book)=>{
            return(
                <BookingDisplayComponent
                  image = {TrainerDetails.Image}
                  Trainer = {TrainerDetails.TrainerName}
                  level = {TrainerDetails.TrainerLevel}
                  UserName = {book.Name}
                  Age = {book.Age}
                  Date={book.Booked_Date}
                  Trainee_Level={book.Level}
                  Tel={book.PhoneNumber}
                />
            )
         })}
         </div>
      </div>
    </Container>
  )
}

export default TrainerbookingSection
let Container=styled.div`
 background-color:#fff;
 height:100vh;
 width:100%;
 padding-top:100px;
 padding-left:50px;
 padding-right:50px;
 border-radius:8px;
 display:flex;
 justify-content:space-between;
 @media(max-width:600px){
   flex-direction:column;
   .left__side{
    flex-basis:100%;
   }
   .right__side{
    flex-basis:100%;
    .bookings{
      max-height:23vh;
      height:23vh;
      overflow-y:scroll;
    }
   }
 }
 .left__side{
    flex-basis:50%;
    small{
        color:grey;
    }
    form{
        margin:2% 0;
    }
    input{
        width:90%;
        height:40px;
        border-radius:5px;
        margin:1% 0;
        padding:0 10px;
        border:2px solid grey;
     }
     select{
        width:94%;
        height:45px;
        border-radius:5px;
        margin:2% 0;
        padding:0 10px;
        border:2px solid grey;
     }
     button{
        background-color:rgb(30, 102, 197);;
        padding:10px 35px;
        border-radius:10px;
        color:#fff;
        cursor:pointer;
        border:3px solid #000;
        outline:none;
     }
     label{
        font-size:14px;
        font-weight:bold;
     }
     .small{
        color:red;
     }
     .close{
        font-size:18px;
        left:95%;
        position:relative;
        cursor:pointer;
     }
 }
 .right__side{
    flex-basis:50%;
    .bookings{
        max-height:27vh;
        height:27vh;
        overflow-y:scroll;
    }
    .no__bookings{
        text-align:center;
        top:10%;
        left:50px;
        position:relative;
        .icons{
            font-size:40px;
        }
    }
    .head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .saved{
            background-color:green;
            width:40%;
            height:35px;
            border-radius:5px;
            color:#fff;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
 }
`