import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStarRating } from '../redux/reducers/reducerSlice'

function Star() {
    let[rating,setRating] = useState(null)
    let dispatch = useDispatch()
  return (
    <div className='rating__star'>
        {[...Array(5)].map((star,i)=>{
            const ratingValue = i+1;
            return ( <label key={i}>
                          <input 
                           type='radio'
                           name='rating'
                           value={ratingValue}
                          />
                          <FontAwesomeIcon 
                          icon={faStar} 
                          className='star'
                          onClick={()=>{
                            setRating(ratingValue)
                            dispatch(setStarRating({
                              Rate:ratingValue
                            }))
                          }}
                           style={{color:ratingValue<=rating?'orange':'#333'}}
                          />
                   </label>
            )
        })}
    </div>
  )
}

export default Star