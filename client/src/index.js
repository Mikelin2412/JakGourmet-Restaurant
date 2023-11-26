import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasketStore from './store/BasketStore';
import DishStore from './store/DishStore';
import FeedbackStore from './store/FeedbackStore';
import OrderStore from './store/OrderStore';
import UserStore from './store/UserStore';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    dish: new DishStore(),
    orders: new OrderStore(),
    feedbacks: new FeedbackStore(),
    basket: new BasketStore()
  }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);