// import React from "react";
// import miniIcon  from '../assets/MINI8LOGO.svg'
// import LoginButton from "../assets/login.svg"
// export default function HeroSection() 
// {
//    return (
//       <div className="second-navBar">
//              <img  className="miniLogo mt-3 mr-7" alt = "academyLogo" src = {miniIcon}/>
//              <ul className="nav-keyWords mt-3">
//                 <li>الرئيسية</li>
//                 <li>الجمعية</li>
//                 <li>هيئة التدريس</li>
//              </ul>
//              <img  className="Login-button mt-3 ml-5" alt = "login"  src = {LoginButton}/>
//              <hr className="mt-20 border-8 border-orange-900" />
//              </div>
//    )
// }
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