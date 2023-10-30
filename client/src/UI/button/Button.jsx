import React from 'react'
import './Button.css'

const Button = ({ value, handleClick }) => {
  return (
    <button className='button' onClick={handleClick}>
      {value}
    </button>
  )
}

export default Button;