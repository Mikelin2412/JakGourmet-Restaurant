import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import '../styles/Authorization.css';
import Header from '../components/Header';
import BucketButton from '../UI/bucketButton/BucketButton';
import Footer from '../components/Footer';
import background from '../assets/images/restaurant-background.jpg';

const Authorization = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    console.log(isLogin);

    return (
        <>
            <div className='page'>
                <img className='authorization-background' src={background} alt='backround'/>
                <Header />
                <div className='authorization'>
                    <form className='auth-form' method="post">
                        <h1 className='auth-form__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                        <div className='auth-form__fields'>
                            <div className='auth-form__field'>
                                <label id='name'>Ваше Имя: </label>
                                <input id='name' type='text'></input>
                            </div>
                            <div className='auth-form__field'>
                                <label id='email'>Email: </label>
                                <input id='email' type='email'></input>
                            </div>
                            <div className='auth-form__field'>
                                <label id='password'>Пароль: </label>
                                <input id='password' type='password'></input>
                            </div>
                        </div>
                        {isLogin ?
                            <div className='auth-form__bottom-info-and-buttons'>
                                <span>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink></span>
                                <BucketButton innerText='Войти' />
                            </div>
                            :
                            <div className='auth-form__bottom-info-and-buttons'>
                                <span>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink></span>
                                <BucketButton innerText='Зарегистрироваться' />
                            </div>
                        }
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Authorization;