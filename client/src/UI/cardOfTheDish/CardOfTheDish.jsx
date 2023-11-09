import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE } from '../../utils/consts';
import classes from "./cardOfTheDish.module.css";

const CardOfTheDish = ({ id, name, price, image, isOpen, setDishId }) => {
  const navigate = useNavigate();

  return (
      <div className={classes.cardOfTheDish} onClick={() => {
          navigate(MENU_ROUTE + '/' + (id));
          isOpen(true);
          setDishId(id);
        }}>
        <div className={classes.information}>
          <h1 className={classes.title}>{name}</h1>
          <h3 className={classes.price}>{price} руб.</h3>
        </div>
        <img className={classes.image} src={'http://localhost:5050/' + image} alt={name} />
      </div>
  )
}

export default CardOfTheDish