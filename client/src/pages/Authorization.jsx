import React from 'react'

const Authorization = () => {
    return (
        <form method="post">
            <h1 className='modal__reservation__title'>Авторизация</h1>
            <div className='modal__reservation__fields-block'>
                <label id='name'>Ваше Имя: </label>
                <input id='name' type='text'></input>
                <label id='email'>Email: </label>
                <input id='email' type='email'></input>
                <label id='password'>Пароль: </label>
                <input id='password' type='password'></input>
            </div>
            <div>
                <span>Нет аккаунта? </span>
            </div>
        </form>
    )
}

export default Authorization;