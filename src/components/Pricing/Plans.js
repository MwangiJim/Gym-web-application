import React from 'react'
import styled from 'styled-components'

const Plans = (props) => {
  return (
    <Container>
       <div className="left__side">
          <h2>Plan:<span>{props.Plan}</span></h2>
          <p>Bought by:{props.Name}</p>
          <small>Time Purchased:{props.time}</small>
          <br/>
          <small>Date Purchased:{props.date}</small>
       </div>
       <div className="right__side">
       </div>
    </Container>
  )
}

export default Plans
let Container = styled.div`
  background-color:#f4f4f4;
  cursor:pointer;
  border-radius:5px;
  box-shadow:2px 2px 3px #333;
  display:flex;
  justify-content:space-between;
  padding:10px 12px;
  margin:2% 0;
 .left__side{
    small{
        font-size:14px;
      }
 }
  h2{
    font-weight:400;
    span{
        font-size:16px;
        background-color:#000;
        width:57%;
        padding:4px 5px;
        border-radius:7px;
        color:#fff;
        display:block;
    }
  }
`