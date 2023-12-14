import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { MENU_ROUTE } from '../../utils/consts';
import classes from "./cardOfTheDish.module.css";
import deleteIcon from "../../assets/images/free-icon-delete-1214428.png"
import { Context } from '../..';
import { deleteDish } from '../../http/DishAPI';

const CardOfTheDish = ({ id, dishId, name, price, image, isOpen, setDishId }) => {
  const navigate = useNavigate();
  const { user, dish } = useContext(Context);

  const deleteChoosedDish = (e, id) => {
    e.stopPropagation();
    deleteDish(id)
      .then(data => console.log(data))
      .catch(err => alert(err))
    dish.setDishes(dish.dishes.filter(dish => dish.id !== id))
  }

  return (
    <div className={classes.cardOfTheDish} onClick={() => {
      navigate(MENU_ROUTE + '/' + (id));
      isOpen(true);
      setDishId(id);
    }}>
      <div className={classes.information}>
        <h1 className={classes.title}>{name}</h1>
        <div className={classes.priceAndDelete}>
          <h3 className={classes.price}>{price} руб.</h3>
          {
            user.role === 'ADMIN' ?
              <img
                className={classes.deleteIcon}
                src={deleteIcon}
                alt='delete'
                onClick={(e) => deleteChoosedDish(e, dishId)}/> : null
          }
        </div>
      </div>
      <img className={classes.image} src={'http://localhost:5050/' + image} alt={name} />
    </div>
  )
}

export default CardOfTheDish