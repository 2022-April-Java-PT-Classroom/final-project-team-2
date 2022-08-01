import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => {
    return (

    <div className={style.header}>
     <div className={style.nav}>
        <ul className={style.navList}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/adhd'}>ADHD</NavLink>
            <NavLink to={'/autism'}>Autism</NavLink>
            <NavLink to={'/parent'}>Parent</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/pages/quotes'}>Quotes</NavLink>
        </ul>
     </div>
    </div>
    )
}

export default Header;