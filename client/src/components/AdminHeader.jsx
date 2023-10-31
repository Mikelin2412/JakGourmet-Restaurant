import React, { useContext } from 'react';
import logo from '../assets/images/LOGO.svg';
import icon from '../assets/images/icon-profile.png'
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import Button from '../UI/button/Button';
import { observer } from 'mobx-react-lite';
import { MAIN_PAGE_ROUTE, MENU_ROUTE, BUCKET_ROUTE } from '../utils/consts'

const AdminHeader = observer(() => {
    const { user } = useContext(Context);

    const logout = () => {
        user.setUser({});
        user.setIsAuth(false);
        user.setRole('');
        localStorage.removeItem('token');
        localStorage.clear();
    }

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
                        <NavLink to={MAIN_PAGE_ROUTE} className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>ГЛАВНАЯ</NavLink>
                    </li>
                    <li>
                        <NavLink to={MENU_ROUTE} className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>МЕНЮ</NavLink>
                    </li>
                    <li>
                        <NavLink to={BUCKET_ROUTE} className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>КОРЗИНА БЛЮД</NavLink>
                    </li>
                    <li>
                        <NavLink to={BUCKET_ROUTE} className={({ isActive }) => (isActive ? 'nav-links active' : 'nav-links')}>ЗАКАЗЫ</NavLink>
                    </li>
                </ul>
                <img className='navigation-menu__profile-icon' src={icon} alt='icon'></img>
                <NavLink to={MAIN_PAGE_ROUTE}>
                    <Button
                        value="ВЫЙТИ"
                        handleClick={logout}></Button>
                </NavLink>
            </nav>
        </header>
    )
});

export default AdminHeader;
