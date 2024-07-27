// import QuranIconi from "../assets/QoranIcon.svg"
// import Facebook from "../assets/facebook_icon.svg"
// import Instagram from "../assets/instagram_icon.svg"
// import Telegram from "../assets/telegram_icon.svg"


// export default function AboutUs ()
// {
//     return (
//        < div className="p-8 bg-[#B67332]">
//         <div className="flex flex-row space-x-4 justify-end mr-7">
//         <h1 className="text-xl font-semibold">اكاديمية مريم البتول</h1>
//         <img className=" w-9 h-9" src = {QuranIconi}/>
//         </div>
//         <div className="FbTgIng mt-2 ml-5 justify-end  p-8 mr-7">
//                <img className="fB w-5 h-5 " alt = "FBAccount" src={Facebook}/>
//                <img className="TEG w-5 h-5 " alt = "TEGAccount" src={Telegram}/>
//                <img className="INS w-5 h-5" alt = "INGAccount" src={Instagram}/>
//          </div>
//          <div className="flex flex-row">
//          <div className="px-64">
//             <ul className="text-right space-y-4 font-semibold text-white">
//                 <li>المزيد</li>
//                 <li>سياسة</li>
//                 <li>الخصوصية</li>
//                 <li>سياسة ملفات الارتباط</li>
//                 <li>خريطة الموقع</li>
//             </ul>
//             </div>
//          <div className="md:w-1/2 w-full text-right order-last text-white font-semibold ">
//             <p className="">برنامجُ أكاديميةِ زادٍ - برنامجٌ إلكترونيٌّ تفاعليٌّ عن طريقِ الإنترنت *
//                 يصلكَ أينما كنتَ، ويتيحُ لكَ اكتسابَ العلومِ الشرعيةِ 
//                 وفقَ المبادئِ الأساسيةِ للإسلامِ الوسطيِّ المستندِ إلى القرآنِ والسُّنّةِ وبفهمِ السّلفِ الصالحِ.</p>
//          </div>
        
//          </div>
//         </div>
//     )
// }
import QuranIconi from "../assets/QoranIcon.svg"
import Facebook from "../assets/facebook_icon.svg"
import Instagram from "../assets/instagram_icon.svg"
import Telegram from "../assets/telegram_icon.svg"


export default function AboutUs ()
{
    return (
       < div className="p-8 bg-[#B67332]">
        <div className="flex flex-row space-x-4 justify-end mr-7">
        <h1 className="text-xl font-semibold">اكاديمية مريم البتول</h1>
        <img className=" w-9 h-9" src = {QuranIconi}/>
        </div>
        <div className="FbTgIng mt-2 ml-5 justify-end  p-8 mr-7">
               <img className="fB w-5 h-5 " alt = "FBAccount" src={Facebook}/>
               <img className="TEG w-5 h-5 " alt = "TEGAccount" src={Telegram}/>
               <img className="INS w-5 h-5" alt = "INGAccount" src={Instagram}/>
         </div>
         <div className="flex flex-row">
         <div className="px-64">
            <ul className="text-right space-y-4 font-semibold text-white">
                <li>المزيد</li>
                <li>سياسة</li>
                <li>الخصوصية</li>
                <li>سياسة ملفات الارتباط</li>
                <li>خريطة الموقع</li>
            </ul>
            </div>
         <div className="md:w-1/2 w-full text-right order-last text-white font-semibold ">
            <p className="">برنامجُ أكاديميةِ زادٍ - برنامجٌ إلكترونيٌّ تفاعليٌّ عن طريقِ الإنترنت *
                يصلكَ أينما كنتَ، ويتيحُ لكَ اكتسابَ العلومِ الشرعيةِ 
                وفقَ المبادئِ الأساسيةِ للإسلامِ الوسطيِّ المستندِ إلى القرآنِ والسُّنّةِ وبفهمِ السّلفِ الصالحِ.</p>
         </div>
        
         </div>
        </div>
    )
}