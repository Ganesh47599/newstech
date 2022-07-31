import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <>
<header>
  <div className="container container-flex">
    <div className='logoContainer'>
      <img src={logo} alt="logo" className='logo'/>

    </div>
    <nav>
      <div className='list'>
        <NavLink exact className="listItem" activeClassName="activeItem" to="/">Home</NavLink>
        <NavLink  className="listItem" activeClassName="activeItem" to="/News">News</NavLink>
      
        <NavLink  className="listItem" activeClassName="activeItem" to="/Inventory">Inventory</NavLink>
        <NavLink  className="listItem" activeClassName="activeItem" to="/about">About</NavLink>
        <NavLink  className="listItem" activeClassName="activeItem" to="/Contact">Contact</NavLink>
      
      
      </div>
    </nav>

  </div>

</header>




    </>
  )
}

export default Navbar