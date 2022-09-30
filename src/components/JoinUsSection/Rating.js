import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Rating = () => {
  return (
    <div className='stars'>
        {[...Array(5)].map((item,i)=>{
            return(
                <FontAwesomeIcon icon={faStar}className='star' style={{color:i<1?'ffc017':'#000'}}/>
            )
        })}
    </div>
  )
}

export default Rating