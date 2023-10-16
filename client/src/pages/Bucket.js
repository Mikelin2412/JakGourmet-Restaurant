import React, { useState, createContext } from 'react'
import Header from '../components/Header'
import DishItemInBucket from '../UI/dishItemInBucket/DishItemInBucket'
import '../styles/Bucket.css'
import Footer from '../components/Footer'

export const DishContext = createContext({});

const Bucket = () => {
  const [listOfDishes, setListOfDishes] = useState([
    {
      dishName: 'Cало домашнее с горчицей',
      description: 'Вкусно и точка',
      dishCost: 32,
      numberOfServings: 2,
    },
    {
      dishName: 'sdfdsf',
      description: 'sdfdsf',
      dishCost: 13,
      numberOfServings: 3,
    },
    {
      dishName: 'papapapa',
      description: 'papapapa',
      dishCost: 15,
      numberOfServings: 1,
    }
  ]);

  const handleChangeCountOfDishes = (value, index) => {
    setListOfDishes(() => {
      return listOfDishes.map((elem, ind) => {
        if (ind === index) {
          elem.numberOfServings = value;
        }
        return elem;
      });
    });
  }

  return (
    <DishContext.Provider value={{listOfDishes, handleChangeCountOfDishes}}>
      <div>
        <div className='page'>
          <Header />
          <div className='bucket-list'>
            <h1 className='bucket-list__title'>Корзина</h1>
            <DishItemInBucket />
          </div>
        </div>
        <Footer />
      </div>
    </DishContext.Provider>
  )
}

export default Bucket