import React, { useContext } from 'react'
import { Context } from '..'

const TypesOfDishesNavigation = () => {
  const {dish} = useContext(Context);

  return (
    <div className='types-of-dishes-navigation'>
      <ul className='types-of-dishes-navigation__items'>
        {
          dish.types.map((item) => 
            <li key={item.id}>{item.type_name}</li>
          )
        }
      </ul>
    </div>
  )
}

export default TypesOfDishesNavigation
