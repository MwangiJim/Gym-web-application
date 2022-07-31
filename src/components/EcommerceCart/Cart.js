import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import Star from '../Star'
import numeral from 'numeral'
import { useDispatch } from 'react-redux'
import { addPost,AddItems } from '../../redux/reducers/reducerSlice'

function Cart(props) {
    let dispatch = useDispatch()
    const AddToCart=()=>{
        dispatch(AddItems({
            Price:props.price,
            ProductImage:props.image,
            Description:props.description,
            Id:props.id
        }))
    }
  return (
    <Container>
       <img src={props.image}/>
       <Details>
       <h5>{props.description}</h5>
       <h6>{props.id}</h6>
        <small>Ksh.{numeral(props.price).format('0.a')}</small>
       <div className='rating'>
            <Star/>
       </div>
        <Footer>
            <h4>2500 Sales</h4>
            <button onClick={AddToCart}>
                ADD TO CART
               <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
        </Footer>
       </Details>
    </Container>
  )
}

export default Cart
let Container = styled.div`
 background-color:#fff;
 border-radius:5px;
 flex-basis:100%;
 margin:0 1%;
color:#000;
box-shadow:4px 4px 10px #333;
@media(max-width:600px){
    width:90%;
    margin:2% 0;
}
img{
    width:280px;
    height:220px;
    object-fit:cover;
}
.rating{
    margin:2% 0;
    display:flex;
    justify-content:left;
    align-items:center;
    input{
        width:30px;
        height:20px;
        outline:none;
        border:none;
        box-shadow:3px 3px 8px #000;
        padding:4px;
        border-radius:5px;
    }
}
h5{
    font-size:20px;
    font-weight:600;
}
p{
    color:gray;
    font-size:15px;
}
h6{
    display:none;
}
`
let Footer = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 h4{
     color:gray;
     font-weight:300;
 }
 button{
     color:green;
     padding:14px;
     border-radius:5px;
     cursor:pointer;
     border:none;
     outline:none;
     box-shadow:2px 2px 4px #000;
 }
`
let Details = styled.div`
padding:7px;
small{
    font-size:18px;
    font-weight:300;
}
`