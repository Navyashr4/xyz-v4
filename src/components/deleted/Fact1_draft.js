import React from "react";
import Image from "../assets/img/why-img.png";

const Fact1 = ({orderImage, orderText, fact, fadeDirection}) => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div 
          className="flex flex-col lg:flex-row items-center gap-x-8"
          data-aos = {fadeDirection}
          data-aos-offset="200">
          <div className={`lg:order-${orderImage} mb-6`}>
            <img src={Image} alt="why" />
          </div>
          <div
            className={`lg:order-${orderText} max-w-[480px]`}
            // data-aos={`${orderText === 2 ? 'fade-left' : 'fade-right'}`}
            // data-aos-offset="400"
          >
            {/* <p className='section-title'>Fact #1</p> */}
            <p className="section-subtitle">
              {fact}
            </p>
            {/* <button className="btn px-6">Learn More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact1;


// "order-1 lg:order-1 mb-6"

// {`${name === itemName ? 'bg-violet text-white' : 'bg-white'}
//                 w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}



// {`${orderImage === 1 ? 'fade-up' : 'fade-down'}`}