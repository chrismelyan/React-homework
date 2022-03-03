import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className={s.navlinks}>
            <NavLink to="/pre-junior">PreJunior</NavLink>
            <NavLink to="/junior">Junior</NavLink>
            <NavLink to="/junior-plus">Junior +</NavLink>
        </div>
    )
}

export default Header
