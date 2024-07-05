import flag from '../assets/Flag_of_Algeria.svg'


export default function Avis () {
   return (
    <div className="">
        {/*Main div*/}
        <div className="">
        <h1 className="text-right px-10">اراء المشاركين</h1>
        </div>
        <div className="flex items-center justify-center h-screen flex-col ">
        <div className="bg-green-400 w-24 h-24 rounded-full relative top-11 overflow-hidden">
    <img className="absolute inset-0 w-full h-full object-cover" src={flag} alt="flag" />
</div>
            <div className="w-2/5 h-2/3 bg-white shadow-slate-300 shadow-xl  rounded-3xl ">
            <h1 className='text-9xl text-[#DAAB3A] text-right px-10 py-5' >&quot;</h1>
            <div className=' justify-self-center relative bottom-20'>
            <p className='text-right text-wrap p-7 font-semibold '>تجربتي في أكاديمية البتول لتحفيظ القرآن كانت تجربة مميزة ورائعة
                 بكل المقاييس. لقد وجدت في الأكاديمية بيئة تعليمية ملهمة ومحفزة،
                  حيث يعمل المعلمون بكل إخلاص وتفانٍ لتمكين الطلاب من حفظ كتاب الله وفهم معانيه. كانت الأجواء الروحانية والعلاقات الطيبة بين
                  الطلاب والمعلمين تضيف إلى التجربة قيمة كبيرة.  ليس فقط من ناحية الحفظ، بل أيضاً من ناحية التدبر والتفكر في آياته.  
                 وأتمنى أن يواصلوا في هذا النهج المبارك لخدمة كتاب الله ونشر العلم النافع.</p>
                 </div>
            </div>
        </div>
        
    </div>

   )
}