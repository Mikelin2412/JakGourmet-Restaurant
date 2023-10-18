import React from 'react'
import icon from '../assets/images/icon-profile.png'
import '../styles/ClientsReviews.css'

const ClientsReviews = () => {
  return (
    <section className='clients-reviews-section'>
      <div className='clients-reviews-section__content'>
        <h1 className='clients-reviews-section__content__title'>Отзывы</h1>
        <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане! 
            Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки. 
            Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
        <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon'/>
        <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
        <span className='clients-reviews-section__content__visitor-name'>Николай</span>
      </div>
    </section>
  )
}

export default ClientsReviews
