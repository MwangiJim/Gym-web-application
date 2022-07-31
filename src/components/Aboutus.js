import React, { useEffect } from 'react'
import styled from 'styled-components'
import Box from './Box'

function Aboutus() {
    let[Videos,setVideos] = React.useState([])
    //X-TheySaidSo-Api-Secret  
    //API_KEY=AIzaSyBN2eBT5AiZaiOXYUD7YAN0jPmZlGgA85Q
    useEffect(()=>{
       let FetchWorkoutVideos =async()=>{
           await fetch(' https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=workouts&key=AIzaSyAKk3p0zGEes4k0ar4RR5kFFllqCr-SVH0')
           .then((response)=>response.json())
           .then((data)=>{
               console.log(data)
               let RandomVideo = data.items[Math.floor(Math.random()*data.items.length-1)]
               setVideos(RandomVideo.id.videoId)
           })
        }
       FetchWorkoutVideos()
    },[])
   //console.log(Videos)
  return (
    <Container>
        <h2>About Us</h2>
       <Row>
       <LeftSide>
           <h1>Every Day is A chance To become Stronger And Better</h1>
           <p>Here at BEFIT,it is all about strength and commitment.<br/>
           Strength does not come from physical capacity. It comes from an indomitable will.
           For you to get Results you've never had You need to do things you've never done 
           before.And as Always,Once you start Exercising on A regular Basis,It becomes difficult
           to stop.
           To Inspire You Here are <strong>Workout Videos</strong> of Why you should Workout and its benefits to your
           physical and mental Capabilities
           </p>
           <Col>
              <Box
               title='Body And Mind'
               text='Once You Take Care of your Body You Take Care of Your Mind.Exercises keep your Mind Fresh at all times'
              />
              <Box
                title = 'Healthy Life'
                text = 'Exercises Keep Lifestyle Diseases Away.These Workouts burn excess Fat from your system flushing them out'
              />
           </Col>
           <Col>
              <Box
               title='Strategies'
               text='Take Each Part Of The Body as A requirement for performance in another Workout.Arms,Legs,Shoulder&Back,Abs and Chest.If Each are Worked out The strength of the core Increases'
              />
              <Box
                title = 'Workout'
                text = 'Workouts are classified into:Muscle Building,Endurance,Core Strengthening and Weight Loss Exercises'
              />
           </Col>
        </LeftSide>
        <RightSide>
            <i>Refresh for different videos</i>
        {/* <iframe 
         width="100%"
         height="400px"
         allowFullScreen={true}
         src={`https://www.youtube.com/embed/${Videos}`}>
        </iframe> */}
        {Videos?<iframe 
         title='workouts'
         width="100%"
         height="400px"
         allowFullScreen={true}
         src={`https://www.youtube.com/embed/${Videos}`}>
        </iframe>:<div className ='anime'>
        </div>}
        </RightSide>
       </Row>
    </Container>
  )
}

export default Aboutus
let Container = styled.div`
padding:60px;
h2{
    color:#f44336;
    text-align:center;
    display:flex;
    align-items:center;
    ::after{
        content:'';
        width:100%;
        height:2px;
        background-color:gray;
        display:block;
    }
    ::before{
     content:'';
     width:100%;
     height:2px;
     background-color:gray;
     display:block;
 }
}
`
let LeftSide = styled.div`
flex-basis:50%;
h1{
 color:#fff;
 font-weight:300;
}
p{
    color:grey;
    font-weight:300;
    font-size:17px;
    strong{
        color:#f44336;
    }
}
@media(max-width:600px){
    flex-basis:100%;
 }
`
let Row = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
@media(max-width:600px){
    flex-direction:column;
}
`
let Col =styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:3% 0;
 @media(max-width:600px){
    flex-direction:column;
 }
`
let RightSide = styled.div`
text-align:center;
i{
    color:#fff;
}
 width:100%;
 flex-basis:50%;
 @media(max-width:600px){
    flex-basis:100%;
 }
`