import fleche from '../assets/fleche.svg'


export default function Disc_video ()
{
    return (
        <div>
        <div className=" py-8">
        <div className="flex flex-wrap w-full max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 p-4 ">
            <iframe className="aspect-video w-full" src='https://www.youtube.com/embed?v=NOfUCMzBNVg'></iframe>
          </div>
          <div className="w-full md:w-1/2 p-4 ">
            <h1 className="font-extrabold text-2xl text-right py-4 text-orange-900">عن برنامج اكاديمية مريم البتول</h1>
            <p className="text-right py-4">برنامجُ أكاديميةِ زادٍ برنامجٌ تلفزيونيٌّ إلكترونيٌّ تفاعليٌّ، يهدفُ إلى تقريبِ 
              العلمِ الشرعيِّ للراغبين فيه، يوفّر لمتابعيه منصَّةً
              تفاعلية عن طريق شبكة الإنترنت، وعن طريق قناة زاد.</p>
            <div className='flex items-center justify-end py-2'>
              <img className='w-6 h-6' src={fleche} alt='Arrow' />
              <h1 className="text-right text-orange-900 pl-4">اكتشف المزيد</h1>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}