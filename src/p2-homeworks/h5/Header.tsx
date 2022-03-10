import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/Navlinks.module.css'
import {PATH} from "./Body";

function Header() {
    return (
        <div className={s.nav}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => (isActive ? s.active : s.link)}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => (isActive ? s.active : s.link)}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => (isActive ? s.active : s.link)}>Junior +</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header;

