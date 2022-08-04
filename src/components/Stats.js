import React from 'react';
import {HiChartBar, HiUser, HiGlobe} from 'react-icons/hi';

const Stats = () => {
  return (
    <section className='pt-24' data-aos='fade-in' data-aos-delay='800'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-6 lg:flex-row lg:justify-between items-center'>
          {/* stat 1 */}
          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiChartBar />
            </div>
            <div>
              <p className='text-2xl font-bold lg:text-[40px] lg:mb-2'>$30Cr</p>
              <p className='text-gray'>First interesting stat</p>
            </div>
          </div>

          {/* stat 2 */}
          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiUser />
            </div>
            <div>
              <p className='text-2xl font-bold lg:text-[40px] lg:mb-2'> $10M+</p>
              <p className='text-gray'>Second interesting stat</p>
            </div>
          </div>

          {/* stat 3 */}
          <div className='flex items-center gap-x-6'>
            <div className='bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue text-2xl lg:text-4xl'>
              <HiGlobe />
            </div>
            <div>
              <p className='text-2xl font-bold lg:text-[40px] lg:mb-2'>195</p>
              <p className='text-gray'>Third interesting stat</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
