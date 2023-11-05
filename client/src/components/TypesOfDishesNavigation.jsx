import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '..'

const TypesOfDishesNavigation = observer(() => {
  const {dish} = useContext(Context);
  console.log(dish.selectedType.id);

  return (
    <div className='types-of-dishes-navigation'>
      <ul className='types-of-dishes-navigation__items'>
        {
          dish.types.map((item) => 
            <li className={(item.id === dish.selectedType.id) ? 'types-of-dishes-navigation__items__type active-type' : 'types-of-dishes-navigation__items__type'}
              key={item.id}
              onClick={() => dish.setSelectedType(item)}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
})

export default TypesOfDishesNavigation
