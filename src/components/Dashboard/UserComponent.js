import React from 'react'
import styled from 'styled-components'

const UserComponent = ({id,date,time,username,cost}) => {
  return (
    <Container>
      <div>{id}</div>
      <div>{id}</div>
      <div>{date},{time}</div>
      <div>{username}</div>
      <div>${cost}</div>
    </Container>
  )
}

export default UserComponent

let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:20px 10px;
 border-bottom:1px solid grey;
 div{
  flex-basis:40%;
  color:#fff;
  text-align:left;
  font-size:11px;
  font-weight:300;
 }
`