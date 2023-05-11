import React from 'react';
import './Banner.css';
import banner from '../../../assets/banner.png';

const Banner = () => {
  return (
    <div className='banner'>
      <img src={banner} alt='Banner' />
    </div>
  );
};

export default Banner;
