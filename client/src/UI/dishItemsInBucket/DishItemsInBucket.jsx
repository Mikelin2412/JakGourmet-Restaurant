import React, { useContext, useState } from 'react'
import { Context } from '../..'
import { deleteDefiniteDishFromBasket } from '../../http/BasketAPI'
import BucketButton from '../bucketButton/BucketButton'
import Counter from '../counter/Counter'
import classes from './dishItemsInBucket.module.css'

const DishItemsInBucket = ({dishItem}) => {
  const [dishPrice, setDishPrice] = useState(dishItem.dish.price * dishItem.count);
  const {basket} = useContext(Context);

  const handleDeleteOfTheDish = () => {
    deleteDefiniteDishFromBasket(dishItem.basketId, dishItem.dishId)
      .then(data => {
        console.log(dishItem.count)
        basket.setTotalPrice(basket.totalPrice - dishItem.count * dishItem.dish.price);
        basket.setDishesInBasket(basket.dishesInBasket.filter(dish => dish.dishId !== dishItem.dishId));
      })
      .catch(err => alert(err))
  }

  const changePriceOfTheDish = (counter) => {
    setDishPrice(dishItem.dish.price * counter);
  }

  const changeTotalPrice = (isIncrement, count) => {
    let changingDishPrice = isIncrement ? dishItem.dish.price : -dishItem.dish.price;
    console.log(count)
    basket.setTotalPrice(basket.totalPrice + changingDishPrice);
  }

  return (
    <div className={classes.dishItem}>
      <div className={classes.dishItemBlock}>
        <div className={classes.dishInfo}>
          <h4 className={classes.dishName}>{dishItem.dish.name}</h4>
          <p className={classes.dishCost}>{dishPrice} руб.</p>
        </div>
        <BucketButton
          handleFunction={handleDeleteOfTheDish}
          innerText={'Удалить'} />
      </div>
      <Counter
        basketId={basket.basketId}
        dishId={dishItem.dishId}
        countOfDishes={dishItem.count}
        changeCount={changePriceOfTheDish}
        changeTotalPrice={changeTotalPrice}/>
    </div>
  )
}

export default DishItemsInBucket