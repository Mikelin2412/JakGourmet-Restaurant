import React, { useContext } from 'react';
import logo from '../assets/images/LOGO.svg';
import icon from '../assets/images/icon-profile.png'
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import Button from '../UI/button/Button';
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
    const { user } = useContext(Context);

    return (
        <header className='header'>
            <img
                src={logo}
                alt='logo'
                width='100px'
                height='67.962px'
            />
            <nav className='navigation-menu'>
                {user.isAuth ?
                    <>
                        <ul className='navigation-menu__items'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>ГЛАВНАЯ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>МЕНЮ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bucket" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>КОРЗИНА БЛЮД</NavLink>
                            </li>
                        </ul>
                        <img className='navigation-menu__profile-icon' src={icon} alt='icon'></img>
                        <Button
                            value="ВЫЙТИ"
                            handleClick={() => {user.setIsAuth(false)}}></Button>
                    </> :
                    <>
                        <ul className='navigation-menu__items'>
                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>ГЛАВНАЯ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/menu" className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>МЕНЮ</NavLink>
                            </li>
                        </ul>
                        <Button
                            value="ВОЙТИ" 
                            handleClick={() => {user.setIsAuth(true)}}></Button>
                        <Button
                            value="ЗАРЕГИСТРИРОВАТЬСЯ"
                            handleClick={() => {user.setIsAuth(true)}}></Button>
                    </>}
            </nav>
        </header>
    )
});

export default Header;
