import React from 'react'
import styled from 'styled-components'
import PieChart from './PieChart'

function BreakDown() {
  return (
    <Container>
           <div className='left__top'>
              <h1>BREAKDOWN</h1>
              <p>Breakdown of sales</p>
              </div>
              <PieChart/>
    </Container>
  )
}

export default BreakDown
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