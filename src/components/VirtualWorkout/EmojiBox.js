import { faSadCry } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function EmojiBox({emoji,text}) {
    let [State,setState]=React.useState(false);
    function ChangeFeedback(){
      setState((prevState)=>!prevState)
    }
  return (
    <Container onClick={ChangeFeedback}>
        <FontAwesomeIcon icon={emoji} className='emoji' style={{color:State?"#ffc017":"grey"}}/>
        <h4 style={{color:State?"#000":"grey"}}>{text}</h4>
    </Container>
  )
}

export default EmojiBox
let Container = styled.div`
 flex-basis:33%;
 padding:5px;
 display:flex;
 cursor:pointer;
 justify-content:space-between;
 align-items:center;
 flex-direction:column;
 .emoji{
    font-size:30px;
    color:gray;
 }
 h4{
    color:gray;
 }
`