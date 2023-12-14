import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { addOrder } from '../http/OrdersAPI';
import BucketButton from '../UI/bucketButton/BucketButton'
import ModalWindow from '../UI/modalWindow/ModalWindow'
import { BUCKET_ROUTE } from '../utils/consts';

const ProfileEditPopup = ({ active, setActive }) => {
    const { user } = useContext(Context);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [telephone, setTelephone] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const navigation = useNavigate();

    const sendReservation = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const dateOfCreation = `${year}-${month}-${day}`;
        const status = 'на рассмотрении';
        addOrder(user.user.id, dateOfCreation, date, time, status, telephone, tableNumber)
            .then(data => {
                console.log(data)
                navigation(BUCKET_ROUTE)
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <ModalWindow
            active={active}
            setActive={setActive}>
            <div>
                <h1 className='modal__reservation__title'>Редактирование</h1>
                <div className='modal__reservation__fields-block'>
                    <label id='name'>Имя: </label>
                    <input
                        id='name'
                        type='text'
                        value={'Михаил'}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                    <label id='name'>Email: </label>
                    <input
                        id='name'
                        type='text'
                        value={'miha@mail.com'}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                    <label id='name'>Пароль: </label>
                    <input
                        id='name'
                        type='password'
                        value={'qwertyui'}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                    <label id='name'>Город: </label>
                    <input
                        id='name'
                        type='text'
                        value={'Минск'}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                    <label id='name'>Телефон: </label>
                    <input
                        id='name'
                        type='tel'
                        value={'+375291234567'}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                </div>
                <div className='modal__reservation__buttons'>
                    <BucketButton
                        innerText={'Назад'}
                        handleFunction={setActive} />
                    <BucketButton
                        innerText={'Сохранить'}
                        handleFunction={sendReservation} />
                </div>
            </div>
        </ModalWindow>
    )
}

export default ProfileEditPopup