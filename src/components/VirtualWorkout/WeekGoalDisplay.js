import React from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'

function WeekGoalDisplay() {
    let[date,setDate]=React.useState(new Date())
    const HandleDate=(date)=>{
        setDate(date)
    }
  return (
    <Container>
          <Calendar
           onChange={HandleDate}
           value={date}
           className='react-calender'
          />
    </Container>
  )
}

export default WeekGoalDisplay
let Container = styled.div`
  width:100%;
  height:20vh;
  .react-calender{
    button{
      border:none;
      background:none;
      padding:10px;
      :focus{
        background-color:rgb(30, 102, 197);
      }
    }
  }
`