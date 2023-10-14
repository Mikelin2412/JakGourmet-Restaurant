import React from 'react'
import BucketButton from '../bucketButton/BucketButton'
import Counter from '../counter/Counter'
import classes from './dishItemInBucket.module.css'

const DishItemInBucket = () => {
  return (
    <div className={classes.dishItem}>
        <div className={classes.dishItemBlock}>
            <div className={classes.dishInfo}>
                <h4 className={classes.dishName}>Сало домашнее с горчицей</h4>
                <p className={classes.dishCost}>32 руб.</p>
            </div>
            <BucketButton
                innerText={'Удалить'}/>
        </div>
        <Counter/>
    </div>
  )
}

export default DishItemInBucket
