import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/softypy-logo.png';
import searchIcon from '../../assets/search-icon.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='Logo' />
          </a>
        </div>
        <p>
          <a href='/'>About Us</a>
        </p>
      </div>
      <div className='navbar-right'>
        <div className='search-box'>
          <input type='text' placeholder='Search Flight, Hotel, Visa' />
          <div className='search-icon'>
            <img src={searchIcon} alt='search-icon' />
          </div>
        </div>
        <div className='login-signup'>
          <p className='nav-btn login-btn'>
            <a href='/'>Log In</a>
          </p>
          <p className='nav-btn signup-btn'>
            <a href='/'>Sign Up</a>
          </p>
        </div>
        {/* Navbar Sm  */}
        <div className='login-signup-sm'>
          <div onClick={() => setToggle(!toggle)}>
            <FaBars />
          </div>
          <nav className={toggle ? 'menu-sm showmenu' : 'menu-sm hidemenu'}>
            <ul>
              <li>
                <a href='/'>Login</a>
              </li>
              <li>
                <a href='/'>Register</a>
              </li>
              <li>
                <input type='text' placeholder='Search Flight, Hotel, Visa' />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
