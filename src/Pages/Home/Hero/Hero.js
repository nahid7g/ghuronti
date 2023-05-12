import React from 'react';
import './Hero.css';
import mecca from '../../../assets/mecca.png';
import flight from '../../../assets/flight.png';
import bus from '../../../assets/bus.png';
import hotel from '../../../assets/hotel.png';
import train from '../../../assets/train.png';
import visa from '../../../assets/visa.png';
import tour from '../../../assets/tour.png';
import whatsapp from '../../../assets/Whatsapp.png';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <h2 className='hero-title'>
          Welcome to Ghuronti! Find Tours, Flights & Hotels Packages
        </h2>
        <div className='tour-box'>
          <div className='tours'>
            <div>
              <img src={mecca} alt='Mecca' />
              <p>Hajj and Umrah</p>
            </div>
            <div>
              <img src={flight} alt='Flight' />
              <p>Flight</p>
            </div>
            <div>
              <img src={hotel} alt='Hotel' />
              <p>Hotel</p>
            </div>
            <div>
              <img src={visa} alt='Visa' />
              <p>Visa</p>
            </div>
            <div>
              <img src={tour} alt='Tours' />
              <p>Tours</p>
            </div>
            <div>
              <img src={bus} alt='Bus' />
              <p>Buses</p>
            </div>
            <div>
              <img src={train} alt='Train' />
              <p>Trains</p>
            </div>
          </div>
          {/* Hotel search form  */}
          <form>
            <div className='form-control'>
              <label htmlFor='place'>City/Hotel/Street Name</label>
              <input id='place' type='text' placeholder='Enter your city' />
            </div>
            <div className='form-control'>
              <label htmlFor='nationality'>Nationality</label>
              <select name='nationality' id='nationality'>
                <option value='bangladesh'>Bangladesh</option>
                <option value='india'>India</option>
                <option value='nepal'>Nepal</option>
                <option value='maldives'>Maldives</option>
              </select>
            </div>
            <div className='form-control-2'>
              <div className='half-form-control'>
                <label htmlFor='place'>Check in</label>
                <input id='place' type='text' placeholder='Enter your city' />
              </div>
              <div className='half-form-control'>
                <label htmlFor='place'>Check out</label>
                <input id='place' type='text' placeholder='Enter your city' />
              </div>
            </div>
            <div className='form-control'>
              <label htmlFor='persons'>Rooms and Guiest</label>
              <select name='persons' id='persons'>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
              </select>
            </div>
            <div className='search'>
              <button className='searchBtn' type='submit'>
                Search Hotels
              </button>
            </div>
          </form>
          {/* Social media icon  */}
          <div className='whatsapp-icon'>
            <img src={whatsapp} alt='whatsapp' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
