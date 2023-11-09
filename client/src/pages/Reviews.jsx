import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/images/restaurant-background.jpg'
import BucketButton from '../UI/bucketButton/BucketButton'
import '../styles/Reviews.css';

const Reviews = () => {
    return (
        <>
            <div className='page'>
                <img className='reviews-background' src={background} alt='backround'/>
                <Header />
                <div className='review'>
                    <div className='review__form'>
                        <h1 className='review__form__title'>Обратная связь</h1>
                        <div className='review__form__body'>
                            <textarea className='review__form__body__textarea' cols={50} placeholder={'Напишите здесь ваш отзыв'}></textarea>
                            <div className='review__form__body__info'>
                                <p className='review__form__body__info__text'>Здесь вы можете оставлять свои предложения и пожелания, а также оценить обслуживание в нашем заведении</p>
                                <BucketButton innerText={'Отправить'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reviews
