import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setDaysSelected } from '../../redux/reducers/reducerSlice'

function DaySelector(props) {
  let[Form,setForm]=React.useState({
    checked:false
  })
  let dispatch = useDispatch()
  const HandleChecker=(event)=>{
    setForm((prevForm)=>{
      return{
        ...prevForm,
        [event.target.name]:event.target.value
      }
    })
    dispatch(setDaysSelected({
      DayPicked:props.day
    }))
  }
  return (
    <Input>
      <input
       type={'checkbox'}
       onChange={HandleChecker}
       name='checked'
       value={Form.checked}
      />
      <label>{props.day}</label>
    </Input>
  )
}

export default DaySelector
let Input = styled.div`
 margin:2% 0;
`