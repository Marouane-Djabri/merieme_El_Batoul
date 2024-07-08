import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
const ButtonUpperBar = () => {
  return (
    <div>
    <button>
      <CiMenuBurger/>
    </button>
     <div className="mx-auto">
     {/*the div for the list*/} 
     <ul className="md:space-x-3 flex flex-col text-right"> 
         <li className="text-md font-semibold"> الرئيسية</li>
         <li className="text-md font-semibold">عن الجمعية</li>
         <li className="text-md font-semibold">هيئة التدريس</li>
     </ul>
     </div>
     </div>
  )
}

export default ButtonUpperBar
