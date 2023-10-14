import React from 'react'
import Header from '../components/Header'
import CardOfTheDish from '../UI/cardOfTheDish/CardOfTheDish'
import '../styles/Menu.css'
import TypesOfDishesNavigation from '../components/TypesOfDishesNavigation'
import Footer from '../components/Footer'

const menu = () => {
  return (
    <>
      <div className='menu-page'>
        <Header/>
        <TypesOfDishesNavigation />
        <div className='list-of-dishes'>
          <h1 className='list-of-dishes__title'>Закуски</h1>
          <div className='list-of-dishes__cards-block'>
            <CardOfTheDish />
            <CardOfTheDish />
            <CardOfTheDish />
            <CardOfTheDish />
            <CardOfTheDish />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default menu