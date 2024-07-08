import ClassesButton from '../assets/ClassesButton.svg'


export default function EC_upperBar()
{
    return (
       <div className="bg-green-500 flex flex-row justify-between">
        {/*Main div*/}
        <div className='order-last bg-yellow-400 w-1/6 justify-end '>
        <img src = {ClassesButton} className='w-7 h-7  '/>
        </div>
        <div> القسم1</div>
        <div>
            <button>الطلاب</button>
            <button>المحادثة</button>
        </div>
       </div>
    )
} 