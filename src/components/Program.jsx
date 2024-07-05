import flecheDroite from '../assets/fleche-droite.svg'
import flecheGauche from '../assets/fleche-gauche.svg'
import islamicImage from '../assets/islamic-bG.jpg'



export default function Program (){
    return (
        <div className=" p-8">
          {/* main div */ }  
        <div className=" flex flex-row justify-between">
            <div className='flex flex-row py-2'>
            <img className='w-4 h-4' src = {flecheGauche}/>
            <img className='w-4 h-4' src = {flecheDroite}/>
            </div>
            <div>
            <h1 className='basis-1/2'>البرنامج</h1>
            </div>
            </div>
            {/* second div  */}
        <div className=" text-right p-4">
            <p className=''>.برنامج أكاديمية زاد يوفر سبعة مجالات علميّة للمشاركين فيه لتعزيز فهمٍ وسطيّ ص
                حيح متدرجٌ للإسلام مقترنٌ بالدّليل وبأدوات عصريّة وأسلوب سهل وممتع</p>
        </div>
        {/* third div  */}
        <div className=" p-8 grid grid-cols-4 gap-5 ">
        <div className="relative shadow-2xl ">
        <img className="w-64 h-56 object-cover" src={islamicImage} alt="Islamic" />
        <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-xl">
          حفظ
        </div>
        </div>
        <div className="relative shadow-2xl">
        <img className="w-64 h-56 object-cover " src={islamicImage} alt="Islamic" />
        <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-xl">
          تفسير
        </div>
        </div>
        <div className="relative shadow-2xl">
        <img className="w-64 h-56 object-cover " src={islamicImage} alt="Islamic" />
        <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-xl">
          احكام
        </div>
        </div>
        <div className="relative shadow-2xl">
        <img className="w-64 h-56 object-cover " src={islamicImage} alt="Islamic" />
        <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-xl">
          متدرجٌ
        </div>
        </div>
         </div>
        </div>
    )
}