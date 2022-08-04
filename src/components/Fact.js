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
            className={`lg:order-${orderText} max-w-[480px] pr-6 pl-6 text-center lg:text-left`}>
            <p className='section-title'>Did you know?</p>
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
