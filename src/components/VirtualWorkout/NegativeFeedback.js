import React from 'react'
import styled from 'styled-components'

function NegativeFeedback() {
     let[Hide,setHide]= React.useState(false)
    const closeHandler=()=>{
      setHide((prevState)=>!prevState)
    }
    let styles = {
        display:Hide?'none':'block'
    }
  return (
    <Container style={styles}>
         <div className='buttons'>
            <h3>What Makes You Feel Bad?</h3>
            <button className='btn'>Too Hard</button>
            <button className='btn'>Got Injured During Exercise</button>
            <button className='btn'>Don't Know How to do it.</button>
            <button className='close'onClick={closeHandler}>CLOSE</button>
         </div>
    </Container>
  )
}

export default NegativeFeedback
let Container = styled.div`
width:100%;
height:55vh;
z-index:6;
bottom:630px;
position:relative;
padding:5px;
background:radial-gradient(transparent,#fff);
.buttons{
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    background-color:transparent;
    width:100%;
    margin:2% 0;
    .btn{
        width:80%;
        height:35px;
        color:#000;
        border-radius:20px;
        cursor:pointer;
        background:#fff;
        outline:none;
        margin:1% 0;
        :focus{
          background-color:rgb(30, 102, 197);
          color:#fff;
        }
      }
      .close{
        background:transparent;
        outline:none;
        border:none;
        width:90%;
        height:35px;
        cursor:pointer;
        color:rgb(30, 102, 197);
        font-size:18px;
        font-weight:500;
      }
}
`