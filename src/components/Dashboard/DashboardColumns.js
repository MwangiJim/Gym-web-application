import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'

function DashboardColumns({icon,description}) {
  return (
    <Container>
       <FontAwesomeIcon icon={icon}/>
       <h4>{description}</h4>
    </Container>
  )
}

export default DashboardColumns
let Container = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 padding:10px 15px;
 color:#fff;
 cursor:pointer;
 margin:2% 0;
 h4{
    margin:0 2%;
    flex:0.8;
    font-size:18px;
    font-weight:300;
 }
`