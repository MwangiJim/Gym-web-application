import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faBurger } from '@fortawesome/free-solid-svg-icons'

function DashboardColumns({icon,description,id,
  Da_handler,P_handler,T_handler,D_handler,M_handler,O_handler,C_handler,Br_handler}) {
  function handledisplay(){
    if(id === 1){
      Da_handler((prevState)=>!prevState)
    }
    if(id === 2){
      P_handler((prevState)=>!prevState)
    }
    if(id === 3){
      C_handler((prevState)=>!prevState)
    }
    if(id === 4){
      T_handler((prevState)=>!prevState)
    }
    if(id === 9){
      Br_handler((prevState)=>!prevState)
    }
    if(id === 6){
      O_handler((prevState)=>!prevState)
    }
    if(id === 7){
     D_handler((prevState)=>!prevState)
    }
    if(id === 8){
      M_handler((prevState)=>!prevState)
    }
  }
  return (
    <Container onClick={handledisplay}>
       <FontAwesomeIcon icon={icon} className='Icon'/>
       <h4>{description}</h4>
       <FontAwesomeIcon className='icon' style={{fontSize:"13px"}}icon={faAngleRight}/>
    </Container>
  )
}

export default DashboardColumns
let Container = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 padding:10px 25px;
 color:#fff;
 cursor:pointer;
 margin:2% 0;
 :hover .icon{
  opacity:1;
 }
 .Icon{
  flex:0.2;
 }
 h4{
    margin:0 5%;
    flex:0.8;
    font-size:16px;
    font-weight:300;
 }
 .icon{
  opacity:0;
 }
 :hover{
  background-color:gold;
  color:black
 }
`