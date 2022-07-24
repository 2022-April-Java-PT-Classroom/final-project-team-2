import { NavLink } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (

    <div className={style.stick}>
        <div className={StyleSheet.header}>
            <h1>Think Differently</h1>
            <ul className={style.navList}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/adhd'}>ADHD</NavLink>
            <NavLink to={'/autism'}>Autism</NavLink>
            <NavLink to={'/parent'}>Parent</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            </ul>
        </div>
    </div>
    )
}

export default Header;