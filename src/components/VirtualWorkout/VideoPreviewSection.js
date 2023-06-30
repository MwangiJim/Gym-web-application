import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function VideoPreviewSection(props) {
    let[video,setVideo]=React.useState(false)
    const HideVideo=()=>{
      setVideo((prevState)=>!prevState)
    }
    let vidstyles = {
        display:video?'none':'false'
    }
  return (
    <Container style={vidstyles}>
        <FontAwesomeIcon icon={faArrowLeft} className='arrow__back' onClick={HideVideo}/>
        <iframe 
        title='Exercise Video'
        src={`https://www.youtube.com/embed/${props.vid_id}`}
         width='100%'
         height= '280px'
         allowFullScreen
        ></iframe>
    </Container>
  )
}

export default VideoPreviewSection
let Container = styled.div`
  height:92vh;
  width:97.5%;
  background-color:rgb(30, 102, 197);
  top:0px;
  z-index:7;
  padding:10px;
  border-radius:7px;
  position:absolute;
  .arrow__back{
    color:#fff;
    cursor:pointer;
  }
  iframe{
    border-radius:6px;
    outline:none;
    margin-top:5%;
  }
`