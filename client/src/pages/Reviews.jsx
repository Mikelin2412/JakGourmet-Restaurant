import React, { useContext, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import background from '../assets/images/restaurant-background.jpg'
import BucketButton from '../UI/bucketButton/BucketButton'
import '../styles/Reviews.css';
import { Context } from '..'
import { addFeedback } from '../http/FeedbacksAPI'
import { useNavigate } from 'react-router-dom'
import { MAIN_PAGE_ROUTE } from '../utils/consts'

const Reviews = () => {
    const {user} = useContext(Context);
    const navigation = useNavigate();
    const [feedback, setFeedback] = useState('');

    const sendFeedback = () => {
        addFeedback(user.user.id, feedback)
            .then(data => navigation(MAIN_PAGE_ROUTE))
            .catch(err => alert(err.response.data.message))
    }

    return (
        <>
            <div className='page'>
                <img className='reviews-background' src={background} alt='backround'/>
                <Header />
                <div className='review'>
                    <div className='review__form'>
                        <h1 className='review__form__title'>Обратная связь</h1>
                        <div className='review__form__body'>
                            <textarea
                                className='review__form__body__textarea'
                                cols={50}
                                placeholder={'Напишите здесь ваш отзыв'}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}></textarea>
                            <div className='review__form__body__info'>
                                <p className='review__form__body__info__text'>Здесь вы можете оставлять свои предложения и пожелания, а также оценить обслуживание в нашем заведении</p>
                                <BucketButton
                                    innerText={'Отправить'}
                                    handleFunction={sendFeedback}/>
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
