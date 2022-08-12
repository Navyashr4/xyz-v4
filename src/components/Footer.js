import React from 'react';

import Logo from '../assets/img/logo.svg';
import VisaImg from '../assets/img/visa.png';
import MastercardImg from '../assets/img/mastercard.png';
import BitcoinImg from '../assets/img/bitcoin.png';

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from 'react-icons/io';

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0'  data-aos='fade-in'>

      {/* copy & social */}
      <div className='py-12'>
        <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0'>
          {/* copy text */}
          <div>&copy; 2022 XYZ. All rights reserved.</div>
          {/* social icons */}
          <div className='flex text-2xl gap-x-8'>
            <a className='hover:text-blue transition' href='#'>
              <IoLogoYoutube />
            </a>
            <a className='hover:text-blue transition' href='#'>
              <IoLogoInstagram />
            </a>
            <a className='hover:text-blue transition' href='#'>
              <IoLogoTwitter />
            </a>
            <a className='hover:text-blue transition' href='#'>
              <IoLogoLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;