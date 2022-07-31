import React from 'react'
import styled from 'styled-components'

function GymFeature(props) {
  return (
    <Container>
        <img src={props.icon}/>
        <h4>{props.Text}</h4>
        <p>{props.description}</p>
        <button>Read More</button>
    </Container>
  )
}

export default GymFeature

let Container = styled.div`
background-color:#333;
flex-basis:33.3%;
padding:60px 0px;
text-align:center;
p{
    color:#f4f4f4;
}
h4{
    color:#f44336;
    margin:13px 0;
}
img{
    width:80px;
    filter:invert(1);
}
button{
    padding:12px 40px;
    background-color:#f44336;
    color:#fff;
    outline:none;
    border:none;
    cursor:pointer;
    border-radius:5px;
}
@media(max-width:600px){
    flex-basis:100%;
}
`