import React from 'react';
import getImages from '../Functions/getImages';

const SupportingData = ({invType}) => {
  const images = getImages(invType);
  return(
    <section 
      className='pt-12 lg:pt-24 px-6 pb-16 lg:pb-28 mx-2 lg:mx-0 '>
      <div 
        className='container mx-auto'>
        <div className='text-center max-w-[758px] mx-auto mb-24'>
          <p
            className='section-title md:text-3xl'>
              Supporting data for {invType.toLowerCase()} investments
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center space-y-16'>
        {images.map((image, idx) => {
          return(
            <div 
              className='mx-auto' 
              key={idx}>
              <img src={image} alt="" />
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default SupportingData;
