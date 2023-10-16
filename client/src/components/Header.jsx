import React from 'react';
import Button from '../UI/button/Button';
import logo from '../assets/images/LOGO.svg';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>ГЛАВНАЯ</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>МЕНЮ</NavLink>
                </li>
                <li>
                    <NavLink to="/bucket" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>КОРЗИНА</NavLink>
                </li>
                <li>
                    <NavLink to="/reservation" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>БРОНЬ</NavLink>
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
