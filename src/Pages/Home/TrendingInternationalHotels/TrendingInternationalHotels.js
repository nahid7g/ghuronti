import React from 'react';
import './TrendingInternationalHotels.css';
import BookingCard from '../../../components/Cards/BookingCard';
import newyork from '../../../assets/ney-york.png';
import orleans from '../../../assets/orleans.png';
import chicago from '../../../assets/chicago.png';
import orlando from '../../../assets/orlando.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';

const TrendingInternationalHotels = () => {
  const internationalHotels = [
    {
      id: 1,
      name: 'New York City Hotels',
      cost: 184,
      stayFor: 1,
      thumbnail: newyork,
    },
    {
      id: 2,
      name: 'Orlando Hotels',
      cost: 155,
      stayFor: 1,
      thumbnail: orlando,
    },
    {
      id: 3,
      name: 'New Orleans Hotels',
      cost: 184,
      stayFor: 1,
      thumbnail: orleans,
    },
    {
      id: 4,
      name: 'Chicago Hotels',
      cost: 184,
      stayFor: 1,
      thumbnail: chicago,
    },
  ];
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
      <div className='trending-international'>
        <div className='slider-arrow'>
          <p>
            <FaArrowRight />
          </p>
          <p>
            <FaArrowLeft />
          </p>
        </div>
        <div className='trending'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            loop={true}
            className='mySwiper'
          >
            {internationalHotels?.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <BookingCard
                  title={hotel.name}
                  stay={hotel.stayFor}
                  cost={hotel.cost}
                  thumbnail={hotel.thumbnail}
                  key={hotel.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrendingInternationalHotels;
