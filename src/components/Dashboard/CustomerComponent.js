import React from 'react'
import styled from 'styled-components'

const CustomerComponent = ({id,email,username,phonenumber,country,occupation,role}) => {
  return (
    <Container>
      <div>{id}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{phonenumber}</div>
      <div>{country}</div>
      <div>{occupation}</div>
      <div>{role}</div>
    </Container>
  )
}

export default CustomerComponent

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