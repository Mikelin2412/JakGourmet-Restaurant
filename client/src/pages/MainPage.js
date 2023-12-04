import React, { useEffect, useContext } from 'react';
import Header from '../components/Header';
import Button from '../UI/button/Button';
import MainSectionCards from '../UI/mainSectionCard/MainSectionCards';
import images from '../assets/images/images.png';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import ClientsReviews from '../components/ClientsReviews';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import AdminHeader from '../components/AdminHeader';
import { getAllFeedbacks } from '../http/FeedbacksAPI';

const MainPage = observer(() => {
    const {user, feedbacks} = useContext(Context);

    useEffect(() => {
        getAllFeedbacks()
            .then(data => {
                feedbacks.setFeedbacks(data)
            });
    }, []);

    const mainSectionCardsInfo = [
        {
            title: 'Магическая Атмосфера',
            description: 'В нашем заведении царит магическая атмосфера, наполненная вкусными ароматами',
        },
        {
            title: 'Лучшее качество Еды',
            description: 'Качество нашей Еды - отменное!', 
        },
        {
            title: 'Недорогая Еда',
            description: 'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!', 
        }
    ];

    return (
        <>
            <div className='main-section'>
                {user.role === 'ADMIN' ?
                    <AdminHeader />
                    :
                    <Header />
                }
                <div className='main-section__view-menu-block'>
                    <div className='main-section__text'>
                        <h2>Добро пожаловать в</h2>
                        <h1>Наш ресторан</h1>
                        <p><span className='line'></span>ДОМ ЛУЧШЕЙ ЕДЫ<span className='line'></span></p>
                    </div>
                    <Link to="/menu">
                        <Button 
                            value='НАШЕ МЕНЮ'
                        />
                    </Link>
                </div>
                <div className='main-section__cards'>
                    <MainSectionCards
                        infoForCards={mainSectionCardsInfo}
                    />
                </div>
            </div>
            <section className='our-story-section'>
                <div className='our-story__info-block'>
                    <div className='our-story__info-block__description'>
                        <h1>Наша <span>История</span></h1>
                        <p>Как и у любого другого самобытного места, 
                            у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. 
                            Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров 
                            от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя 
                            обустровать себе нехитрый быт, добывать и готовить себе еду.</p>
                        <div className='our-story__info-block__description__numbers'>
                            <div className='our-story__info-block__description__numbers__item'>
                                <h1>93</h1>
                                <p>Напитки</p>
                            </div>
                            <div className='our-story__info-block__description__numbers__item'>
                                <h1>206</h1>
                                <p>Еда</p>
                            </div>
                            <div className='our-story__info-block__description__numbers__item'>
                                <h1>71</h1>
                                <p>Закуски</p>
                            </div>
                        </div>
                    </div>
                    <img
                        src={images}
                        alt='images'
                    />
                </div>
                <div className='our-story__order-table'>
                    <div className='our-story__order-table__info'>
                        <h2>Отпразднуйте в одном из самых лучших ресторанов.</h2>
                        <p>Только в этом месяце бизнес-ланч от 15 рублей</p>
                    </div>
                    <Button
                        value='НАШЕ МЕНЮ'
                    />
                </div>
            </section>
            <ClientsReviews/>
            <Footer />
        </>
    );
})

export default MainPage;