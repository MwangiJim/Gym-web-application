import React from 'react'
import styled from 'styled-components'

function BookingDisplayComponent(props) {
  return (
    <Container>
       <div className='left__side'>
           {!props.image?<img src='/Images/avatar3.png'/>:<img src={props.image}/>}
           <h3>{props.Trainer}</h3>
           <h5>{props.level}</h5>
       </div>
       <div className='right__side'>
            <h3>{props.UserName}</h3>
            <h5>{props.Age}yrs</h5>
            <small>{props.Date}</small>
            <p>{props.Tel}</p>
            <br/>
            <small>Level of Endurance:<strong>{props.Trainee_Level}</strong></small>
       </div>
    </Container>
  )
}

export default BookingDisplayComponent
let Container=styled.div`
background-color:#f4f4f4;
padding:10px 5px;
border-radius:5px;
color:#000;
margin:1% 0;
display:flex;
justify-content:space-between;
  .left__side{
    flex-basis:40%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    text-align:center;
    img{
        width:50px;
        height:50px;
        border-radius:50%;
    }
    h3{
        font-size:20px;
        font-weight:300;
        font-family: 'Mingzat',sans-serif;
        color:purple;
    }
    h5{
      font-size:17px;
      font-weight:400;
    }
  }
  .right__side{
    flex-basis:54%;
    text-align:left;
    h2{
        font-size:20px;
        font-weight:300;
        font-family: 'Mingzat',sans-serif;
    }
    p{
        font-size:20px;
        font-family: 'Mingzat',sans-serif;
    }
    small{
        font-size:17px;
        font-weight:500;
        font-family: 'Smooch', cursive;
        color:purple;
    }
    h5{
      font-family:'Mingzat',sans-serif;
    }
  }
`