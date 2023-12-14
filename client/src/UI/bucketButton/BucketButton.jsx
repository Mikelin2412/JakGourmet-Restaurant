import React from 'react'
import classes from './bucketButton.module.css'

const BucketButton = ({ innerText, handleFunction }) => {
  return (
    <button className={classes.button} onClick={handleFunction}>{innerText}</button>
  )
}

export default BucketButton
