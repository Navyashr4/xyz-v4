import React from 'react';
import CalcForm from './CalcForm';

const Calculate = ({handleInvTypeApp, handleAnalyseApp}) => {
  return (
    <section className='section'>
      <div 
        className='container mx-auto'>
        {/* text */}
        <div 
          className='text-center'>
          <h2
            className='section-title md:text-3xl'
          >
            Is your investment growing your wealth?
          </h2>
          <p
            className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto'
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