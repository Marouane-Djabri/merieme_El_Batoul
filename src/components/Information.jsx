
import calendar from '../assets/calendar.svg'
import clock from '../assets/clock.svg'
import creditCard from '../assets/creadit-card.svg'
import laptop from '../assets/laptop.svg'
import calendarPlus from '../assets/plus-calendar.svg'

export default function Information () 
{
    return (
        <div className='square bg-[#D9D9D9] h-40 mr-16 ml-16 mt-14 rounded-lg mb-20 flex justify-center items-center'>
        <div className='flex flex-nowrap justify-around w-full'>
            <div className='flex flex-row items-center'>
                <div className='mr-2'>
                    <h1 className='font-bold'>معلومات</h1>
                    <h2 className='font-medium'>معلومات</h2>
                </div>
                <img src={calendar} alt="Calendar" />
            </div>
            <div className='flex flex-row items-center'> 
                <div className='mr-2'>
                    <h1 className='font-bold'>معلومات</h1>
                    <h2 className='font-medium'>معلومات</h2>
                </div>
                <img src={calendarPlus} alt="Calendar Plus" />
            </div>
            <div className='flex flex-row items-center'>
                <div className='mr-2'>
                    <h1 className='font-bold'>معلومات</h1>
                    <h2 className='font-medium'>معلومات</h2>
                </div>
                <img src={laptop} alt="Laptop" />
            </div>
            <div className='flex flex-row items-center'>
                <div className='mr-2'>
                    <h1 className='font-bold'>معلومات</h1>
                    <h2 className='font-medium'>معلومات</h2>
                </div>
                <img src={clock} alt="Clock" />
            </div>
            <div className='flex flex-row items-center'>
                <div className='mr-2'>
                    <h1 className='font-bold'>معلومات</h1>
                    <h2 className='font-medium'>معلومات</h2>
                </div>
                <img src={creditCard} alt="Credit Card" />
            </div>
        </div>
    </div>    
)
}