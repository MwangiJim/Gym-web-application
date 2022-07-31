import React from 'react'
import styled from 'styled-components'

function GoogleMap() {
  return (
    <Container>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22565.234676504006!2d36.94860189502567!3d-1.1550479690419981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1657894676988!5m2!1sen!2ske" width="400" height="350" style={{border:'none',borderRadius:'10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Container>
  )
}

export default GoogleMap

let Container = styled.div`
 width:200px;
 height:30vh;
 border-radius:7px;
 top:80px;
 left:70%;
 position:absolute;
`