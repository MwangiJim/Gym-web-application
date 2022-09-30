import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BookingDisplay from './BookingDisplay'
import data from './Data/ImageFiles'

function Slider() {
   let[ImageIndex,setImageIndex] = React.useState(0);
   
   const MoveLeft=()=>{
      if(ImageIndex > 0){
          setImageIndex((prevIndex)=>prevIndex-1)
      }
      else{
          setImageIndex(0)
      }
   }
   const MoveRight=()=>{
       if(ImageIndex<data.length-1){
           setImageIndex((nextindex)=>nextindex+1)
       }
       else{
           setImageIndex(0)
       }
   }
  return (
    <Container>
      {data.map((image,index)=>{
          return(
               <div className={ImageIndex === index?'active':'inactive'} key={image.id}>
                  <img src={image.imgpath}/>
               </div>
          )
      })}
      <div className='overlay_red'>
          
      </div>
      <div className='arrows'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrow' onClick={MoveLeft}/>
          <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrow' onClick={MoveRight}/>
      </div>
       <div className='textbox'>
           <h3>STEP UP YOUR</h3>
           <h1><strong>FITNESS</strong> WITH US</h1>
           <p>Build your Body and Fitness With Professional Touch</p>
           <button>Get Started</button>
       </div>
    </Container>
  )
}

export default Slider
let Container = styled.div`
width:100%;
height:100vh;
img{
    width:100%;
    height:100vh;
    object-fit:cover;
    transition:1s ease-in ease-out;
}
.textbox{
    position:absolute;
    bottom:20%;
    left:50%;
    transform:translate(-50%,-50%);
    color:#fff;
    text-align:center;
    h1{
        font-size:70px;
        font-weight:400;
       strong{
        color:red;
        font-weight:400;
       }
    }
    h3{
        font-weight:400;
        font-size:35px;
        line-height:55px;
    }
    button{
        background-color:transparent;
        color:#fff;
        outline:none;
        border:3px solid #f44336;
        cursor:pointer;
        padding:10px 40px;
        border-radius:20px;
    }
}
.arrows{
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:25px;
    color:#fff;
    bottom:340px;
    position:relative;
    margin:0 3%;
    .arrow{
        cursor:pointer;
    }
}
.overlay_red{
    background:radial-gradient(rgba(146, 6, 6, 0.63),transparent);
    top:0;
    left:0;
    right:0;
    bottom:0;
    position:absolute;
}
`