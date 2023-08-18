import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { DeletePlans } from '../../redux/reducers/reducerSlice'
import moment from 'moment'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Plans = (props) => {
  let dispatch = useDispatch()
  function DeletePlan(){
     dispatch(DeletePlans({
      id:props.id
     }))
  }
  let newDate = moment().add(props.period,'M')
  console.log(newDate)
  return (
    <Container>
       <div className="left_side">
          <img src='/Images/cycle.png'/>
         <div className='plan'>
         <h2>{props.Plan}</h2>
          <h4>${props.price}</h4>
         </div>
       </div>
       <div className="right_side">
          <p>Bought by:{props.Name}</p>
          <small>Time Purchased:{props.time}</small>
          <br/>
          <small>Date Purchased:{props.date}</small>
          <br/>
           <small>Plan valid through :{newDate._d.toLocaleDateString()}</small>
           <br/>
          <button onClick={DeletePlan}>Delete Plan
           <FontAwesomeIcon icon={faTrash}/>
          </button>
       </div>
    </Container>
  )
}

export default Plans
let Container = styled.div`
  background-color:#f4f4f4;
  cursor:pointer;
  border-radius:5px;
  box-shadow:2px 2px 3px #333;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:10px 12px;
  margin:2% 0;
 .left_side{
  display:flex;
  justify-content:left;
   align-items:center;
  .plan{
    display:block;
    text-align:center;
    h4{
      color:grey;
      font-size:30px;
      font-weight:300;
    }
  }
  h2{
    font-size:30px;
    font-weight:400;
    width:200px;
  }
    small{
        font-size:14px;
      }
 }
  h2{
    font-weight:400;
  }
  .right_side{
    flex:0.6;
    small{
      font-size:14px;
      font-weight:300;
    }
    button{
      padding:12px 40px;
      border-radius:10px;
      cursor:pointer;
      outline:none;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#ffc017;
      border:2px solid #000;
    }
  }
`