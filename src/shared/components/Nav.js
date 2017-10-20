import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav class='navbar navbar-light bg-light rounded navbar-expand-md'>
    <ul class='navbar-nav mr-auto'>
      <li class='nav-item'>
        <NavLink to={`/items`} className='nav-link'>
          Items
        </NavLink>
      </li>
    </ul>
  </nav>
)

export default Nav
