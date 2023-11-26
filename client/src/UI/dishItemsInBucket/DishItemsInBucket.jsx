import React from 'react'
import { deleteDefiniteDishFromBasket } from '../../http/BasketAPI'
import BucketButton from '../bucketButton/BucketButton'
import Counter from '../counter/Counter'
import classes from './dishItemsInBucket.module.css'

const DishItemsInBucket = ({dishItem}) => {
  const handleDeleteOfTheDish = () => {
    console.log(dishItem.basketId)
    console.log(dishItem.dishId)
    deleteDefiniteDishFromBasket(dishItem.basketId, dishItem.dishId)
      .then(data => console.log(data))
      .catch(err => alert(err))
  }

  return (
    <div className={classes.dishItem}>
      <div className={classes.dishItemBlock}>
        <div className={classes.dishInfo}>
          <h4 className={classes.dishName}>{dishItem.dish.name}</h4>
          <p className={classes.dishCost}>{dishItem.dish.price * dishItem.count} руб.</p>
        </div>
        <BucketButton
          handleFunction={handleDeleteOfTheDish}
          innerText={'Удалить'} />
      </div>
      <Counter
        countOfDishes={dishItem.count} />
    </div>
  )
}

export default DishItemsInBucket