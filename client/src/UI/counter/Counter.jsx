import React from 'react'
import classes from './counter.module.css'

const Counter = () => {
  return (
    <div className={classes.counter}>
      <button type='button' className={classes.increaseButton}>+</button>
      <div>
        <input type='number' min='1'></input>
      </div>
      <button type='button' className={classes.decreaseButton}>-</button>
    </div>
  )
}

export default Counter
