import React from 'react';
import Hero from './Hero/Hero';
import './Home.css';
import TrendingInternationalHotels from './TrendingInternationalHotels/TrendingInternationalHotels';
import Banner from './Banner/Banner';
import TrendingIndianHotels from './TrendingIndianHotels/TrendingIndianHotels';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='home-container'>
        <TrendingInternationalHotels />
        <Banner />
        <TrendingIndianHotels />
        <Testimonials />
      </div>
    </>
  );
};

export default Home;
