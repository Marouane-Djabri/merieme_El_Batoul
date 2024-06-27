import Facebook from "../assets/facebook_icon.svg"
import Instagram from "../assets/instagram_icon.svg"
import Telegram from "../assets/telegram_icon.svg"
import { Fragment } from "react";

export default function UpperBar() {
    return (
       <div className="parent w-full bg-[#E5E7E6] flex flex-row p-1">
             <div className="FbTgIng mt-2 ml-5 ">
               <img className="fB w-5 h-5 " alt = "FBAccount" src={Facebook}/>
               <img className="TEG w-5 h-5 " alt = "TEGAccount" src={Telegram}/>
               <img className="INS w-5 h-5" alt = "INGAccount" src={Instagram}/>
              </div>
              <ul className="upper_about mt-3 mr-5 font-medium">
                <li>اسئلة شائعة</li>
                <li>|</li>
                <li>عن الجمعية</li>
                <li>|</li>
                <li>المزيد</li>
            </ul>

            
       </div>
    ) ; 
}
