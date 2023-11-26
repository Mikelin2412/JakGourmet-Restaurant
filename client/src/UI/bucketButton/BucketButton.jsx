import React from 'react'
import classes from './bucketButton.module.css'

const BucketButton = ({ innerText, handleFunction }) => {
  const handleClick = () => {
    if (innerText === 'Удалить') {
      handleFunction();
    } else if (innerText === 'Очистить все') {
      handleFunction();
    } else if (innerText === 'Бронирование') {
      handleFunction(true);
    } else if (innerText === 'Зарегистрироваться' || innerText === 'Войти') {
      handleFunction();
    } else if (innerText === 'Назад') {
      handleFunction(false);
    } else if (innerText === 'Отправить') {
      handleFunction();
    } else if (innerText === 'Забронировать') {
      handleFunction();
    } else if (innerText === 'В корзину') {
      handleFunction();
    }
  }

  return (
    <button className={classes.button} onClick={handleClick}>{innerText}</button>
  )
}

export default BucketButton
