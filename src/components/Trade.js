import React, {useState} from 'react';
import { currency } from '../data/data';
import {IoIosArrowForward} from 'react-icons/io'

const Trade = () => {
  const [itemName, setItemName] = useState('Bitcoin');
  return(
    <section className='z-30 section bg-gradient-to-b from-[#f8f9fb] to-[#fafbff]
    text-darkblue lg:pt-[320px] lg:-mt-[320px]'>
      <div className='container mx-auto'>
        {/* Section Heading */}
        <div>
          <p 
            className='section-title text-center mb-16'
            data-aos='fade-up'
            data-aos-offset='400'>
            Trade securely and market the high growth cryptocurrencies.
          </p>
        </div>

        {/* items */}
        <div 
          className='flex flex-col lg:flex-row gap-[45px]'
          data-aos='fade-up'
          data-aos-offset='450'>
          {currency.map((item, index) => {
            const {image, name, abbr, description} = item;
            return(              
              <div
                onClick={() => setItemName(name)}
                className={`${name === itemName ? 'bg-violet text-white' : 'bg-white'}
                w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={image} alt={name} className='mb-12' />
                    <div className='flex mb-4 items-center gap-x-2'>
                      <p className='text-[32px] font-bold'>{name}</p>
                      <p className='text-lg text-gray-400 font-normal'>{abbr}</p>
                    </div>
                    <div className='mb-6 text-center'>{description}</div>
                    <button
                    className={`${
                      name === itemName
                        ? 'text-white bg-blue hover:bg-blue-hover border-none pl-8 pr-6 gap-x-3'
                        : 'text-blue w-16'
                    }  border-2 border-gray-300 rounded-full h-16 
                    flex justify-center items-center`}>

                    {name === itemName && (
                      <div className='text-lg font-medium'>Start mining</div>
                    )}
                    
                    <IoIosArrowForward
                      className={`${
                        name === itemName ? 'text-2xl' : 'text-3xl'
                      }`}/>
                  </button>
                  </div>
              </div>)
          })}
        </div>

      </div>
    </section>
  );
};

export default Trade;
