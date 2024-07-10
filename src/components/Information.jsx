
import calendar from '../assets/calendar.svg'
import clock from '../assets/clock.svg'
import creditCard from '../assets/creadit-card.svg'
import laptop from '../assets/laptop.svg'
import calendarPlus from '../assets/plus-calendar.svg'
import React from 'react'

const Information = () => {
  return (
    <div className='p-8  mt-5 flex flex-col rounded-lg border-2 border-orange-900  ml-5 mr-5 space-y-5 sm:flex sm:flex-row sm:justify-between'>
      <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-col sm:mt-4'>
        <div className='flex flex-row space-x-3'>
        <img className='w-6 h-6' src= {calendar}/>
        <p>معلومات</p>
        </div>
        <div><p className='font-bold  text-right'>معلومات</p></div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-col'>
        <div className='flex flex-row space-x-3'>
        <img className='w-6 h-6' src= {creditCard}/>
        <p>معلومات</p>
        </div>
        <div><p className='font-bold  text-right'>معلومات</p></div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-col'>
        <div className='flex flex-row space-x-3'>
        <img className='w-6 h-6' src= {laptop}/>
        <p>معلومات</p>
        </div>
        <div><p className='font-bold  text-right'>معلومات</p></div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-col'>
        <div className='flex flex-row space-x-3'>
        <img className='w-6 h-6' src= {calendarPlus}/>
        <p>معلومات</p>
        </div>
        <div><p className='font-bold  text-right'>معلومات</p></div>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:flex sm:flex-col'>
        <div className='flex flex-row space-x-3'>
        <img className='w-6 h-6' src= {clock}/>
        <p>معلومات</p>
        </div>
        <div><p className='font-bold  text-right'>معلومات</p></div>
      </div>
      </div>
  )
}

export default Information
