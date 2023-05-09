import React from 'react'
import styled from 'styled-components'

function Products({img,desc,price}) {
  return (
    <Container>
       <div className='left___side'>
         <img src={img}/>
         <p>{desc}</p>
       </div>
       <h4>${price}</h4>
    </Container>
  )
}

export default Products

let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 img{
    width:45px;
    height:45px;
    border-radius:15px;
 }
 .left___side{
    display:flex;
    justify-content:space-between;
    align-items:center;
 }
 h4{
    text-align:left;
 }
`