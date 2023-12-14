import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import { deleteDefiniteDishFromBasket } from '../../http/BasketAPI'
import BucketButton from '../bucketButton/BucketButton'
import Counter from '../counter/Counter'
import classes from './dishItemsInBucket.module.css'

const DishItemsInBucket = ({dishItem}) => {
  const [dishCounter, setDishCounter] = useState(dishItem.count);
  const {basket} = useContext(Context);

  useEffect(() => {
    setDishCounter(dishItem.count)
  }, [dishItem.count]);

  const handleDeleteOfTheDish = () => {
    deleteDefiniteDishFromBasket(dishItem.basketId, dishItem.dishId)
      .then(data => {
        basket.setTotalPrice(basket.totalPrice - dishCounter * dishItem.dish.price);
        basket.setDishesInBasket(basket.dishesInBasket.filter(dish => dish.dishId !== dishItem.dishId));
      })
      .catch(err => alert(err))
  }

  const changePriceOfTheDish = (counter, id) => {
    setDishCounter(counter);
    let updatedCounterOfDishes = basket.dishesInBasket.map(dish => {
      if (dish.dishId === id) {
        dish.count = counter;
      }
      return dish;
    })
    basket.setDishesInBasket(updatedCounterOfDishes);
  }

  const changeTotalPrice = (isIncrement) => {
    let changingDishPrice = isIncrement ? dishItem.dish.price : -dishItem.dish.price;
    basket.setTotalPrice(basket.totalPrice + changingDishPrice);
  }

  return (
    <div className={classes.dishItem}>
      <div className={classes.dishItemBlock}>
        <div className={classes.dishInfo}>
          <h4 className={classes.dishName}>{dishItem.dish.name}</h4>
          <p className={classes.dishCost}>{dishItem.dish.price*dishItem.count} руб.</p>
        </div>
        <BucketButton
          handleFunction={handleDeleteOfTheDish}
          innerText={'Удалить'} />
      </div>
      <Counter
        basketId={basket.basketId}
        dishId={dishItem.dishId}
        countOfDishes={dishCounter}
        changeCount={changePriceOfTheDish}
        changeTotalPrice={changeTotalPrice}/>
    </div>
  )
}

export default DishItemsInBucket