import React from 'react';
import BookingCard from '../../../components/Cards/BookingCard';

const TrendingIndianHotels = () => {
  return (
    <section>
      <h2 className='trending-title'>Trending Indian Destinations Hotels</h2>
      <div className='info'>
        <p>
          India’s diverse topography, history and culture offers enough
          experiences to fulfil any type of wanderlust.
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

export default TrendingIndianHotels;
