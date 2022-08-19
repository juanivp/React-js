import React from 'react'


function Button( {text, onTouch}) {
  return (
    <button  className='btn'>{text}</button>
  )
}

export default Button