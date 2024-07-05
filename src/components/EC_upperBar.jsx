
import arroxGauche from '../assets/play_arrow.svg'

export default function EC_upperBar()
{
    return (
        <div>
       <div className="flex flex-row justify-end mr-5 p-4 space-x-4 border-b-4 border-indigo-500">
            <h1 className='order-last'>الاقسام</h1>
            <img src = {arroxGauche} className='order-2 self-end px-3'/>
            <p>قسم</p>
       </div>
       </div>
    )
} 