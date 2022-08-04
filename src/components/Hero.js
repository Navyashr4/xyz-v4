import React from 'react';
import Image from "../assets/img/hero-img.png";
import {IoIosArrowDroprightCircle} from "react-icons/io"

const Hero = () => {
  return(
    <section className='mt-6'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          {/* left-side hero content */}            
            {/* hero text */}
            <h1 
              className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6 text-center'
              data-aos='fade-down'
              data-aps-delay='500'>
              Some catchy investment content in 50 chars
            </h1>
            {/* paragraph text */}
            <p 
              className='max-w-[440px] leading-relaxed mb-8 text-center'
              data-aos='fade-down'
              data-aps-delay='600'>
              Content to encourage people to understand and analyze their different investment options.</p>
            {/* call to action button */}
            <button 
              className='btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base text-center'
              data-aos='fade-down'
              data-aps-delay='700'>
              Analyze your investment
              <IoIosArrowDroprightCircle 
                className='text-2xl lg:text-3xl'/>
            </button>
          {/* right-side hero image
          <div className='flex-1' data-aos='fade-up' data-aos-delay='600'>
            <img src={Image} alt='hero-img'/>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default Hero;



















{/* badge text */}
{/* <div className='flex-1'>

<div
  className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
  data-aos='fade-down'
  data-aps-delay='400'>
    <div className='flex items-center justify-between text-sm lg:text-base'>
      <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>
        75% SAVE
      </div>
      <div>For the Black Friday weekend</div>
    </div>
  </div>
</div> */}
