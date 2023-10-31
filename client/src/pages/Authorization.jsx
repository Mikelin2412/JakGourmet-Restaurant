import React, {useContext, useState} from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_PAGE_ROUTE } from '../utils/consts';
import '../styles/Authorization.css';
import Header from '../components/Header';
import BucketButton from '../UI/bucketButton/BucketButton';
import Footer from '../components/Footer';
import background from '../assets/images/restaurant-background.jpg';
import { userLogin, userRegistration } from '../http/UserAPI';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

const Authorization = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authorize = async () => {
        try {
            let userData;
            if (isLogin) {
                userData = await userLogin(name, email, password);
                console.log(userData);
            } else {
                userData = await userRegistration(name, email, password);
                console.log(userData);
            }
            user.setUser(userData);
            user.setIsAuth(true);
            user.setRole(userData.role);
            navigate(MAIN_PAGE_ROUTE);
        } catch(e) {
            alert(e.response.data.message);
        }
    }

    return (
        <>
            <div className='page'>
                <img className='authorization-background' src={background} alt='backround'/>
                <Header />
                <div className='authorization'>
                    <div className='auth-form'>
                        <h1 className='auth-form__title'>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
                        <div className='auth-form__fields'>
                            <div className='auth-form__field'>
                                <label id='name'>Ваше Имя: </label>
                                <input
                                    id='name'
                                    type='text'
                                    value={name}
                                    onChange={e => setName(e.target.value)}></input>
                            </div>
                            <div className='auth-form__field'>
                                <label id='email'>Email: </label>
                                <input
                                    id='email'
                                    type='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}></input>
                            </div>
                            <div className='auth-form__field'>
                                <label id='password'>Пароль: </label>
                                <input
                                    id='password'
                                    type='password'
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                        {isLogin ?
                            <div className='auth-form__bottom-info-and-buttons'>
                                <span>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} className='auth-form__bottom-info-and-buttons__type-of-auth'>Зарегистрироваться</NavLink></span>
                                <BucketButton innerText='Войти' handleFunction={authorize}/>
                            </div>
                            :
                            <div className='auth-form__bottom-info-and-buttons'>
                                <span>Есть аккаунт? <NavLink to={LOGIN_ROUTE} className='auth-form__bottom-info-and-buttons__type-of-auth'>Войти</NavLink></span>
                                <BucketButton innerText='Зарегистрироваться' handleFunction={authorize}/>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
})

export default Authorization;