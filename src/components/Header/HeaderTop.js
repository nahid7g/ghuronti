import React from 'react';
import './Header.css';
import phoneIcon from '../../assets/phone.png';

const HeaderTop = () => {
  return (
    <div className='header-top'>
      <div className='header-top-left'>
        <img src={phoneIcon} alt='Phone icon' />
        <p>+88-01885-XXX-XXX</p>
      </div>
      <div>
        <a href='/'>Contact Us</a>
      </div>
    </div>
  );
};

export default HeaderTop;
