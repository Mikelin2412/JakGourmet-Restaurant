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

const Menu = observer(() => {
  const { user, dish } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [addDishWindow, setAddDishWindow] = useState(false);
  const [currentDishId, setCurrentDishId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDishes().then(data => dish.setDishes(data.rows))
    getTypes().then(data => dish.setTypes(data))
  }, []);

  function setActiveDish(isActive) {
    setModalActive(isActive);
    navigate(MENU_ROUTE);
  }

  return (
    <>
      <div className='page'>
        {user.role === 'ADMIN' ?
          <AdminHeader />
          :
          <Header />
        }
        <TypesOfDishesNavigation />
        <div className='list-of-dishes'>
          {
            user.role === 'ADMIN' ?
              <div className='list-of-dishes__admin-panel'>
                <h1 className='list-of-dishes__title'>Закуски</h1>
                <button
                  className='list-of-dishes__add-dish'
                  onClick={() => setAddDishWindow(true)}>Добавить блюдо</button>
              </div>
              :
              <div className='list-of-dishes__admin-panel'>
                <h1 className='list-of-dishes__title'>Закуски</h1>
              </div>
          }
          <div className='list-of-dishes__cards-block'>
            {
              dish.dishes.map((dish) =>
                <CardOfTheDish
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  price={dish.price}
                  image={dish.image}
                  isOpen={setModalActive}
                  setDishId={setCurrentDishId} />
              )
            }
          </div>
        </div>
      </div>
      <Footer />
      <ModalWindow
        active={modalActive}
        setActive={setActiveDish}>
        <div className='dish-modal'>
          <div className='dish-modal__info'>
            <h1 className='dish-modal__info__title'>{dish.dishes[currentDishId - 1].name}</h1>
            <div className='dish-modal__info__weight-and-description'>
              <p className='dish-modal__info__weight'>Масса: {dish.dishes[currentDishId - 1].weight}гр</p>
              <p className='dish-modal__info__description'>Описание: {dish.dishes[currentDishId - 1].description}</p>
            </div>
          </div>
          <div className='dish-modal__image-and-price'>
            <img className='dish-modal__image-and-price__image' src={'http://localhost:5050/' + dish.dishes[currentDishId - 1].image} alt={dish.dishes[currentDishId - 1].name}></img>
            <p className='dish-modal__image-and-price__price'>Стоимость: {dish.dishes[currentDishId - 1].price} руб.</p>
          </div>
        </div>
        <div className='dish-modal__buttons'>
          <BucketButton
            innerText={'Назад'} />
          <BucketButton
            innerText={'В корзину'} />
        </div>
      </ModalWindow>
      <AdminAddDishWindow
        active={addDishWindow}
        setActive={setAddDishWindow}>
      </AdminAddDishWindow>
    </>
  )
})

export default Menu