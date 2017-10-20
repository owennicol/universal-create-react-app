import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className='navbar navbar-light bg-light rounded navbar-expand-md'>
    <ul className='navbar-nav mr-auto'>
      <li className='nav-item'>
        <NavLink to={`/items`} className='nav-link'>
          Items
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
