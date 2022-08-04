import React from "react";
import Image from "../assets/img/why-img.png";
import { facts } from "../data";

const Fact1 = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-x-8">
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-offset="200"
          >
            <img src={Image} alt="why" />
          </div>
          <div
            className="order-2 lg:order-1 max-w-[480px]"
            data-aos="fade-right"
            data-aos-offset="200"
          >
            {/* <p className='section-title'>Fact #1</p> */}
            <p className="section-subtitle">{facts[0].fact2}</p>
            {/* <button className="btn px-6">Learn More</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fact1;
