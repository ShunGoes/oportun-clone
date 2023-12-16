import React from 'react'
import HeroImg from '../../assets/hero-img.webp'

import { MdDataSaverOff } from "react-icons/md";
const Hero = () => {
  return (
    <section className='h-[75rem] md:h-[35rem] border-4 border-blue-400  grid grid-cols-2'>
        <div className="col-span-2 flex flex-col justify-around items-center gap-8 ">
          <div className='w-[70%] text-center '>
              <h1 className=' text-[45px] font-[600] leading-[3rem] my-10'>Your money goals are <span className='underline decoration-4 decoration-green-300 decoration-double'> our goals</span></h1>
              <p className='mx-auto w-11/12  '> $300 to $10,000 affordable loans to reach your full potential. Your new financial journey starts here.</p>
          </div>
          <div className='w-full flex flex-col gap-3 items-center'>
          <button className="bg-black text-white  w-11/12 h-14 rounded-[20px]">
            Apply for a loan now
          </button>

          <a href="#" className='text-cyan-500'> see personnal loan </a>
          </div>
          
        </div>
        <div className="col-span-2  h-full border-4  px-5 py-0">
          <img src={HeroImg} className='h-full object-cover w-full '/>
        </div>
        <p className="col-span-2 w-9/12 text-center mx-auto">Check out  what else option has to be offered.</p>

        <div className="col-span-2  mb-[10rem] flex flex-col items-center gap-5 py-3">
            <div className='w-11/12 py-3 border-b-4 flex'>
              <MdDataSaverOff size={20} className='w-2/12'/>
              <div className=" w-10/12 ">
              <strong className='links'>Save</strong>
              <p>For bills, repairs, deposits, and more</p>
              <a href="#" className="links text-gray-400"> Learn more</a>
              </div>
            </div>
            <div className='w-11/12 py-3 border-b-4 flex'>
              <MdDataSaverOff size={20} className='w-2/12'/>
              <div className=" w-10/12 ">
              <strong className='links'>Save</strong>
              <p>For bills, repairs, deposits, and more</p>
              <a href="#" className="links text-gray-400"> Learn more</a>
              </div>
            </div>
            <div className='w-11/12 py-3 border-b-4 flex'>
              <MdDataSaverOff size={20} className='w-2/12'/>
              <div className=" w-10/12 ">
              <strong className='links'>Save</strong>
              <p>For bills, repairs, deposits, and more</p>
              <a href="#" className="links text-gray-400"> Learn more</a>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Hero