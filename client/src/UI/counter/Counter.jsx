import {React} from 'react'
import classes from './counter.module.css'

const Counter = ({ countOfDishes }) => {
    return (
        <div className={classes.counter}>
            <button
                type='button'
                className={classes.increaseButton}>+</button>
            <div className={classes.counterInputBlock}>
                <input 
                    className={classes.counterInput}
                    type='number'
                    min='1'
                    value={countOfDishes}/>
            </div>
            <button
                type='button'
                className={classes.decreaseButton}>-</button>
        </div>
    )
}

export default Counter
