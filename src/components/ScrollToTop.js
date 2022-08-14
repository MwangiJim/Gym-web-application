import React from 'react'
import styled from 'styled-components'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ScrollToTop = () => {
    const ScrollToTop=()=>{
        window.onscroll({
            top:0,
            behaviour:'smooth'
        })
    }
  return (
    <Container onClick={ScrollToTop}>
        <FontAwesomeIcon icon={faArrowAltCircleUp} className='to__top'/>
    </Container>
  )
}

export default ScrollToTop
let Container = styled.div`
 background-color:#f44336;
 padding:6px 9px;
 border-radius:15px;
 color:#fff;
 cursor:pointer;
 bottom:10px;
 right:10px;
 position:fixed;
 .to__top{
    font-size:16px;
 }
`