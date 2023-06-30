import React, { useState } from 'react'
import styled from 'styled-components'
import DailyChart from './DailyChart'

const Daily = () => {
  return (
    <Container>
       <div className='left__top'>
              <h1>DAILY SALES</h1>
              <p>Chart of daily sales</p>
              </div>
              <DailyChart/>
    </Container>
  )
}

export default Daily
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