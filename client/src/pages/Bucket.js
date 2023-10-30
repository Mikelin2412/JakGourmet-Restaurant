import React, { useState, createContext } from 'react'
import Header from '../components/Header'
import DishItemsInBucket from '../UI/dishItemsInBucket/DishItemsInBucket'
import '../styles/Bucket.css'
import Footer from '../components/Footer'
import BucketButton from '../UI/bucketButton/BucketButton'
import ReservationPopup from '../components/ReservationPopup'

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
                  innerText={'Очистить все'}/>
                <BucketButton
                  innerText={'Бронирование'} 
                  handleFunction={setModalActive}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ReservationPopup
          active={modalActive}
          setActive={setModalActive}/>
      </div>
    </DishContext.Provider>
  )
}

export default Bucket