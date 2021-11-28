import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Authcontext } from '../context/Authcontext'

export const Navbar = () => {
   const navigator = useNavigate()
   const auth = useContext(Authcontext)
   const logoutHandler = e =>{
      e.preventDefault()
      auth.logout()
      navigator('/')
   }
   return (
      <nav>
      <div className="nav-wrapper purple darken-2 ph2">
         <a href="/" className="brand-logo">Sorano</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Создать</NavLink></li>
            <li><NavLink to="/links">Ссылки</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
         </ul>
      </div>
   </nav>
   )
}
