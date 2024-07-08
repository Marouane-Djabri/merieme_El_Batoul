import '../App.css'
import UpperBar from "../components/Upper_bar.jsx"
import Hero from '../components/HeroSection.jsx'
import Right from '../components/RightHomePage.jsx'
import Info from '../components/Information.jsx'
import Disc from '../components/Disc_video.jsx'
import Prog from '../components/Program.jsx'
import Que from '../components/Questions.jsx'
import Avis from '../components/Avis.jsx'
import About from '../components/AboutUs.jsx'


export default function HomePage ()
{
    return (
    <div className='bg-[#E5E7E6] h-[100%]'>
   <UpperBar/>
   <Hero/>
   <Right/>
   <Info/>
   <Disc/>
   <Prog/>
   <Que/>
  <Avis/>
  <About/>
  </div> 
    )
}