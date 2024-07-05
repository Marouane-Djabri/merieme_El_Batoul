//import React from 'react'
import MainLogo from '../assets/LOGO.svg'
export default function RightHomePage (){
    return (
     <div>
        <div className="static">
        <img className="mainLogo absolute right-10 top-40 " alt = "Our Logo" src = {MainLogo}/>
       </div>
    <h1 className="BigName font-bold">اكاديمية</h1>
    <h1 className="pied font-normal">مريم البتول</h1>
    <section className="relative flex justify-end">
    <h1 className="coloredLine text-orange-900 mr-28 mt-44 font-extrabold">مالا يسع المؤمن جهله</h1>
 </section>
 <div className="flex justify-end">
     <p className="max-w-md  p-4 rounded-lg mr-16 text-right">
     ابدأ رحلتك لمدةِ عامَين كامِلَين مجَّانًا مع برنامج أكاديمية زاد، عبر الإنترنت وقناة زاد الفضائية، وتعلَّمْ مبادئَ العلومِ الشرعية 
     واللغة العربية وما لا يسع المثقفَ الشرعيَّ المعاصرَ جهلُهُ
     ، من خلال إصداراتٍ احترافيةٍ، يشرحها نخبةٌ من أهل الاختصاص، وأنت في بيتك، وأنت في أي مكان.
     </p>
 </div>
 </div>
    )
}
  