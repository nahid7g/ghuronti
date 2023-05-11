import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';
import quote2 from '../../../assets/quote2.png';

const Testimonials = () => {
  return (
    <section>
      <h2 className='trending-title'>
        Customer satisfaction is our top priority
      </h2>
      <div className='info'>
        <p>
          Our clients praise us for our great results, personable service,
          expert knowledge. Here are what just a few of them had to say
        </p>
      </div>
      {/* Carousels  */}
      <div className='slides'>
        <div className='quote2'>
          <img src={quote2} alt='quote' />
        </div>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='comment'>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='comment'>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='comment'>
              Your thoughtfulness and support of Ghuronti is very much
              appreciated. You are a very dear friend to the Chamber, and I want
              to assure you that your confidence in Ghuronti will be justified.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
