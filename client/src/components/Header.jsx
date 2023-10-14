import React from 'react';
import Button from '../UI/button/Button';
import logo from '../assets/images/LOGO.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
        <img 
            src={logo}
            alt='logo'
            width='100px'
            height='67.962px'
        />
        <nav className='navigation-menu'>
            <ul className='navigation-menu__items'>
                <li>
                    <Link to="/">ГЛАВНАЯ</Link>
                </li>
                <li>
                    <Link to="/menu">МЕНЮ</Link>
                </li>
                <li>
                    <Link to="/bucket">КОРЗИНА</Link>
                </li>
                <li>
                    <Link to="/reservation">БРОНЬ</Link>
                </li>
            </ul>
            <Button
                value="ЗАКАЗ СТОЛИКА"
            />
        </nav>
    </header>
  )
};

export default Header;
