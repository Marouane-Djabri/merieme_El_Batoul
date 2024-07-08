import { useState } from "react"
import LOGO from '../assets/LOGO.svg'
import { CiMenuBurger } from "react-icons/ci";




const Upper_bar  = () =>
{
    const [MenuOpen , SetMenuOpen ] = useState (false) ; 
    const ToggleMenu = () =>
    {
        SetMenuOpen (!MenuOpen) ; 
    }
    console.log(MenuOpen) ; 
    return (
        <div>
            <nav className="p-4  items-center justify-between flex">
                <div>
                    {/* the div for the logo*/}
                    <img className="w-8 h-8" src = {LOGO}/>
                </div>
                <div className="mx-auto  ">
                {/*the div for the list*/} 
                <ul className="md:space-x-7 md:flex hidden "> 
                    <li className="text-md font-semibold hover:text-orange-900 cursor-pointer "> الرئيسية</li>
                    <li className="text-md font-semibold hover:text-orange-900 cursor-pointer">عن الجمعية</li>
                    <li className="text-md font-semibold hover:text-orange-900 cursor-pointer">هيئة التدريس</li>
                </ul>
                </div>
                <div className="flex items-stretch space-x-3">
                    {/*the div for the burgerMenu*/}
                    <button className="font-semibold bg-yellow-500 px-4 py-1 rounded-md align-top text-white select-none">تسجيل الدخول</button>
                    <CiMenuBurger className="ms:self-center md:hidden cursor-pointer" onClick={ToggleMenu} />
                </div>
                {MenuOpen ? (
                    <ul className="space-y-5 flex flex-col w-fit bg-white absolute top-16 right-0 text-right mr-3 "> 
                    <li className="text-md font-semibold select-none cursor-pointer"> الرئيسية</li>
                    <li className="text-md font-semibold select-none cursor-pointer">عن الجمعية</li>
                    <li className="text-md font-semibold select-none cursor-pointer">هيئة التدريس</li>
                </ul> 
                ) : null}
            </nav>
        </div>
    )
}
export default Upper_bar