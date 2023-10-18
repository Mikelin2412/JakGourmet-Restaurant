import React from 'react'
import ModalWindow from '../UI/modalWindow/ModalWindow'

const ReservationPopup = ({active, setActive}) => {
    return (
        <ModalWindow
            active={active}
            setActive={setActive}>
            <form method="post">
                <h1 className='modal__reservation__title'>Бронирование</h1>
                <div className='modal__reservation__fields-block'>
                    <label id='name'>Имя: </label>
                    <input id='name' type='text'></input>
                    <label id='surname'>Фамилия: </label>
                    <input id='surname' type='text'></input>
                    <label id='date'>Дата: </label>
                    <input id='date' type='date'></input>
                    <label id='time'>Время: </label>
                    <input id='time' type='time'></input>
                    <label id='tel'>Телефон: </label>
                    <input id='tel' type='tel'></input>
                    <label id='guest-count'>Количество гостей: </label>
                    <input id='guest-count' type='number'></input>
                </div>
            </form>
        </ModalWindow>
    )
}

export default ReservationPopup
