import React from "react";
import miniIcon  from '../assets/MINI8LOGO.svg'
import LoginButton from "../assets/login.svg"
export default function HeroSection() 
{
   return (
      <div className="second-navBar">
             <img  className="miniLogo mt-3 mr-7" alt = "academyLogo" src = {miniIcon}/>
             <ul className="nav-keyWords mt-3">
                <li>الرئيسية</li>
                <li>الجمعية</li>
                <li>هيئة التدريس</li>
             </ul>
             <img  className="Login-button mt-3 ml-5" alt = "login"  src = {LoginButton}/>
             <hr className="mt-20 border-8 border-orange-900" />
             </div>
   )
}