import React from 'react';
import './Cards.css';

const BookingCard = ({ title, stay, cost, thumbnail }) => {
  return (
    <div className='booking-card'>
      <div className='booking-container'>
        <div className='booking-thumbnail'>
          <img src={thumbnail} alt='New york' />
        </div>
        <div className='booking-body'>
          <div className='booking-title'>
            <div className='ht-title'>
              <h3>{title}</h3>
              <p>{stay} Night</p>
            </div>
            <div className='cost'>
              <p>
                <span>Starts from</span> ${cost}
              </p>
            </div>
          </div>
          <div className='btn-view'>
            <button className='viewBtn'>
              <a href='/'>View Details</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
