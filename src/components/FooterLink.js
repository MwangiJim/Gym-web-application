import React from 'react'
import styled from 'styled-components'

function FooterLink(props) {
  return (
    <Container>
        <h3>{props.header}</h3>
        <ul>
            <li><a href=''>{props.first}<small>{props.Monday}</small></a></li>
            <li><a href=''>{props.second}<small>{props.Tuesday}</small></a></li>
            <li><a href=''>{props.third}<small>{props.Wednesday}</small></a></li>
            <li><a href=''>{props.fourth}<small>{props.Thursday}</small></a></li>
            <li><a href=''>{props.fifth}<small>{props.Friday}</small></a></li>
            <li><a href=''>{props.sixth}<small>{props.Saturday}</small></a></li>
        </ul>
    </Container>
  )
}

export default FooterLink
let Container = styled.div`
 text-align:left;
 flex-basis:25%;
 @media(max-width:600px){
    flex-basis:100%;
    ul{
        text-align:center;
    }
 }
 h3{
     color:#fff;
     margin-left:1%;
 }
 ul{
     flex:1;
     margin:1% 0;
     text-align:left;
     li{
         list-style:none;
         padding:10px 12px;
         position:relative;
         a{
             color:gray;
             font-size:15px;
             text-decoration:none;
             small{
                 margin-left:1%;
                 font-size:15px;
                 color:#f44336;
             }
         }
     }
 }
`