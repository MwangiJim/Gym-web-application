import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoltLightning, faCalendarAlt, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'

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
    let[Rating,setRating]=React.useState(null);
    console.log(Rating)
  return (
    <Container>
       <div className='left'>
            <h3><img src="/Images/name.png"/>{props.name}</h3>
            <p><FontAwesomeIcon icon={faCalendarAlt} className='icons'/>{props.date}</p>
            <small><FontAwesomeIcon icon={faPhone} className='icons'/>{props.phone}</small>
            <p><img src='/Images/mail.png'/>{props.email}</p>
       </div>
        <div className='right'>
            <small><img src="/Images/age.png"/>{props.age} years</small>
            <h5><FontAwesomeIcon icon={faBoltLightning} className='icons'/>{props.level}</h5>
            <div className='comment'>
                <input
                 type={'text'}
                 placeholder='Comment on Trainee..'
                 value={Input.comment}
                 name="comment"
                 onChange={HandleInput}
                />
                <button>Comment</button>
            </div>
            <small>Rate your trainee progress</small>
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
            <small>{Rating}/5</small>
           </div>
        </div>
    </Container>
  )
}

export default BookingsSection

let Container = styled.div`
 width:96%;
 border-radius:10px;
 height:max-content;
 padding:20px 12px;
 display:flex;
 justify-content:space-between;
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
        img{
            width:20px;
            height:20px;
        }
    }
    small{
        margin:2% 0;
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