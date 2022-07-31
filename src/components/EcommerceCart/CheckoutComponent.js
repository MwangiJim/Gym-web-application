import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Zoom ,Fade} from 'react-reveal'
import { useDispatch } from 'react-redux'
import { DeleteItemFromCart } from '../../redux/reducers/reducerSlice'
import StarRatedItem from './StarRatedItem'

function CheckoutComponent(props) {
  let dispatch = useDispatch()
  const RemoveFromCart=()=>{
    dispatch(DeleteItemFromCart({
      Id:props.id
    }))
  }
  return (
    <Fade left>
    <Container>
      <img src={props.image}/>
      <div className='details'>
          <h4>{props.description}</h4>
          <p>KSH.{props.price}</p>
          <small>{props.id}</small>
          <StarRatedItem/>
          <button onClick={RemoveFromCart}>REMOVE FROM CART</button>
      </div>
    </Container>
    </Fade>
  )
}

export default CheckoutComponent

let Container = styled.div`
 background-color:#fff;
 display:flex;
 justify-content:left;
 padding:20px 12px;
 margin:2% 0;
 border-radius:6px;
 box-shadow:2px 2px 4px #333;
 img{
     width:130px;
     height:140px;
     object-fit:cover;
 }
 .details{
     text-align:left;
     margin:0 2%;
     h4{
         font-weight:400;
         font-size:24px;
     }
     p{
         font-size:15px;
         color:grey;
         margin:2% 0;
     }
     button{
         background-color:transparent;
         padding:12px 40px;
         cursor:pointer;
         color:#000;
         outline:none;
         box-shadow:2px 2px 5px #333;
         border-radius:5px;
     }
     small{
       display:none;
     }
 }
`