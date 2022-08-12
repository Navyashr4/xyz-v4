import React from 'react';
import Nav from './Nav';
import { CgMenuRight } from 'react-icons/cg';
import { CgOpenCollective } from 'react-icons/cg';


const Header = ({setNavMobile}) => {
  return (
    <header className='py-[30px] lg:pt-[60px]'
    data-aos='fade-down'
    data-aos-delay='700'
    data-aos-duration='2000'
    >
      <div className='container mx-auto flex items-center justify-between'>

        {/* Logo and Brand */}
        <a href = '#'>
          <div className='flex items-center gap-x-2 lg:gap-x-4'>
            <CgOpenCollective className='text-xl md:text-4xl'/>
            <p className='text-indigo-300 text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] font-normal'>
              Gryy's jrrjf hfge asug gwinsrtifn ?
            </p>
          </div>
        </a>

        {/* Nav Menu desktop*/}
        <div className='hidden lg:flex gap-x-[55px]'>
          <Nav />
          {/* <AccountBtns /> */}
        </div>

        {/* Nav Menu Mobile Open */}
        <div className='lg:hidden cursor-pointer' onClick={() => setNavMobile(true)}>
          <CgMenuRight className='text-xl md:text-2xl' />
        </div>

      </div>
    </header>
  );
};

export default Header;
