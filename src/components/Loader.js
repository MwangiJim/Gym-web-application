import React from 'react'
import styled from 'styled-components'

function Loader() {
    let [View,setView] = React.useState(false);
    React.useEffect(()=>{
       setTimeout(()=>{
           setView(true)
           window.location.assign('/')
       },5000)
    },[])
    let styles = {
        display:View?'none':'block'
    }
  return (
    <Container style={styles}>
        <div className="box">
            <h3>Redirecting...</h3>
            <img src="/WorkoutGifs/loader.gif"/>
        </div>
    </Container>
  )
}

export default Loader
let Container = styled.div`
 width:100%;
 height:100vh;
 background-color:#f4f4f4;
 z-index:100;
 top:0;
 left:0;
 position:absolute;
 .box{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    position:relative;
    h3{
        font-size:25px;
        font-weight:400;
    }
    img{
        width:30%;
        object-fit:cover;
    }
 }
`