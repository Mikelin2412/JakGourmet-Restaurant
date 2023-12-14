import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from '..';
import { addOrder } from '../http/OrdersAPI';
import BucketButton from '../UI/bucketButton/BucketButton'
import ModalWindow from '../UI/modalWindow/ModalWindow'
import { BUCKET_ROUTE } from '../utils/consts';

const ReservationPopup = ({active, setActive}) => {
    const {user} = useContext(Context);
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
                <h1 className='modal__reservation__title'>Бронирование</h1>
                <div className='modal__reservation__fields-block'>
                    <label id='date'>Дата: </label>
                    <input
                        id='date'
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}></input>
                    <label id='time'>Время: </label>
                    <input
                        id='time'
                        type='time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}></input>
                    <label id='tel'>Телефон: </label>
                    <input
                        id='tel'
                        type='tel'
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}></input>
                    <label id='guest-count'>Номер столика: </label>
                    <select
                        id='guest-count'
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}>
                        <option value='1'>1 столик</option>
                        <option value='2'>2 столик</option>
                        <option value='3'>3 столик</option>
                        <option value='4'>4 столик</option>
                        <option value='5'>5 столик</option>
                        <option value='6'>6 столик</option>
                        <option value='7'>7 столик</option>
                        <option value='8'>8 столик</option>
                        <option value='9'>9 столик</option>
                    </select>
                </div>
                <div className='modal__reservation__buttons'>
                    <BucketButton
                        innerText={'Назад'}
                        handleFunction={setActive}/>
                    <BucketButton
                        innerText={'Забронировать'}
                        handleFunction={sendReservation}/>
                </div>
            </div>
        </ModalWindow>
    )
}

export default ReservationPopup
