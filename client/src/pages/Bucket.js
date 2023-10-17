import React, { useState, createContext } from 'react'
import Header from '../components/Header'
import DishItemsInBucket from '../UI/dishItemsInBucket/DishItemsInBucket'
import '../styles/Bucket.css'
import Footer from '../components/Footer'
import BucketButton from '../UI/bucketButton/BucketButton'
import ModalWindow from '../UI/modalWindow/ModalWindow'

export const DishContext = createContext({});

const Bucket = () => {
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
    setListOfDishes(() => [])
    setTotalCost(() => 0)
  }

  return (
    <DishContext.Provider value={{ listOfDishes, handleChangeCountOfDishes, totalCost, handleDeleteOfTheDish }}>
      <div>
        <div className='page'>
          <Header />
          <div className='bucket-list'>
            <h1 className='bucket-list__main-text'>Корзина</h1>
            <DishItemsInBucket />
            <div className='bucket-list__total-cost-block'>
              <h1 className='bucket-list__main-text'>Итого: {totalCost} руб.</h1>
              <div className='bucket-list__total-cost-block__buttons'>
                <BucketButton
                  handleFunction={handleDeleteAllDishes}
                  innerText={'Очистить все'} />
                <BucketButton
                  innerText={'Бронирование'} 
                  handleFunction={setModalActive}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ModalWindow
          active={modalActive}
          setActive={setModalActive}>
            <form method="post">
              <h1 className='modal__reservation__title'>Бронирование</h1>
              <div className='modal__reservation__fields-block'>
                <label id='name'>Имя: </label>
                <input id='name' type='text'></input>
                <label id='surname'>Фамилия: </label>
                <input id='surname' type='text'></input>
                <label id='date'>Дата: </label>
                <input id='date' type='date'></input>
                <label id='time'>Время: </label>
                <input id='time' type='time'></input>
                <label id='tel'>Телефон: </label>
                <input id='tel' type='tel'></input>
                <label id='guest-count'>Количество гостей: </label>
                <input id='guest-count' type='number'></input>
              </div>
            </form>
        </ModalWindow>
      </div>
    </DishContext.Provider>
  )
}

export default Bucket