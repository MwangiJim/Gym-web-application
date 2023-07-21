import React from 'react'
import styled from 'styled-components'
import WorldMap from './WorldMap'

const Geography = () => {
  return (
    <Container>
        <div className='left__top'>
              <h1>GEOGRAPHY</h1>
              <p>Find where your customers are located.</p>
              </div>
              <WorldMap/>
    </Container>
  )
}

export default Geography
let Container = styled.div`
.left__top{
    text-align:left;
    color:#fff;
    margin:20px 0;
    p{
      color:gray;
      font-size:13px;
    }
  }
`