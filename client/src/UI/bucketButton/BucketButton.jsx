import React from 'react'
import classes from './bucketButton.module.css'

const BucketButton = ({ innerText, handleFunction, id, dishCost, countOfDishes }) => {
  const handleClick = () => {
    if (innerText === 'Удалить') {
      handleFunction(id, dishCost * countOfDishes);
    } else if (innerText === 'Очистить все') {
      handleFunction();
    } else if (innerText === 'Бронирование') {
      handleFunction(true);
    } else if (innerText === 'Зарегистрироваться' || innerText === 'Войти') {
      handleFunction();
    }
  }

  return (
    <button className={classes.button} onClick={handleClick}>{innerText}</button>
  )
}

export default BucketButton
