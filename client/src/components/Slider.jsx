import React from 'react'
import icon from '../assets/images/icon-profile.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Андрей</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Николай</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Александр</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Александр</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Александр</span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='clients-reviews-section__content'>
                    <p className='clients-reviews-section__content__review'>Я надолго запомню мой День рождения, проведённый в этом ресторане!
                        Кусочек родной Армении!!! Отдельное спасибо за комплимент в виде фруктовой тарелки.
                        Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!</p>
                    <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                    <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                    <span className='clients-reviews-section__content__visitor-name'>Александр</span>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider