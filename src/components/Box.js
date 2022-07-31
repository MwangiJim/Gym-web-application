import { faCheck, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function Box(props) {
  return (
    <Container>
        <div className='line'>
           <FontAwesomeIcon icon={faCheckCircle} className='icon'/>
           <h3>{props.title}</h3>
        </div>
        <p>{props.text}</p>
    </Container>
  )
}

export default Box
let Container =styled.div`
 text-align:left;
 flex-basis:50%;
 .line{
     display:flex;
     text-align:left;
     align-items:center;
     justify-content:left;
     .icon{
         color:#f44336;
         font-size:20px;
         font-weight:700;
     }
     h3{
         color:#fff;
         margin:0 3%;
         font-weight:400;
         font-size:25px;
     }
 }
`