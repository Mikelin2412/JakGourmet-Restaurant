import React, { useContext } from 'react'
import icon from '../assets/images/icon-profile.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Slider = observer(() => {
    const { feedbacks } = useContext(Context);

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
            {
                feedbacks.allFeedbacks.map((feedbackElem, index) => <SwiperSlide key={feedbackElem.id}>
                        <div className='clients-reviews-section__content'>
                            <p className='clients-reviews-section__content__review'>{feedbackElem.feedback}</p>
                            <img className='clients-reviews-section__content__profile-icon' src={icon} alt='profile icon' />
                            <h4 className='clients-reviews-section__content__visitor'>Посетитель</h4>
                            <span className='clients-reviews-section__content__visitor-name'>{feedbacks.usersOfFeedbacks[index].name}</span>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    )
})

export default Slider