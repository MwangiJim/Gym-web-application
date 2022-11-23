import React,{useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faCalendarAlt, faPhone, faStar ,faMessage} from '@fortawesome/free-solid-svg-icons'

const BookingsSection = (props) => {
    let[Input,setInput]=React.useState({
        comment:""
    })
    const HandleInput=(e)=>{
        setInput((prevInput)=>{
            return{
                ...prevInput,
                [e.target.name]:e.target.value
            }
        })
    }
    let[TRAINER,setTrainer] = React.useState([])
    const membercommentsUrl = 'http://localhost:8080/Membercomments'
    const TrainercommentsUrl = 'http://localhost:8080/Trainercomments'
    useEffect(()=>{
        fetch('http://localhost:8080/newTrainer')
        .then((res)=>res.json())
        .then((data)=>{
            let trainer = data.message.map((item)=>{
                return(
                    {
                        name:item.Username,
                        email:item.Email
                    }
                )
            })
            setTrainer(trainer)
        })
    })
    const HandleForm=async(e)=>{
        e.preventDefault();
          !TRAINER?await fetch(TrainercommentsUrl,{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                date:new Date().toDateString(),
                time:new Date().toLocaleTimeString(),
                comment:Input.comment,
                rate:Rating
            })
          }):await fetch(membercommentsUrl,{
            method:'POST',
            headers:{"Content-Type":'application/json'},
            body:JSON.stringify({
                date:new Date().toDateString(),
                time:new Date().toLocaleTimeString(),
                comment:Input.comment,
                rate:Rating
            })
          })
    }
    let[Rating,setRating]=React.useState(null);
    //console.log(Rating)
   // console.log(props.name)
  return (
    <Container>
       <div className='left'>
            <h3><img src="/Images/name.png"/>{props.name}</h3>
            {props.location?<small><img src="/Images/location.png"/>{props.location}</small>:<p><FontAwesomeIcon icon={faCalendarAlt} className='icons'/>{props.date}</p>}
            <small><FontAwesomeIcon icon={faPhone} className='icons'/>{props.phone}</small>
            <p><img src='/Images/mail.png'/>{props.email}</p>
       </div>
        <div className='right'>
            <small><img src="/Images/age.png"/>{props.age} years</small>
            <h5><FontAwesomeIcon icon={faBoltLightning} className='icons'/>{props.level}</h5>
            <div className='comment'>
                <input
                 type={'text'}
                 placeholder={`Comment on ${props.data?'Trainer':`${props.name}`}..`}
                 value={Input.comment}
                 name="comment"
                 onChange={HandleInput}
                />
                <button onClick={HandleForm}>Comment</button>
            </div>
            <small>Rate your {props.data?`Trainer ${props.name}`:`Trainee Progress`}</small>
           <div className='stars'>
           {[...Array(5)].map((item,i)=>{
            let starRate = i+1;
                return(
                    <FontAwesomeIcon 
                    icon={faStar} 
                    className='star'
                    onClick={()=>{
                        setRating(starRate)
                    }}
                    style={{color:starRate<=Rating?"#ffc017":"#333"}}
                    />
                )
            })}
            <small>{!Rating?0:Rating}/5</small>
           </div>
        </div>
    </Container>
  )
}

export default BookingsSection

let Container = styled.div`
 display:flex;
 justify-content:space-between;
 width:96%;
 border-radius:10px;
 height:max-content;
 padding:20px 12px;
 box-shadow:3px 3px 7px #333;
 .icons{
    margin-right:1%;
 }
 img{
    margin-right:1%;
 }
 .left{
    flex-basis:45%;
    h3{
        font-size:19px;
        font-weight:300;
        display:flex;
        justify-content:left;
        align-items:center;
        margin:1% 0;
        img{
            width:20px;
            height:20px;
        }
    }
    p{
        margin:4% 0;
        display:flex;
        align-items:center;
        img{
            width:20px;
            height:20px;
        }
    }
    small{
        margin:2% 0;
        display:flex;
        img{
            width:20px;
            height:20px;
        }
    }
 }
 .right{
    flex-basis:48%;
    .stars{
        display:flex;
        justify-content:left;
        align-items:center;
        .star{
            color:#gray;
            cursor:pointer;
        }
        small{
            font-size:16px;
            font-weight:300;
            background-color:#ffc017;
            padding: 3px 12px;
            border-radius:20px;
            color:#333;
        }
    }
    h5{
        margin:1% 0;
    }
    small{
        display:flex;
        justify-content:left;
        align-items:center;
        img{
            width:20px;
            height:20px;
        }
    }
    .comment{
        background:#f4f4f4;
        width:100%;
        height:35px;
        border-radius:7px;
        box-shadow:3px 3px 8px #333;
        display:flex;
        justify-content:space-between;
        align-items:center;
        overflow:hidden;
        margin:2% 0;
        input{
            width:200px;
            height:35px;
            outline:none;
            border:none;
            background:transparent;
            padding:0 10px;
        }
        button{
            padding:10px 20px;
            background-color:#ffc017;
            border-radius:7px;
            color:#333;
            outline:none;
            border:none;
            cursor:pointer;
        }
    }
 }
`