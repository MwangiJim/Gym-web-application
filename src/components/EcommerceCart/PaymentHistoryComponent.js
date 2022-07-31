import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

function PaymentHistoryComponent({image,description,price}) {
   let date = new Date().toDateString();
   let time = new Date().toLocaleTimeString();
  return (
    <Container>
        <div className='image'>
            <img src={image}/>
        </div>
        <div className='details'>
             <h3>{description}</h3>
             <p>Ksh:{price}</p>
             <small>Date Purchased:{date}{time}</small>
        </div>
    </Container>
  )
}

export default PaymentHistoryComponent

let Container = styled.div`
 display:flex;
 justify-content:space-between;
 padding:20px 12px;
 background-color:#f4f4f4;
 margin:2% 0;
 cursor:pointer;
 .image{
   flex-basis:20%;
   img{
     width:100px;
     height:100px;
   }
 }
 .details{
   flex-basis:80%;
   text-align:left;
   h3{
     font-weight:600;
     font-size:25px;
   }
 }
`