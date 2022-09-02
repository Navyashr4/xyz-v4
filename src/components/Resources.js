import React from 'react';
import getResources from '../Functions/getResources';


const Resources = ({invType}) => {
  const resourcesArray = getResources(invType);

  return(
    <section className='pt-12 lg:pt-24 mx-4 lg:mx-0'>
      <div className='container mx-auto'>
        <div 
          className='text-center max-w-[758px] mx-auto mb-24'>
          <p
            className='section-title md:text-3xl'>
              Further resources to learn about {invType.toLowerCase()} investments
          </p>
          {
              resourcesArray.map((resource) => {
                return(
                <p
                  className='text-gray mb-8'>
                    {resource}
                </p>
                )
              })
            }
        </div>
      </div>
    </section>
  );
};

export default Resources;
