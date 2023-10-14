import React from 'react'
import classes from './bucketButton.module.css'

const BucketButton = ({ innerText }) => {
  return (
    <button className={classes.button}>{innerText}</button>
  )
}

export default BucketButton
