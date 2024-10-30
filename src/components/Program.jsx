import flecheDroite from '../assets/fleche-droite.svg';
import flecheGauche from '../assets/fleche-gauche.svg';
import islamicImage from '../assets/islamic-bG.jpg';
import bGround from '../assets/3891390.jpg';

export default function Program() {
    return (
        <div className="p-4 md:p-8">
            {/* main div */}
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-row py-2">
                    <img className="w-4 h-4" src={flecheGauche} />
                    <img className="w-4 h-4" src={flecheDroite} />
                </div>
                <div>
                    <h1 className="text-center md:text-right basis-1/2 font-semibold text-2xl md:text-3xl mr-0 md:mr-5 text-orange-900">البرنامج</h1>
                </div>
            </div>
            {/* second div */}
            <div className="text-right p-2 md:p-4">
                <p className="font-semibold text-sm md:text-base">
                    .برنامج الأكاديمية يوفر سبعة مجالات علميّة للمشاركين فيه لتعزيز فهمٍ وسطيّ صحيح متدرجٌ للإسلام مقترنٌ بالدّليل وبأدوات عصريّة وأسلوب سهل وممتع
                </p>
            </div>
            {/* third div */}
            <div className="p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="relative shadow-2xl h-32 md:h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-lg md:text-xl bg-golden-gradient">
                        حفظ و تفسير
                    </div>
                </div>
                <div className="relative shadow-2xl h-32 md:h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-lg md:text-xl bg-golden-gradient">
                        تصحيح التلاوة
                    </div>
                </div>
                <div className="relative shadow-2xl h-32 md:h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-lg md:text-xl bg-golden-gradient">
                        مقرأة 12 ساعة على مدار اليوم
                    </div>
                </div>
                <div className="relative shadow-2xl h-32 md:h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-orange-900 font-bold text-lg md:text-xl bg-golden-gradient">
                        دروس عقيدة
                    </div>
                </div>
            </div>
        </div>
    );
}