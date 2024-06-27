import './App.css'
import UpperBar from "./components/Upper_bar.jsx"
import Hero from './components/HeroSection.jsx'
import Right from './components/RightHomePage.jsx'
import Info from './components/Information.jsx'
export default function App() {
  return (
  <div className='bg-[#E5E7E6] '>
   <UpperBar/>
   <Hero/>
   <Right/>
   <Info/>
   </div>     
  )
}

