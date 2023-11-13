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
                    <label id='date'>Дата: </label>
                    <input id='date' type='date'></input>
                    <label id='time'>Время: </label>
                    <input id='time' type='time'></input>
                    <label id='tel'>Телефон: </label>
                    <input id='tel' type='tel'></input>
                    <label id='guest-count'>Номер столика: </label>
                    <select id='guest-count'>
                        <option>1 столик</option>
                        <option>2 столик</option>
                        <option>3 столик</option>
                        <option>4 столик</option>
                        <option>5 столик</option>
                        <option>6 столик</option>
                    </select>
                </div>
            </form>
        </ModalWindow>
    )
}

export default ReservationPopup
