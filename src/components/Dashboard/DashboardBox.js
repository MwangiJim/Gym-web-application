import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function DashboardBox({desc,price,iconshop,bool}) {
  return (
    <Container>
      <div className='box'>
      <h3>{desc}</h3>
      <h5>${price}</h5>
      <p><FontAwesomeIcon icon={bool?faArrowUp:faArrowDown} className='up' style={{backgroundColor:bool?'green':'red'}}/> From Yesterday</p>
      </div>
      <FontAwesomeIcon icon={iconshop} className='shop'/>
    </Container>
  )
}

export default DashboardBox
let Container = styled.div`
 flex-basis:32%;
 background-color:#fff;
 border-radius:10px;
 box-shadow:3px 3px 6px #333;
 padding:10px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:0 1%;
 height:120px;
 .box{
    text-align:left;
    h3{
        font-size:18px;
        font-weight:300;
    }
    h5{
        font-size:35px;
        font-weight:500;
    }
    p{
        .up{
            padding:5px;
            border-radius:6px;
            color:#fff;
            font-size:11px;
        }
    }
 }
 .shop{
    font-weight:bold;
    font-size:18px;
    background-color:#ffc017;
    color:yellow;
    border-radius:10px;
    padding:5px;
 }
`