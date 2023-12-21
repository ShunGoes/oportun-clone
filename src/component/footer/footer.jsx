import React, { useState } from 'react'

import GooglePlay from '../../assets/google-play.png'
import AppStore from '../../assets/appstore.svg'

import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
    const [show_accordion,set_show_accordion] = useState({
        first:false,    second:false,   third:false
    })
  return (
    <footer className="mt-[8rem] lg:grid lg:grid-cols-3  lg:gap-[2rem] p-5">
        <div className="accorfion-container mt-2 lg:mt-0">
            <div className="mt-5 lg:mt-0">
              <div className=" grid grid-cols-12 h-[50px]  mb-4  ">
              <h4
                onClick={() =>
                  set_show_accordion((prev) => ({
                    ...prev,
                    first: !prev.first,
                  }))
                }
                className="font-[700] text-xl w  pr-3 col-span-11  mb-3"
              >
                Oportun{" "}
              </h4>
              {
                show_accordion.first === true ? <FaMinus size={30} className="text-blue-500" /> :<IoMdAdd size={30} className="text-blue-500 " />
              }
              </div>
              {show_accordion.first === true && (
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit nobis fugiat sint aut sed consequatur, temporibus nisi
                  nostrum eveniet placeat quod incidunt distinctio asperiores,
                  repellendus reprehenderit mollitia minus quia earum adipisci
                  minima! Facere rerum alias sint nemo temporibus nam
                  consequuntur dolore modi et magnam laboriosam possimus quidem
                  at deleniti dolorum unde distinctio amet, nostrum voluptatum
                  ducimus omnis. Similique molestias ipsum quas odit ratione
                  iste cumque, temporibus, et qui dolor vitae enim minima
                  exercitationem deserunt omnis vero blanditiis deleniti
                  veritatis magni accusantium repellat nesciunt, molestiae quia
                  dolores. Officiis repellendus voluptas quam. Fugit tenetur nam
                  laboriosam saepe autem veritatis deleniti corrupti neque.
                </div>
              )}
            </div>
            <div className="mt-5">
            <div className=" grid grid-cols-12 h-[50px]  mb-4  ">
              <h4
                onClick={() =>
                  set_show_accordion((prev) => ({
                    ...prev,
                    second: !prev.second,
                  }))
                }
                className="font-[700] text-xl w  pr-3 col-span-11  mb-3"
              >
                Help{" "}
              </h4>
              {
                show_accordion.second === true ? <FaMinus size={30} className="text-blue-500" /> :<IoMdAdd size={30} className="text-blue-500 " />
              }
              </div>
              {show_accordion.second === true && (
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit nobis fugiat sint aut sed consequatur, temporibus nisi
                  nostrum eveniet placeat quod incidunt distinctio asperiores,
                  repellendus reprehenderit mollitia minus quia earum adipisci
                  minima! Facere rerum alias sint nemo temporibus nam
                  consequuntur dolore modi et magnam laboriosam possimus quidem
                  at deleniti dolorum unde distinctio amet, nostrum voluptatum
                  ducimus omnis. Similique molestias ipsum quas odit ratione
                  iste cumque, temporibus, et qui dolor vitae enim minima
                  exercitationem deserunt omnis vero blanditiis deleniti
                  veritatis magni accusantium repellat nesciunt, molestiae quia
                  dolores. Officiis repellendus voluptas quam. Fugit tenetur nam
                  laboriosam saepe autem veritatis deleniti corrupti neque.
                </div>
              )}
            </div>
            <div className="mt-5">
            <div className=" grid grid-cols-12 h-[50px]  mb-4  ">
              <h4
                onClick={() =>
                  set_show_accordion((prev) => ({
                    ...prev,
                    third: !prev.third,
                  }))
                }
                className="font-[700] text-xl w  pr-3 col-span-11  mb-3"
              >
                Products{" "}
              </h4>
              {
                show_accordion.third === true ? <FaMinus size={30} className="text-blue-500" /> :<IoMdAdd size={30} className="text-blue-500 " />
              }
              </div>
              {show_accordion.third === true && (
                <div>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit nobis fugiat sint aut sed consequatur, temporibus nisi
                  nostrum eveniet placeat quod incidunt distinctio asperiores,
                  repellendus reprehenderit mollitia minus quia earum adipisci
                  minima! Facere rerum alias sint nemo temporibus nam
                  consequuntur dolore modi et magnam laboriosam possimus quidem
                  at deleniti dolorum unde distinctio amet, nostrum voluptatum
                  ducimus omnis. Similique molestias ipsum quas odit ratione
                  iste cumque, temporibus, et qui dolor vitae enim minima
                  exercitationem deserunt omnis vero blanditiis deleniti
                  veritatis magni accusantium repellat nesciunt, molestiae quia
                  dolores. Officiis repellendus voluptas quam. Fugit tenetur nam
                  laboriosam saepe autem veritatis deleniti corrupti neque.
                </div>
              )}
            </div>
          </div>
          <div className='cc my-[2rem] lg:w-9/12 lg:mx-auto flex flex-col gap-3 lg:my-0'>
            <h3 className='font-[800] text-xl '>Contact</h3>
            <p>(866) 488 6090</p>
            <p>hello@oportun.com</p>
            <p>Log in</p>
            <div className="flex gap-3 mt-3 items-center justify-around lg:justify-between">
                <FaFacebook size={25} />
                <IoLogoYoutube size={25} />
                <BsTwitterX size={25} />
                <FaInstagram size={25} />
            </div>
          </div>

          <div className=' '>
            <h4 className='font-[800] my-3 lg:m-0 text-xl'>sign up</h4>
            <p>to stay up to date with Oportun <br /> please sign up for updates</p>
            <div className="flex justify-between my-3 ">
                <input type="text" placeholder='your email ' className='border w-8/12 p-3 rounded-2xl h-[50px]' />
                <button className='bg-black  w-3/12 font-[400] text-xl px-3 rounded-md  h-[50px] flex justify-center  items-center'> Subscribe</button>
            </div>

            <h4 className='font-[600] text-xl mt-8'>Get the Oportun app</h4>

            <p>All your financial needs right at your fingertips</p>
            <div className='h-[60px] flex justify-around w-10/12 mx-auto gap-4 px-5 my-6  lg:w-full '>
                <img src={AppStore} alt="app store icon"  className='h-full w-3/5 object-cover'/>
                <img src={GooglePlay} alt="google play store icon" className='h-full w-4/5 object-cover'/>
            </div>
          </div>
            
            <div className='lg:col-span-3'>
              <div className="flex flex-col gap-4 mt-8  lg:flex-row ">
                <h2 className='text-2xl font-[600] lg:w-3/12 lg:text-3xl'>Oportun</h2>
                <div className="flex flex-col gap-2 lg:flex-row lg:w-9/12 lg:justify-between lg:text-xl lg:font-[600]">
                    <p>terms of use</p>
                    <p>Accessibity</p>
                    <p>Privacy</p>
                    <p>Privacy Setting</p>
                    <p>Report Vulnerability</p>
                </div>
              </div>

            </div>
    </footer>
  )
}

export default Footer