import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function Options(props) {
  return (
    <Container onClick={props.ShowOptionsHandler}>
        <FontAwesomeIcon icon={props.icontype} className='icon'/>
        <h4>{props.text}</h4>
    </Container>
  )
}

export default Options
let Container = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 padding:15px 15px;
 cursor:pointer;
 margin:2% 0;
 :hover{
    background-color:#f4f4f4;
 }
 .icon{
     color:grey;
     margin:0 2%;
     font-size:20px;
     flex-basis:10%;
 }
 h4{
     font-size:17px;
     font-weight:300;
 }
`