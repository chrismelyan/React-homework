import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './pages/Navlinks.module.css'
import {PATH} from "./Body";

function Header() {
    return (
        <div className={s.nav}>
            <NavLink to={'/pre-junior'} className={({isActive}) => (isActive ? s.active : s.link)}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => (isActive ? s.active : s.link)}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => (isActive ? s.active : s.link)}>Junior +</NavLink>
            {/*<NavLink to={'/error'} className={({isActive}) => (isActive ? s.active : s.link)}>Error</NavLink>*/}
        </div>
    )
}

export default Header
