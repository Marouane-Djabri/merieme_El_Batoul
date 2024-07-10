import React, { useState } from 'react'
import QuesMark from '../assets/QuesMark.svg'
const AccordianMenu = ({answer , title}) => {
    const [AccordianOpen , setAccordianOpen] = useState(false) ; 
  return (
    <div>
    <button className='flex  w-full ' onClick={() => setAccordianOpen(!AccordianOpen)}>
        <div className='flex flex-row items-stretch grow order-last  gap-1 justify-end'>
        <span className='text-right order-last   '>{title}</span>
        <img src = {QuesMark} className='w-5 h-5 self-end order-last'/>
        </div>
        {AccordianOpen ? <span>-</span> : <span>+</span>}
    </button>
    <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${AccordianOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
    <div className='overflow-hidden py-1 text-slate-700'>{answer} </div>
    </div>
    </div>
  )
}

export default AccordianMenu
