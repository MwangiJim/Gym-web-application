import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import PaymentHistoryComponent from './PaymentHistoryComponent'

function PaymentHistory() {
  let[Menu,setMenu] = useState(false);
  let{PurchasedItems}=useSelector((state)=>state.gymRegucer)
  console.log(PurchasedItems)

    const HideHistory=()=>{
      setMenu((prevState)=>!prevState)
    }
    let styles = {
        display:Menu?'none':''
    }
  return (
    <History style={styles}>
       <h2>Your Checkout History</h2>
        <FontAwesomeIcon icon={faTimesCircle} className='close' onClick={HideHistory}/>
        {PurchasedItems.history? <div className='history'>
         {PurchasedItems.history.map((item)=>{
          return(
            <PaymentHistoryComponent
             key={item.Price}
             image={item.ProductImage}
             description={item.Description}
             price={item.Price}
            />
          )
        })}
         </div>:<p>No Items Purchased Of Late</p>}
    </History>
  )
}

export default PaymentHistory

let History = styled.div`
 background-color:#fff;
 width:500px;
 height:80vh;
 top:10%;
 right:0;
 position:fixed;
 z-index:1;
 box-shadow:2px 2px 4px #333;
 .close{
   left:92%;
   position:relative;
   top:10px;
   font-size:26px;
   cursor:pointer;
 }
 .history{
   height:450px;
   max-height:450px;
   overflow-y:scroll;
   ::-webkit-scrollbar{
     display:none;
   }
 }
`