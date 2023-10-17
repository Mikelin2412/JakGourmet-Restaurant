import {React, useState} from 'react'
import classes from './counter.module.css'

const Counter = ({totalCost, dishCost, countOfDishes, handleClick, id}) => {
    const [value, setValue] = useState(countOfDishes);

    const increase = () => {
        setValue(value + 1);
        handleClick(value + 1, id, totalCost + dishCost);
    }

    const decrease = () => {
        if (value - 1 === 0) {
            setValue(() => 1);
        }
        else {
            setValue(() => value - 1);
            handleClick(value - 1, id, totalCost - dishCost);
        }
    }

    return (
        <div className={classes.counter}>
            <button type='button' className={classes.increaseButton} onClick={increase}>+</button>
            <div className={classes.counterInputBlock}>
                <input className={classes.counterInput} type='number' min='1' value={value}/>
            </div>
            <button type='button' className={classes.decreaseButton} onClick={decrease}>-</button>
        </div>
    )
}

export default Counter
