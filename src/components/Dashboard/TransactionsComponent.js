import React from 'react'
import styled from 'styled-components'

const TransactionsComponent = ({id,time,date,products,cost}) => {
  return (
    <Container>
        <div>{id}</div>
        <div>{id}</div>
        <div>{date} {time}</div>
        <div>{products}</div>
        <div>{cost}</div>
    </Container>
  )
}

export default TransactionsComponent
let Container = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
color:#fff;
background-color:#7571718f;
padding:18px 7px;
div{
  flex-basis:20%;
  color:#fff;
  font-size:12px;
}
cursor:pointer;
:hover{
  background-color:rgba(76,76,75,0.5);
}
:hover div{color:#fff;}
`