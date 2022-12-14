import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = ({ calculator, scrollToCalculator }) => {
  console.log(calculator);
  return (
    <section className="mt-6">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="flex flex-col items-center">
          {/* left-side hero content */}
          {/* hero text */}
          <h1
            className="text-[32px] lg:text-[64px] font-bold leading-tight mb-6 text-center"
            data-aos="fade-down"
            data-aps-delay="800"
          >
            What&#39;s wrong with my Investment?
          </h1>
          {/* paragraph text */}
          <div
            className="max-w-[850px] leading-relaxed mb-8 text-center lg:text-lg"
            data-aos="fade-down"
            data-aps-delay="600"
          >
           We evaluate your investment on 4 key parameters and score it on a scale of 1 to 10: 
            <p className="text-indigo-400 font-semibold"> Returns | Liquidity | Safety | Tax</p>
          </div>
          {/* call to action button */}
          {/* <button
            className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base text-center"
            data-aos="fade-down"
            data-aps-delay="700"
            onClick={() => scrollToCalculator(calculator)}
          >
            Analyze your investment
            <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
          </button> */}
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
