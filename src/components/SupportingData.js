import React from 'react';
import Image1 from '../assets/img/feature-1-img.png';
import Image2 from '../assets/img/feature-2-img.png';
import Image3 from '../assets/img/feature-3-img.png';

const getImages = (invType) => {
  let images = [];
  switch(invType){
    case "Bank Fixed Deposit" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Gold" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Real Estate" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    case "Guaranteed Income Plan" : {
      images = [
        Image1, 
        Image2, 
        Image1
      ]
      break;
    }

    default : {
      images = [];
    }
  }

  return images;

}

const SupportingData = ({invType}) => {
  const images = getImages(invType);
  return(
    <section 
      className='pt-12 lg:pt-24 px-6 pb-16 lg:pb-28'
      data-aos='fade-in'
      data-aos-offset='300'>
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
