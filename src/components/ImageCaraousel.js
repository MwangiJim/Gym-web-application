import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BookingDisplay from './BookingDisplay'
import data from './Data/ImageFiles'
import { Fade,Zoom,Flip } from 'react-reveal'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };

function ImageCaraousel() {
   let[ImageIdx,setImageIdx]=React.useState(0)
   // useEffect(()=>{
   //    setInterval(()=>{
   //      setImageIdx((prevIdx)=>prevIdx+1)
   //    },15000)
   // },[])
  return (
    <Container>
      <div className='row'>
      <LeftBox>
       <h1>Step Up Your <strong>Fitness</strong> With Us</h1>
           <p>Build your Body and Fitness With Professional Touch for both men and Women.Get in that summer shape body by
            getting a plan to follow and instructors to guide you everyday.
           </p>
           <button>Get Started</button>
           <div className='display'>
             <div>
               <h3>+ 10</h3>
               <h4>Years of Experience</h4>
             </div>
             <div>
               <h3>+20</h3>
               <h4>Fitness Experts</h4>
             </div>
             <div>
               <h3>+2k</h3>
               <h4>Happy Customers</h4>
             </div>
           </div>
       </LeftBox>
    <RightBox>
    {data.map((image,idx)=>{
            return(
               <div className={idx === ImageIdx?'active':'inactive'}>
                  <img src={image.imgpath}/>
               </div>
            )
         })}
         <div className='dots'>
            {data.map((dot,i)=>{
               return(
                  <span onClick={()=>setImageIdx(i)} style={{backgroundColor:i === ImageIdx?'red':'#fff'}}></span>
               )
            })}
         </div>
    </RightBox>
      </div>
    </Container>
  )
}

export default ImageCaraousel
let Container = styled.div`
background-color:#000;
.row{
   display:flex;
   justify-content:space-between;
   align-items:center;
   padding:0px 40px;
   margin:10% 0 0 0;
}
`
let LeftBox = styled.div`
color:#fff;
margin-bottom:30px;
.display{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-top:3%;
  div{
     display:block;
     text-align:left;
     flex:0.3;
     h3{
        font-family:'Cookie',cursive;
        color:#f44336;
     }
  }
}
h1{
    font-size:70px;
    font-weight:400;
   strong{
    color:red;
    font-weight:400;
    font-family:'Cookie',cursive;
   }
}
h3{
    font-weight:400;
    font-size:35px;
    line-height:55px;
}
p{
  font-family: Arial, Helvetica, sans-serif;
  font-size:16px;
  margin:12px 0 20px;
  line-height:20px;
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
`
let RightBox = styled.div`
   img{
    width:550px;
    height:400px;
    border-radius:10px;
    object-fit:cover;
   }
   .dots{
    display:flex;
    justify-content:center;
    align-items:center;
    margin:2% 10%;
    span{
       height:15px;
       width:15px;
       margin:0 2px;
       display:block;
       border-radius:50%;
       cursor:pointer;
       background-color:#fff;
      }
   }
`