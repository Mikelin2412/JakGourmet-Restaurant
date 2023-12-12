import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import CardOfTheDish from '../UI/cardOfTheDish/CardOfTheDish'
import '../styles/Menu.css'
import TypesOfDishesNavigation from '../components/TypesOfDishesNavigation'
import Footer from '../components/Footer'
import { Context } from '..'
import ModalWindow from '../UI/modalWindow/ModalWindow'
import { useNavigate } from 'react-router-dom'
import { MENU_ROUTE } from '../utils/consts'
import BucketButton from '../UI/bucketButton/BucketButton'
import AdminHeader from '../components/AdminHeader'
import AdminAddDishWindow from '../components/AdminAddDishWindow'
import { getAllDishes, getTypes } from '../http/DishAPI'
import { observer } from 'mobx-react-lite'
import { addDishToTheBasket } from '../http/BasketAPI'

const Menu = observer(() => {
  const { user, dish, basket } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [addDishWindow, setAddDishWindow] = useState(false);
  const [currentDishId, setCurrentDishId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getTypes().then(data => dish.setTypes(data))
    getAllDishes().then(data => dish.setDishes(data))
  }, []);

  useEffect(() => {
    getAllDishes(dish.selectedType.id).then(data => dish.setDishes(data))
  }, [dish.selectedType]);

  function setActiveDish(isActive) {
    setModalActive(isActive);
    navigate(-1);
  }

  function handleAddDishToTheBasket(userId, dishId, count) {
    addDishToTheBasket(userId, dishId, count)
      .then(data => console.log(data))
      .catch(err => alert(err))
    // if (basket.dishesInBasket.length !== 0) {
    //   let updateOneDishPosition = basket.dishesInBasket.map(dish => {
    //     if (dish.dishId === dishId) {
    //       dish.count += 1;
    //     }
    //     return dish;
    //   });
    //   basket.setDishesInBasket(updateOneDishPosition);
    // }
    setModalActive(false);
    navigate(-1);
    // window.location.reload();
  }

  return (
    <>
      <div className='page'>
        {user.role === 'ADMIN' ?
          <AdminHeader />
          :
          <Header />
        }
        <TypesOfDishesNavigation
          setDishId={setCurrentDishId}/>
        <div className='list-of-dishes'>
          {
            user.role === 'ADMIN' ?
              <div className='list-of-dishes__admin-panel'>
                <h1 className='list-of-dishes__title'>{!Object.keys(dish.selectedType).length ? 'Все блюда' : dish.selectedType.name}</h1>
                <button
                  className='list-of-dishes__add-dish'
                  onClick={() => setAddDishWindow(true)}>Добавить блюдо</button>
              </div>
              :
              <div className='list-of-dishes__admin-panel'>
                <h1 className='list-of-dishes__title'>{!Object.keys(dish.selectedType).length ? 'Все блюда' : dish.selectedType.name}</h1>
              </div>
          }
          <div className='list-of-dishes__cards-block'>
            {
              dish.dishes.length !== 0 ?
                dish.dishes.map((dish, id) =>
                  <CardOfTheDish
                    key={dish.id}
                    id={id}
                    name={dish.name}
                    price={dish.price}
                    image={dish.image}
                    isOpen={setModalActive}
                    setDishId={setCurrentDishId} />
                )
                :
                <h1 className='list-of-dishes__cards-block__dishes-are-not-found'>Упс! Блюда не найдены!</h1>
            }
          </div>
        </div>
      </div>
      <Footer />
      <ModalWindow
        active={modalActive}
        setActive={setActiveDish}>
        {
          dish.dishes.length !== 0 ?
            <>
              <div className='dish-modal'>
                <div className='dish-modal__info'>
                  <h1 className='dish-modal__info__title'>{dish.dishes[currentDishId].name}</h1>
                  <div className='dish-modal__info__weight-and-description'>
                    <p className='dish-modal__info__description'>Описание: {dish.dishes[currentDishId].description}</p>
                    <p className='dish-modal__info__weight'>Масса: {dish.dishes[currentDishId].weight}гр</p>
                  </div>
                </div>
                <div className='dish-modal__image-and-price'>
                  <img className='dish-modal__image-and-price__image' src={'http://localhost:5050/' + dish.dishes[currentDishId].image} alt={dish.dishes[currentDishId].name}></img>
                  <p className='dish-modal__image-and-price__price'>Стоимость: {dish.dishes[currentDishId].price} руб.</p>
                </div>
              </div>
              <div className='dish-modal__buttons'>
                <BucketButton
                  innerText={'Назад'}
                  handleFunction={setModalActive} />
                <BucketButton
                  innerText={'В корзину'}
                  handleFunction={() => handleAddDishToTheBasket(user.user.id, dish.dishes[currentDishId].id, 1)}/>
              </div>
            </>
            : null
          }
      </ModalWindow>
      <AdminAddDishWindow
        active={addDishWindow}
        setActive={setAddDishWindow}>
      </AdminAddDishWindow>
    </>
  )
})

export default Menu