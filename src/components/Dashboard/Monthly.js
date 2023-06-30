import React from 'react'
import styled from 'styled-components'
import MonthlyChart from './MonthlyChart'

const Monthly = () => {
  return (
    <Container>
          <div className='left__top'>
              <h1>MONTHLY SALES</h1>
              <p>Chart of monthly sales</p>
              </div>
              <MonthlyChart/>
    </Container>
  )
}

export default Monthly
let Container = styled.div`
flex-basis:83%;
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