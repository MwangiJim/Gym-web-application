import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux'
import { Fade } from 'react-reveal'

function Shopping() {
    let{ EcommerceStore} = useSelector((state)=>state.gymRegucer)
   // console.log(EcommerceStore)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <Container>
        <Section {...settings}>
            <Wrap>
                <img src='/Images/banner-bg.jpg'/>
                  <Fade center>
                    <h2>Set Up Your BackYard For Fitness Routines</h2>
               
                  </Fade>
                <div className='darkmode'>

                </div>
            </Wrap>
            <Wrap>
                <img src='/Images/banner2.jpg'/>
              <Fade center>
              <h2>Purchase The Gym Equipment You Need Here</h2>
              </Fade>
            </Wrap>
            <Wrap>
                <img src='/Images/banner3.jpg'/>
               <Fade center>
               <h2>Your Home is your Equity.Do not Leave it Half Finished,Include Gym Equipment For Regular Training</h2>
               </Fade>
            </Wrap>
            <Wrap>
                <img src='/Images/ecommerce banner.jpg'/>
               <Fade center>
               <h2>Purchase Highly Reliable Equipment to Get You Started.</h2>
               </Fade>
            </Wrap>
        </Section>
            <h3>Featured Products</h3>
            <Row>
                <Cart
                  id='13'
                 image='/Images/Erbessd Balancing Machine.png'
                 description='Erbessd Balancing Machine'
                 price={90000}
                />
                <Cart
                  id='14'
                 image ='/Images/BenchPress.png'
                 description='BenchPress For Lifting Weights'
                 price = {45000}
                />
                <Cart
                  id='15'
                 image = '/Images/ChestWorkout Machine.png'
                 description = 'Weight Holder'
                 price={130000}
                />
            </Row>
            <Row>
                <Cart
                  id='17'
                 image='/Images/dumbell1.png'
                 description='5kg Dumbell for Arm and Shoulder Workout'
                 price={5000}
                />
                <Cart
                  id='18'
                 image='/Images/dumbell2.png'
                 description='5kg Dumbell for Arm and Shoulder Workout'
                 price={15500}
                />
                <Cart
                 id='2003'
                 image='/Images/ExerciseMat.jfif'
                 description='Exercise Mat For Workouts'
                 price={2800}
                />
            </Row>
            <Row>
                <Cart
                    id='19'
                   image='/Images/elliptical trainer.png'
                  description='Elliptical Trainer'
                  price={100000}
                />
                <Cart
                  id='67'
                 image='/Images/functionsl trainer.png'
                 description='Functions Trainer'
                 price={99000}
                />
            </Row>
            <Row>
                <Cart
                  id='20'
                 image='/Images/IndoorRower.png'
                 description='Indoor Rower'
                 price={50000}
                />
                <Cart
                id='21'
                 image ='/Images/Indorr Cycling.png'
                  description='M5 FITNESS Machine'
                  price={105000}
                />
                <Cart
                  id='35'
                 image='/Images/Inspire.png'
                 description='Inspire Cycling Machine'
                 price={91000}
                />
            </Row>
            <Row>
                <Cart

  id='1375'image='/Images/KettleBell.png'
                  description='KettleBell'
                  price={7500}
                />
                <Cart
                  id='1305'
                 image='/Images/LightBra.png'
                 description='Exercise Bra For Women'
                 price={1000}
                />
                <Cart
                  id='1395'
                 image='/Images/Matrix Power Drive.png'
                 description='Matrix Power Drive'
                 price={112000}
                />
                <Cart
                  id='1359'
                 image='/Images/NikeShoe.png'
                 description = 'Nike Shoes For Training'
                 price={3500}
                />
            </Row>
            <Row>
              <Cart
                id='22'
                image='/Images/FreeMotionEpicShoulderPress.png'
                description='Free Motion Epic Shoulder Press'
                price={135000}
                />
                 <Cart
                   id='1351'
                 image='/Images/ShoulderExerciseMachine.png'
                 description='Shoulder Training Exercise Machine'
                 price={145000}
                />
            </Row>
            <Row>
                <Cart
                  id='23'
                image='/Images/nikeShort.png'
                  description='NikeShorts'
                  price={300}
                />
                <Cart
                  id='24'
                 image='/Images/OrangeBra.png'
                 description='ThunderBra Lightweight For Women'
                 price={1300}
                />
                <Cart
                  id='25'
                 image = '/Images/Proform.png'
                 description='Proform Cycling Machine'
                 price={89000}
                />
            </Row>
            <Row>
                <Cart
                  id='28'
                 image='/Images/RubberShoe.png'
                 description='Rubber Shoes For Gentle Feet'
                 price={900}
                />
                <Cart
                  id='29'
                 image='/Images/Shoewear.png'
                 description='Nike Shoes For Running'
                 price={1000}
                />
                <Cart
                  id='30'
                 image='/Images/Short.png'
                 description='Blue Shorts'
                 price={350}
                />
            </Row>
            <Row>
                <Cart
                  id='31'
                 image='/Images/sneaker.png'
                 description='Sneakers'
                 price={2500}
                />
                <Cart
                  id='32'
                 image='/Images/TrackGreen.png'
                 description='Green Track Suit'
                 price={800}
                />
                <Cart
                  id='33'
                 image='/Images/Tracksuit.png'
                 description='Black Striped TrackSuit'
                 price={750}
                />
                <Cart
                  id='34'
                 image='/Images/traed2.png'
                 description='Epilliptic Training Machine'
                 price={65000}
                />
            </Row>
            <Row>
                <Cart
                  id='36'
                 image='/Images/treadmill.png'
                 description='CYBEX Treadmill'
                 price={150000}
                />
                <Cart
                  id='38'
                 image='/Images/treadmill1.png'
                 description='ELITE Treadmill'
                 price={178000}
                />
                 <Cart
                  id='135'
                 image='/Images/InclinechestPressMachine.png'
                 description='Incline Chest Press Machine'
                 price={75999}
                />
            </Row>
    </Container>
  )
}

export default Shopping
let Container = styled.div`
background-color:#fff;
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("/Images/ecommerce banner.jpg");
    background-position:center;
    background-size:cover;
    width:100%;
    height:90vh;
    .textbox{
        left:90px;
        position:relative;
       color:#fff;
       h2{
           font-size:45px;
           font-weight:400;
       }
       p{
           font-size:18px;
           width:90%;
           font-weight:300;
       }
       .arrow{
        color:#fff;
        font-size:25px;
        animation:jump 1s linear infinite;
        top:200px;
        left:50%;
        position:relative;
    }
    @keyframes jump{
        100%{
            transform:translateY(-20px);
            opacity:0.1;
        }
    }
   }
}
h3{
    text-align:center;
    font-size:35px;
    font-weight:400;
    margin-top:5%;
}
`
let Row = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:1% 1%;
 @media(max-width:600px){
  flex-direction:column;
 }
`
let Section = styled(Slider)`
 width:100%;
 height:80vh;
 marging-top:40px;
 overflow:hidden;
 @media(max-width:600px){
  margin-bottom:-30%;
 }
`
let Wrap = styled.div`
width:90%;
height:90vh;
 img{
     width:1500px;
     height:500px;
     object-fit:cover;
 }
 .darkmode{
     width:100%;
     height:500px;
     background:linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4));
     top:0;
     left:0;
     position:absolute;
 }
 h2{
     color:#fff;
     bottom:200px;
     position:relative;
     z-index:5;
     left:100px;
     font-size:30px;
     font-weight:300;
     width:70%;
 }
`