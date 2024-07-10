import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Program (){

        const Caroussel =  [{text:"القرآن" , id:1} , {text:"تفسير" , id:2} , {text: "احاديث" , id : 3} ,
            {text:  "فقه" , id : 4 }] ; 
            const settings1 = {
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              speed: 500,
              autoplaySpeed: 2000,
              cssEase: "linear"
            };
   return (
    <div>
        <div><h1 className="font-bold text-xl  text-right mr-5 p-4 text-orange-900">البرنامج</h1></div>
        <div><p className="text-right p-2 font-medium">برنامج أكاديمية زاد يوفر سبعة مجالات علميّة للمشاركين فيه لتعزيز فهمٍ وسطيّ صحيح متدرجٌ للإسلام مقترنٌ بالدّليل وبأدوات عصريّة وأسلوب سهل وممتع.</p></div>
        <div className='mr-8 ml-8'>
        <Slider {...settings1}>
          {Caroussel.map((d) => (
            <div key={d.id} className='bg-yellow-500 py-10 rounded-md border-4 border-orange-900'>
               <p className='font-semibold text-center'>{d.text}</p>
            </div>
          ))}
        </Slider>
        </div>
    </div>
   )
}