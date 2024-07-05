import React ,{useState} from 'react' 
import Sturent from './Sturent.jsx'
import Chat from './Chat.jsx'
export default function EC_navigation ()
{
   const [Tab, setTab] = useState("") ;

  const  ToggleTab = (tab) =>{
      setTab(tab)

   }
    return (
        <div>
        <div className='flex flex-row justify-center space-x-5'>
          <h1 className={`font-semibold cursor-pointer   ${Tab === 'student' ? 'underline' : ''}`}
           onClick={() => ToggleTab('student')}> التلاميذ</h1>
           <h1 className={`font-semibold cursor-pointer  ${Tab === 'chat' ? 'underline' : ''}`}
           onClick={() => ToggleTab('chat')}>الدردشة</h1>
        </div>
        <div>
            {/* {Tab === 'student' && <Sturent/>}
            {Tab === 'chat' && <Chat/>} * */} 
        </div>
      </div>      
    ) 

}