import React from 'react';
import './Header.css';
import logo from '../../assets/softypy-logo.png';
import searchIcon from '../../assets/search-icon.png';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar-left'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
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
      </div>
    </nav>
  );
};

export default Navbar;
