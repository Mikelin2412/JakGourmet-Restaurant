import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import CardOfTheDish from '../UI/cardOfTheDish/CardOfTheDish'
import '../styles/Menu.css'
import TypesOfDishesNavigation from '../components/TypesOfDishesNavigation'
import Footer from '../components/Footer'
import { Context } from '..'
import ModalWindow from '../UI/modalWindow/ModalWindow'
import { useNavigate, useParams } from 'react-router-dom'
import { MENU_ROUTE } from '../utils/consts'
import BucketButton from '../UI/bucketButton/BucketButton'
import AdminHeader from '../components/AdminHeader'
import AdminAddDishWindow from '../components/AdminAddDishWindow'

const Menu = () => {
  const { user, dish } = useContext(Context);
  const [modalActive, setModalActive] = useState(false);
  const [addDishWindow, setAddDishWindow] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  function handleClose() {
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
             <h1 className='list-of-dishes__title'>Закуски</h1>
          }
          <div className='list-of-dishes__cards-block'>
            {
              dish.dishes.map((dish) =>
                <CardOfTheDish
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  price={dish.price}
                  image={dish.img}
                  isOpen={setModalActive} />
              )
            }
          </div>
        </div>
      </div>
      <Footer />
      {
        (modalActive) ?
          <ModalWindow
            active={modalActive}
            setActive={setModalActive}
            handleClose={handleClose}>
            <div className='dish-modal'>
              <div className='dish-modal__info'>
                <h1 className='dish-modal__info__title'>{dish.dishes[id - 1].name}</h1>
                <div className='dish-modal__info__weight-and-description'>
                  <p className='dish-modal__info__weight'>Масса: {dish.dishes[id - 1].weight}гр</p>
                  <p className='dish-modal__info__description'>Описание: {dish.dishes[id - 1].description}</p>
                </div>
              </div>
              <div className='dish-modal__image-and-price'>
                <img className='dish-modal__image-and-price__image' src={dish.dishes[id - 1].img} alt={dish.dishes[id - 1].name}></img>
                <p className='dish-modal__image-and-price__price'>Стоимость: {dish.dishes[id - 1].price} руб.</p>
              </div>
            </div>
            <div className='dish-modal__buttons'>
              <BucketButton
                innerText={'Назад'} />
              <BucketButton
                innerText={'В корзину'} />
            </div>
          </ModalWindow> : null
      }
      {
        addDishWindow ?
        <AdminAddDishWindow
          active={addDishWindow}
          setActive={setAddDishWindow}>
        </AdminAddDishWindow> : null
      }
    </>
  )
}

export default Menu