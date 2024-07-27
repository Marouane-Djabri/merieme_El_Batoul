import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DescriptivePara = () => {
    const Caroussel =  [{text:"طلَبُ العِلمِ فَريضةٌ علَى كلِّ مُسلِمٍ" , id:1} , {text:"مَن يُرِدِ الله به خيرًا يفقِّهْه في الدِّين" , id:2} , {text: "إذا مات الإنسان انقطع عنه عملُه إلا من ثلاثةٍ: إلا من صدقةٍ جاريةٍ، أو علمٍ يُنتفَع به، أو ولدٍ صالحٍ يدعو له" , id : 3} ,
        {text:  "فضل العلم خيرٌ من فضل العبادة، وخير دِينكم الوَرَع" , id : 4 }] ; 
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 10000,
          autoplaySpeed: 2000,
          cssEase: "linear"
        };
  return (
    <div className='lg:flex lg:flex-row px-8 py-4'> 
    <div className='flex flex-col items-end px-6 self-end w-full'>
        {/* div for right paragraph */}
        <h1 className='text-right text-3xl font-bold text-orange-900 mr-12'>ما لا يسع المؤمن جهله</h1>
        <p className=' text-right p-4 w-fit  font-medium text-xl '>
          أكاديمية البتول هي مؤسسة تعليمية متخصصة في تدريس القرآن الكريم وتفسيره والحديث النبوي الشريف. تهدف الأكاديمية إلى تزويد الطلاب بالمعرفة الدينية العميقة والأسس السليمة لفهم النصوص الشرعية
        </p>
      </div>
      <div className='lg:w-1/2 order-first '>
        <Slider {...settings}>
          {Caroussel.map((d) => (
            <div key={d.id}>
              <h1 className='font-bold text-orange-900 text-lg text-center'>قال رسول الله صلى الله عليه وسلم</h1>
               <p className='font-semibold text-center'>{d.text}</p>
            </div>
          ))}
        </Slider>
</div>
      </div>
  )
}

export default DescriptivePara