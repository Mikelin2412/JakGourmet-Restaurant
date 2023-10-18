import React from 'react'
import '../styles/ClientsReviews.css'
import Slider from './Slider'

const ClientsReviews = () => {
    return (
        <section className='clients-reviews-section'>
            <h1 className='clients-reviews-section__content__title'>Отзывы</h1>
            <Slider/>
        </section>
    )
}

export default ClientsReviews
