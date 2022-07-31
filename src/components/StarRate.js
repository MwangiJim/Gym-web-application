import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

function StarRate(props) {
  return (
    <Stars>
        {[...Array(5)].map((item,i)=>{
            let rate = i+1;
            return(
                <FontAwesomeIcon 
                 icon={faStar}
                 key={i}
                 style={{color:rate<=props.rate?'#ffc017':'#000'}}
                />
            )
        })}
    </Stars>
  )
}

export default StarRate
let Stars = styled.div`

`