import '../App.css'
import UpperBar from "../components/Upper_bar.jsx"
import Hero from '../components/HeroSection.jsx'
import Information from '../components/Information.jsx'
import Prog from '../components/Program.jsx'
import Questions from '../components/Questions.jsx'
import Avis from '../components/Avis.jsx'
import About from '../components/AboutUs.jsx'
import DescriptivePara from '../components/DescriptivePara.jsx'

export default function HomePage ()
{
    return (
    <div className='bg-[#E5E7E6] h-[100%]'>
   <UpperBar/>
   <Hero/>
   <DescriptivePara/>
   <Information/>
   <Prog/>
   <Questions/>
  <Avis/>
  <About/>
  </div> 
    )
}