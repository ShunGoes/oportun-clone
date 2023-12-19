import { IoGlobeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";
import Dropown from "../nav-dropdown/dropdown";
import { useState } from "react";


const Navbar = () => {
    const [showDropdown,setShowDropdown] =  useState(false)
    const [currentTab,setCurrentTab] = useState('')


    const handleMouseEnter = (e) => {
        const text = e.target.innerText.toLowerCase().replace(/\s/g, '')
        setCurrentTab(text)
        setShowDropdown(true)
    }

    const handleMouseLeave = () => {
        setShowDropdown(false)
    }
    
  return (
    <nav className='h-[110px] lg:h-[140px] text-black lg:border-4 grid grid-rows-2 '>
        <div className='  px-5 text-[14px] font-[700] lg:text-[18px] lg:font-[500] flex justify-center lg:items-center gap-4 pr-2'>
            <p className='text-center  '>We’re Bankrate’s #1 app for saving <br className="sm:hidden "/> money in 2023</p>
            <div className="flex gap-2 lg:text-gray-500 ">
                <a href="#" className="lg:font-[800]"> Learn more</a> 
                <LiaTimesSolid size={20} className="lg:hidden"/>
            </div>
        </div>
        <div className=' px-5 flex justify-between  lg:px-[4rem]  lg:gap-20   '>
            <div className='flex gap-8 lg:w-5/12  lg:items-center lg:border-2'>
                <h2 className="text-[30px] font-[700] lg:font-[600] lg:text-[35px] lg:;pb-4">Oportun</h2>
                <a href="#" className="hidden link lg:block" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>Loans  </a>
                <a href="#" className="hidden link lg:block" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>Save  </a>  
                <a href="#" className="hidden link lg:block" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>Credit cards  </a>
            </div>
            
            <div className="lg:w-5/12   hidden lg:block ">
                <div className="flex justify-end items-center gap-14 w-full h-full">
                    <a href="#" className="link" onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}> Log in </a>
                    <button className="btn text-[18px] h-4/5 w-[140px]"> Apply now </button>
                    <div className="flex items-center gap-3">
                        <IoGlobeOutline size={30}/>
                        <p className="link text-blue-500">Espanyol</p>
                    </div>
                </div>
            </div>
            <button className="border-2 lg:hidden flex justify-center items-center mr-7"> Get App </button>
        </div>

             {
                showDropdown && <Dropown currentTab={currentTab}/>
             }    
    </nav>
  )
}

export default Navbar