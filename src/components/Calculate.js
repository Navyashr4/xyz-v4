import React from 'react';
import CalcForm from './CalcForm';

const Calculate = ({handleInvTypeApp, handleAnalyseApp}) => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* text */}
        <div 
          className='text-center'
          data-aos='fade-in'
          data-aos-offset='100'>
          <h2
            className='section-title md:text-3xl'
            data-aos='fade-in'
            data-aos-offset='100'
          >
            Is your investment growing your wealth?
          </h2>
          <p
            className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto'
            data-aos='fade-up'
            data-aos-offset='450'
          >
            Our investment x-ray tool objectively analyses your investment and evaluates on 4 parameters : Growth, Risk, Liquidity and Matching your investment objective
          </p>
        </div>
        {/* form */}
        <CalcForm handleInvTypeApp={handleInvTypeApp} handleAnalyseApp={handleAnalyseApp}/>
      </div>
    </section>
  );
};

export default Calculate;