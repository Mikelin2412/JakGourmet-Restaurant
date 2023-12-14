import React, { useContext, useState } from 'react'
import { Context } from '..';
import { addDish } from '../http/DishAPI';
import '../styles/AdminAddDishWindow.css'

const AdminAddDishWindow = ({ active, setActive }) => {
  const { dish } = useContext(Context);
  const [name, setName] = useState('');
  const [type, setType] = useState(0);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [image, setImage] = useState(null);

  const sendNewDish = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', `${price}`);
    formData.append('weight', `${weight}`);
    formData.append('img', image);
    formData.append('dishTypeId', `${type}`);
    addDish(formData)
      .then(data => {
        window.location.reload()
      })
      .catch(err => alert(err.response.data.message));
  }

  const addImage = (e) => {
    setImage(e.target.files[0]);
  }

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
              <input
                id='name'
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className='add-dish-window__form__fields__inputs__type-and-image'>
              <div className='add-dish-window__form__fields__inputs__type-and-image__type'>
                <label id='type'>Тип блюда: </label>
                <select id='type' required={true} onChange={(e) => setType(e.target.value)}>
                  {
                    dish.types.map((type) => <option
                      key={type.id}
                      value={type.id}>{type.name}</option>)
                  }
                </select>
              </div>
              <div className='add-dish-window__form__fields__inputs__type-and-image__image'>
                <label id='image'>Добавить изображение: </label>
                <input
                  id='image'
                  type='file'
                  accept='.jpg, .jpeg, .png'
                  onChange={addImage}></input>
              </div>
            </div>
            <div className='add-dish-window__form__fields__inputs__description'>
              <label id='description'>Описание: </label>
              <textarea
                id='description'
                wrap='soft'
                rows="10"
                cols="20"
                value={description}
                onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className='add-dish-window__form__fields__inputs__div'>
              <label id='price'>Стоимость: </label>
              <input
                id='price'
                type='number'
                min='0'
                defaultValue={price}
                onChange={(e) => setPrice(Number(e.target.value))}></input>
            </div>
            <div className='add-dish-window__form__fields__inputs__div'>
              <label id='weight'>Масса: </label>
              <input
                id='weight'
                type='number'
                min='0'
                defaultValue={weight}
                onChange={(e) => setWeight(Number(e.target.value))}></input>
            </div>
          </div>
          <button className='add-dish-window__form__fields__add-button'
            onClick={sendNewDish}>Добавить</button>
        </div>
      </div>
    </div>
  )
}

export default AdminAddDishWindow