import React from 'react';
import './Footer.css';
import {
  FaPhoneAlt,
  FaMapMarker,
  FaInstagramSquare,
  FaWhatsapp,
  FaTelegram,
  FaTwitterSquare,
  FaFacebook,
  FaMailBulk,
  FaChrome,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div>
          <div className='footer-title'>
            <p>BD Office address</p>
          </div>
          <div>
            <p>
              <FaPhoneAlt /> +8801XXXXXXXX
            </p>
            <p>
              <FaPhoneAlt /> +8801XXXXXXXX
            </p>
            <p>
              <FaMapMarker /> Dhaka Tower, L XX, XX Topkhana Rd, Purana Paltan,
              Dhaka XX
            </p>
          </div>
        </div>
        <div>
          <div className='footer-title'>
            <p>USA Office Address</p>
          </div>
          <div>
            <p>
              <FaPhoneAlt /> +1 470 XXXXXX(USA)
            </p>
            <p>
              <FaPhoneAlt /> +1 470 XXXXXX(USA)
            </p>
            <p>
              <FaMapMarker /> USA Address: XXX Arbor Creek Ln, Doraville, GA
              XXXX
            </p>
          </div>
        </div>
        <div>
          <div className='footer-title'>
            <p>Social Media</p>
          </div>
          <div className='social-icons'>
            <a href='/'>
              <FaFacebook />
            </a>
            <a href='/'>
              <FaTwitterSquare />
            </a>
            <a href='/'>
              <FaTelegram />
            </a>
            <a href='/'>
              <FaWhatsapp />
            </a>
            <a href='/'>
              <FaInstagramSquare />
            </a>
          </div>
          <div>
            <p>
              <FaMailBulk /> XYZ@gmail.com
            </p>
            <p>
              <FaChrome /> www.XYZ.com
            </p>
          </div>
        </div>
        <div>
          <div className='footer-title'>
            <p>Help</p>
          </div>
          <div>
            <p>
              <a href='/'>FAQ</a>
            </p>
            <p>
              <a href='/'>Privacy Policy</a>
            </p>
            <p>
              <a href='/'>Terms & Condition</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
