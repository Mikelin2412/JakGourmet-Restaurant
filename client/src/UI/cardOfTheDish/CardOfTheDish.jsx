import React from 'react'
import seld from '../../assets/images/Capture.png'
import classes from "./cardOfTheDish.module.css";

const cardOfTheDish = () => {
  return (
    <div className={classes.cardOfTheDish}>
        <div className={classes.information}>
            <h1 className={classes.title}>Сельдь на бородинском хлебе</h1>
            <h3 className={classes.price}>32 руб.</h3>
        </div>
      <img src={seld} alt='seld' />
    </div>
  )
}

export default cardOfTheDish