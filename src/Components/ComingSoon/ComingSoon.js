import React from 'react'
import './ComingSoon.css'
function ComingSoon(props) {
  return (
    <div className='d-flex align-items-center justify-content-center comingsoon'>
      <h1>
        {`${props.title} Coming Soon`}
      </h1>

    </div>
  )
}

export default ComingSoon