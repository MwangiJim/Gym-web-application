import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const ProductsComponent = ({category,name,rating,price,description}) => {
  return (
    <Box>
      <div className='info'>
        <p>{category}</p>
        <h4>{name}</h4>
        <h5>Ksh.{price}/=</h5>
      </div>
      <div className='stars'>
        {[...Array(5)].map((star,i)=>{
          let rate = i+ 1;
          return(
            <FontAwesomeIcon 
            icon={faStar}
             style={{color:rate <= rating?'gold':'grey',fontSize:'17px'}}
            />
          )
        })}
        </div>
        <h1>{description}</h1>
    </Box>
  )
}

export default ProductsComponent
let Box = styled.div`
 flex-basis:27%;
 border-radius:5px;
 padding:7px;
 background-color:#3e2d71bd;
 margin:0 0.5%;
 height:180px;
 .stars{
  margin-top:15px;
 }
 .info{
  text-align:left;
  p{
    color:gray;
    font-size:15px;
  }
  h4{
    color:#fff;
    font-size:18px;
    font-weight:400;
    margin:14px 0;
  }
  h5{
    font-size:17px;
    font-weight:300;
    color:gold;
  }
 }
 h1{
  color:#fff;
  font-size:15px;
  margin:2% 0;
  font-weight:300;
 }
`