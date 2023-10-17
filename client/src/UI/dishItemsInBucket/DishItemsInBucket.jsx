import React, { useContext } from 'react'
import { DishContext } from '../../pages/Bucket'
import BucketButton from '../bucketButton/BucketButton'
import Counter from '../counter/Counter'
import classes from './dishItemsInBucket.module.css'

const DishItemsInBucket = () => {
  const {listOfDishes, handleChangeCountOfDishes, totalCost} = useContext(DishContext);

  return (
    <>
      {listOfDishes.map((elem, index) => {
        return (
          <div key={index} className={classes.dishItem}>
            <div className={classes.dishItemBlock}>
              <div className={classes.dishInfo}>
                <h4 className={classes.dishName}>{elem.dishName}</h4>
                <p className={classes.dishCost}>{elem.dishCost * elem.numberOfServings} руб.</p>
              </div>
              <BucketButton
                innerText={'Удалить'} />
            </div>
            <Counter
              totalCost={totalCost}
              dishCost={elem.dishCost}
              countOfDishes={elem.numberOfServings}
              handleClick={handleChangeCountOfDishes}
              id={index}/>
          </div>
        )
      })}
    </>
  )
}

export default DishItemsInBucket