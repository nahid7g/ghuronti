import React from 'react';
import './TrendingIndianHotels.css';
import BookingCard from '../../../components/Cards/BookingCard';
import shiliguri from '../../../assets/shiliguri.png';
import kerala from '../../../assets/kerala.png';
import yotel from '../../../assets/yotel.png';
import radisson from '../../../assets/radisson.png';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';

const TrendingIndianHotels = () => {
  const indianHotels = [
    {
      id: 1,
      name: 'Lemon Tree Siliguri',
      cost: 153,
      stayFor: 1,
      thumbnail: shiliguri,
    },
    {
      id: 2,
      name: 'Euro Hostel Kerala',
      cost: 43,
      stayFor: 1,
      thumbnail: kerala,
    },
    {
      id: 3,
      name: 'Yotel Hotel Goa',
      cost: 40,
      stayFor: 1,
      thumbnail: yotel,
    },
    {
      id: 4,
      name: 'Hotel Radisson',
      cost: 153,
      stayFor: 1,
      thumbnail: radisson,
    },
  ];
  return (
    <section>
      <h2 className='trending-title'>Trending Indian Destinations Hotels</h2>
      <div className='info'>
        <p>
          India’s diverse topography, history and culture offers enough
          experiences to fulfil any type of wanderlust.
        </p>
      </div>
      <div className='trenging-indian'>
        <div className='trending'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            loop={true}
            className='mySwiper'
          >
            {indianHotels?.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <BookingCard
                  title={hotel.name}
                  stay={hotel.stayFor}
                  cost={hotel.cost}
                  thumbnail={hotel.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingIndianHotels;
