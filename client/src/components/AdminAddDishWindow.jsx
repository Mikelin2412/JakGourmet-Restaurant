import React from 'react'
import '../styles/AdminAddDishWindow.css'

const AdminAddDishWindow = ({active, setActive}) => {
  return (
    <div className={active ? 'add-dish-window active-adding' : 'add-dish-window'}
      onClick={() => setActive(false)}>
        <div className={active ? 'add-dish-window__form active-adding' : 'add-dish-window__form'}
          onClick={(e) => e.stopPropagation()}>
          <div className='add-dish-window__form__fields'>
            <h1 className='add-dish-window__form__fields__title'>Добавление блюда</h1>
            <div className='add-dish-window__form__fields__inputs'>
              <div className='add-dish-window__form__fields__inputs__div'>
                <label id='name'>Название блюда: </label>
                <input id='name' type='text'></input>
              </div>
              <div className='add-dish-window__form__fields__inputs__div'>
                <label id='type'>Тип блюда: </label>
                <select id='type' required={true}>
                  <option>Закуски</option>
                  <option>Салаты</option>
                  <option>Супы</option>
                  <option>Горячие блюда</option>
                  <option>Гарниры</option>
                  <option>Десерты</option>
                </select>
              </div>
              <div className='add-dish-window__form__fields__inputs__description'>
                <label id='description'>Описание: </label>
                <textarea id='description' wrap='soft' rows={10}></textarea>
              </div>
              <div className='add-dish-window__form__fields__inputs__div'>
                <label id='price'>Стоимость: </label>
                <input id='price' type='number' min='0'></input>
              </div>
              <div className='add-dish-window__form__fields__inputs__div'>
                <label id='weight'>Масса: </label>
                <input id='weight' type='number' min='0'></input>
              </div>
            </div>
            <button className='add-dish-window__form__fields__add-button'>Добавить</button>
          </div>
        </div>
    </div>
  )
}

export default AdminAddDishWindow