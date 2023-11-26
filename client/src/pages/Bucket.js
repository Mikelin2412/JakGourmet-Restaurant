import React, { useState, useContext, useEffect } from 'react'
import Header from '../components/Header'
import DishItemsInBucket from '../UI/dishItemsInBucket/DishItemsInBucket'
import '../styles/Bucket.css'
import Footer from '../components/Footer'
import BucketButton from '../UI/bucketButton/BucketButton'
import ReservationPopup from '../components/ReservationPopup'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import AdminHeader from '../components/AdminHeader'
import { deleteAllDishesFromBasket, getAllDishesFromBasket } from '../http/BasketAPI'

const Bucket = observer(() => {
  const { user, basket } = useContext(Context);
  const [listOfDishes, setListOfDishes] = useState([
    {
      dishName: 'Вегамикс',
      description: 'Вкусно и точка',
      dishCost: 32,
      numberOfServings: 1,
    },
    {
      dishName: 'sdfdsf',
      description: 'sdfdsf',
      dishCost: 13,
      numberOfServings: 1,
    },
    {
      dishName: 'papapapa',
      description: 'papapapa',
      dishCost: 15,
      numberOfServings: 1,
    }
  ]);

  useEffect(() => {
    getAllDishesFromBasket(user.user.id)
      .then(data => {
        basket.setBasketId(data.basketId);
        basket.setDishesInBasket(data.allDishes);
        basket.setTotalPrice(data.basketTotalPrice);
      })
      .catch(err => alert(err))
  }, []);

  const [totalCost, setTotalCost] = useState(60);

  const [modalActive, setModalActive] = useState(false);

  const handleChangeCountOfDishes = (value, index, finalCost) => {
    setListOfDishes(() => {
      return listOfDishes.map((elem, ind) => {
        if (ind === index) {
          elem.numberOfServings = value;
        }
        return elem;
      });
    });
    setTotalCost(() => {
      return finalCost;
    });
  }

  const handleDeleteOfTheDish = (id, costOfTheDish) => {
    setListOfDishes(() => {
      return listOfDishes.filter((elem, index) => id !== index)
    });
    setTotalCost(() => {
      return totalCost - costOfTheDish;
    });
  }

  const handleDeleteAllDishes = () => {
    deleteAllDishesFromBasket(basket.basketId)
      .then(data => console.log(data))
      .catch(err => alert(err))
  }

  return (
      <div>
        <div className='page'>
          {user.role === 'ADMIN' ?
            <AdminHeader />
            :
            <Header />
          }
          <div className='bucket-list'>
            <h1 className='bucket-list__main-text'>Корзина</h1>
            {
              basket.dishesInBasket.map((item, index) => 
                <DishItemsInBucket
                  key={index}
                  dishItem={item}/>
              )
            }
            <div className='bucket-list__total-cost-block'>
              <h1 className='bucket-list__main-text'>Итого: {basket.totalPrice} руб.</h1>
              <div className='bucket-list__total-cost-block__buttons'>
                <BucketButton
                  handleFunction={handleDeleteAllDishes}
                  innerText={'Очистить все'} />
                <BucketButton
                  innerText={'Бронирование'}
                  handleFunction={setModalActive} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ReservationPopup
          active={modalActive}
          setActive={setModalActive} />
      </div>
  )
})

export default Bucket