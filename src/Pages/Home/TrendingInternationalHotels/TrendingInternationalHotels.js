import React from 'react';
import './TrendingInternationalHotels.css';
import BookingCard from '../../../components/Cards/BookingCard';

const TrendingInternationalHotels = () => {
  return (
    <section className='trending-i-hotel'>
      <h2 className='trending-title'>
        Trending International Destinations Hotels
      </h2>
      <div className='info'>
        <p>
          The world is now just a hop, skip and jump away and here’s how you can
          make your travel easier and better.
        </p>
      </div>
      <div className='trending'>
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </section>
  );
};

export default TrendingInternationalHotels;
