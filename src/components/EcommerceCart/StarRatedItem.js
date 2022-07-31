import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

function StarRatedItem() {
    let{StarRating}=useSelector((state)=>state.gymRegucer);
    console.log(StarRating)
  return (
    <Container>
        {[...Array(5)].map((item,i)=>{
            let rating = i+1;
            return(
                <FontAwesomeIcon icon={faStar}
                 key={i}
                 style={{color:rating<=StarRating.Rate?'ffc017':'#333'}}
                />
            )
        })}
    </Container>
  )
}

export default StarRatedItem
let Container = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 margin:1% 0;
`