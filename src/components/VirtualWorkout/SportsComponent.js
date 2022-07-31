import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

function SportsComponent(props) {
  return (
    <Container>
        <img src={props.image}/>
        <InformationSection>
            <small>By {props.author}|{moment(props.time).fromNow()}</small>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <h6>Trending on #{props.publisher}</h6>
            <br/>
            <a href={props.linktoPost}>Read More</a>
        </InformationSection>
    </Container>
  )
}

export default SportsComponent

let Container = styled.div`
border-radius:7px;
box-shadow:0px 0px 5px 5px #333;
margin:4% 0;
 img{
     width:100%;
     height:20vh;
     border-radius:7px;
     object-fit:cover;
 }
 height:max-content;
`
let InformationSection = styled.div`
 text-align:left;
 a{
     background-color:#000;
     color:#fff;
     border:none;
     border-radius:20px;
     padding:10px 25px;
     text-decoration:none;
     bottom:8px;
     position:relative;
     left:60%;
 }
 p{
     font-size:14px;
     text-overflow:ellipsis;
   overflow:hidden;
   width:320px;
   white-space:nowrap;
 }
 small{
     color: rgb(30, 102, 197);
 }
 h3{
     font-size:16px;
     font-weight:600;
 }
`