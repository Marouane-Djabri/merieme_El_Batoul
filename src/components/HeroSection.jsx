import React from 'react';
import LOGO from '../assets/LOGO.svg';

const HeroSection = () => {
  return (
    <div className='items-center space-y-24'>
      {/* main div */}
      <div className='separator w-full h-3 bg-orange-900'></div>
      <div className='flex justify-end py-6 items-stretch px-6'>
        <img className="w-40 h-40 order-last" src={LOGO} alt="Logo"/>
        <div className='flex-col text-right w-fit h-fit self-end px-6'>
          <h1 className='text-5xl font-semibold text-orange-900'>أكاديمية</h1>
          <h1 className='text-5xl font-semibold'>مريم البتول</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
