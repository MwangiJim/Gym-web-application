import React from 'react'

function Image({image}) {
  return (
    <div className='image'>
        <img src={image}/>
    </div>
  )
}

export default Image