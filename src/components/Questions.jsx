import QuestionMark from '../assets/QuesMark.svg'
import ArrowDown from '../assets/arrowDown.svg'




export default function Questions (){
    return (
        <div className="p-8 ">
        {/*main div */} 
        <div className="text-right p-4"><h1 className= ''>اسئلة شائعة</h1></div>   
        <div className="grid-rows-6 space-y-5">
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>
            <div className="flex flex-row shadow-lg py-5 px-12  rounded-2xl bg-[#FFFF]" >
                <p className='grow w-2/3 text-right px-7'>هل برنامج الاكاديمية مجاني بالكامل </p>
                <img className='w-6 h-6 order-last flex-none ' src = {QuestionMark}/>
                <img className='w-5 h-5 order-first flex-none ' src = {ArrowDown}/>
            </div>


                        </div>
        </div>
    )
}