import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faRetweet, faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import moment from 'moment'

const Comments = (props) => {
  let{DetailsName}=useSelector((state)=>state.gymRegucer);
  let received = {
    marginLeft:props.id === 2?'35px':''
  }
  return (
    <Container style={received}>
     <div className='User_box'>
       <span>{DetailsName.data.username.charAt(0)}</span>
       <div className='userdetails'>
         <p>{DetailsName.data.username}.</p>
         <small>{props.time}.</small>
         <small>{props.date}</small>
       </div>
     </div>
      <h5>{props.comment}</h5>
      {[...Array(5)].map((item,i)=>{
        let starrate = i+1;
        return(
          <FontAwesomeIcon icon={faStar}
           style={{color:starrate<=props.rate?'#ffc017':'#333'}}
          />
        )
      })}
      <div className='controls'>
        <FontAwesomeIcon icon={faReply} className='icons'/>
        <FontAwesomeIcon icon={faThumbsUp} className='icons'/>
        <FontAwesomeIcon icon={faThumbsDown} className='icons'/>
      </div>
    </Container>
  )
}

export default Comments
let Container = styled.div`
 width:100%;
 height:max-content;
 border-radius:10px;
 padding:1px;
 .controls{
   display:flex;
   justify-content:left;
   align-items:center;
   font-size:14px;
   margin:2% 0;
   .icons{
    cursor:pointer;
    margin:0 2%;
   }
 }
 .receiver{
  left:20px;
  position:relative;
 }
 .User_box{
  display:flex;
  justify-content:left;
  align-items:center;
  span{
    height:20px;
    width:20px;
    border-radius:7px;
    color:#fff;
    display:block;
    text-align:center;
    background-color:#f44336;
    padding:5px 6px;
    font-size:16px;
  }
  .userdetails{
    display:flex;
    justify-content:left;
    align-items:center;
    text-align:left;
  }
 }
 h5{
  margin-left:5%;
}
`