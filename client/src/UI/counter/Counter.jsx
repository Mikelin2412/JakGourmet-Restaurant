import {React, useState} from 'react'
import { changeCountOfDishInBasket } from '../../http/BasketAPI';
import classes from './counter.module.css'

const Counter = ({ basketId, dishId, countOfDishes, changeCount, changeTotalPrice }) => {
    const [dishCount, setDishCount] = useState(countOfDishes);

    const increaseCount = (count) => {
        changeCountOfDishInBasket(basketId, dishId, count)
            .then(data => {
                setDishCount(count);
                changeCount(count, dishId);
                changeTotalPrice(true, count);
            })
            .catch(err => alert(err))
    }

    const decreaseCount = (count) => {
        if (count >= 1) {
            changeCountOfDishInBasket(basketId, dishId, count)
            .then(data => {
                setDishCount(count);
                changeCount(count, dishId);
                changeTotalPrice(false, count);
            })
            .catch(err => alert(err))
        } else {
            setDishCount(1);
        }
    }

    return (
        <div className={classes.counter}>
            <button
                type='button'
                className={classes.increaseButton}
                onClick={() => increaseCount(countOfDishes + 1)}>+</button>
            <div className={classes.counterInputBlock}>
                <input 
                    className={classes.counterInput}
                    type='number'
                    min='1'
                    value={countOfDishes}
                    onChange={() => setDishCount(countOfDishes)}/>
            </div>
            <button
                type='button'
                className={classes.decreaseButton}
                onClick={() => decreaseCount(countOfDishes - 1)}>-</button>
        </div>
    )
}

export default Counter
