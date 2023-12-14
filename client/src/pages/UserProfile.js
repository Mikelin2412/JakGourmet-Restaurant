import React, { useState, useContext } from 'react';
import '../styles/UserProfile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import background from '../assets/images/restaurant-background.jpg';
import profileIcon from '../assets/images/icon-profile.png'
import BucketButton from '../UI/bucketButton/BucketButton';
import { Context } from '..';
import AdminHeader from '../components/AdminHeader';
import ProfileEditPopup from '../components/ProfileEditPopup';
import { deleteAccount } from '../http/UserAPI';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from '../utils/consts';

const UserProfile = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [modalActive, setModalActive] = useState(false);

    const handleDeleteOfAccount = () => {
        deleteAccount(user.user.id)
            .then(data => console.log(data))
            .catch(err => alert(err))
        user.setAuth = false;
        user.setRole = '';
        user.setUser = {};
        window.location.reload()
        navigate(MAIN_PAGE_ROUTE);
    }

    return (
        <>
            <div className='page'>
                <img className='authorization-background' src={background} alt='backround' />
                {
                    user.role === 'ADMIN' ?
                        <AdminHeader /> : <Header />
                }
                <div className='user-profile-block'>
                    <h1 className='user-profile-block__title'>Информация о профиле</h1>
                    <div className='user-profile-block__info-block'>
                        <img
                            src={profileIcon}
                            width={200}
                            height={200}
                            alt='Profile Icon' />
                        <div className='user-profile-block__info-block__info'>
                            <p>Имя: {user.user.name}</p>
                            <p>Email: {user.user.email}</p>
                            <p>Пароль: ********</p>
                            {/* <p>Статус: активен</p>
                            <p>Город: Минск</p>
                            <p>Телефон: +375291234567</p> */}
                        </div>
                    </div>
                    <div className='user-profile-block__buttons'>
                        <BucketButton
                            innerText='Удалить аккаунт'
                            handleFunction={handleDeleteOfAccount} />
                        {/* <BucketButton
                            innerText='Редактировать'
                            handleFunction={() => setModalActive(true)} /> */}
                    </div>
                </div>
            </div>
            <Footer />
            <ProfileEditPopup
                active={modalActive}
                setActive={setModalActive} />
        </>
    )
})

export default UserProfile;