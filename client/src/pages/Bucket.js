import React from 'react'
import Header from '../components/Header'
import DishItemInBucket from '../UI/dishItemInBucket/DishItemInBucket'
import '../styles/Bucket.css'

const Bucket = () => {
  return (
    <div>
      <Header />
      <div className='bucket-list'>
        <h1 className='bucket-list__title'>Корзина</h1>
        <DishItemInBucket/>
      </div>
    </div>
  )
}

export default Bucket