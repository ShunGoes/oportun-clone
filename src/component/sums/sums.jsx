
import { useState } from 'react'
import SumsImg from '../../assets/sums.webp'

import { PiCaretDownBold } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";

const Sums = () => {
  const [show_dropdown, set_Show_dropdown] = useState(false)
  const [show_accordion,set_show_accordion] = useState({
    first: false,second: false, third:false
  })
  return (
    <section className='h-auto border-2  border-blue-500 grid grid-cols-2'>
    <div className='col-span-2 h-[20rem]'>
        <img src={SumsImg} className='object-cover' />
    </div>
    <div className='col-span-2 px-5'>
      <h3 className='text-[34px] font-[600]  leading-[37px]'>That sums it up</h3>
      <p>still have questions ? here are a few we've allready answered before </p>

      <div className=' flex w-full border-4'>
        <div  onClick={() => set_Show_dropdown(prev => !prev)}>
        <h4 className='font-[700] text-xl w-full  mb-3' >Categories</h4>
        <PiCaretDownBold size={30} className='text-blue-500'/>
        </div>
        
        { show_dropdown && (
          <div id='dropdown'>
          <p className="my-3">Applications</p>
          <p className="my-3">Credit Cards</p>
          <p className="my-3">Establishing Credit</p>
          <p className="my-3">Payments</p>
          <p className="my-3">Personal LOans</p>
          <p className="my-3">Save</p>
          <p className="my-3">Secured PErsonal Loans</p>
        </div>
        ) }
      </div>

      <div className='accorfion-container'>
          <div>
            <h4 onClick={() => set_show_accordion(prev => ({...prev, first: !prev.first}))} className='font-[700] text-xl w-full border-4 mt-5 mb-3'>What documentation do ineed to apply for a personak loan ? </h4>
            {
              show_accordion.first && (
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis fugiat sint aut sed consequatur, temporibus nisi nostrum eveniet placeat quod incidunt distinctio asperiores, repellendus reprehenderit mollitia minus quia earum adipisci minima! Facere rerum alias sint nemo temporibus nam consequuntur dolore modi et magnam laboriosam possimus quidem at deleniti dolorum unde distinctio amet, nostrum voluptatum ducimus omnis. Similique molestias ipsum quas odit ratione iste cumque, temporibus, et qui dolor vitae enim minima exercitationem deserunt omnis vero blanditiis deleniti veritatis magni accusantium repellat nesciunt, molestiae quia dolores. Officiis repellendus voluptas quam. Fugit tenetur nam laboriosam saepe autem veritatis deleniti corrupti neque.

                </div>
        
              )
            }
          <div >
            <h4 onClick={() => set_show_accordion(prev => ({...prev, second: !prev.second}))} className='font-[700] text-xl w-full border-4 mt-5 mb-3'>What documentation do ineed to apply for a personak loan ? </h4>
           {
            show_accordion.second && (
              <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis fugiat sint aut sed consequatur, temporibus nisi nostrum eveniet placeat quod incidunt distinctio asperiores, repellendus reprehenderit mollitia minus quia earum adipisci minima! Facere rerum alias sint nemo temporibus nam consequuntur dolore modi et magnam laboriosam possimus quidem at deleniti dolorum unde distinctio amet, nostrum voluptatum ducimus omnis. Similique molestias ipsum quas odit ratione iste cumque, temporibus, et qui dolor vitae enim minima exercitationem deserunt omnis vero blanditiis deleniti veritatis magni accusantium repellat nesciunt, molestiae quia dolores. Officiis repellendus voluptas quam. Fugit tenetur nam laboriosam saepe autem veritatis deleniti corrupti neque.</div>
            )
           }
          </div>
          <div >
            <h4 onClick={() => set_show_accordion(prev => ({...prev,third: !prev.third}))} className='font-[700] text-xl w-full border-4 mt-5 mb-3'>What documentation do ineed to apply for a personak loan ? </h4>
            {
              show_accordion.third && (
                <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nobis fugiat sint aut sed consequatur, temporibus nisi nostrum eveniet placeat quod incidunt distinctio asperiores, repellendus reprehenderit mollitia minus quia earum adipisci minima! Facere rerum alias sint nemo temporibus nam consequuntur dolore modi et magnam laboriosam possimus quidem at deleniti dolorum unde distinctio amet, nostrum voluptatum ducimus omnis. Similique molestias ipsum quas odit ratione iste cumque, temporibus, et qui dolor vitae enim minima exercitationem deserunt omnis vero blanditiis deleniti veritatis magni accusantium repellat nesciunt, molestiae quia dolores. Officiis repellendus voluptas quam. Fugit tenetur nam laboriosam saepe autem veritatis deleniti corrupti neque.</div>
              )
            }
          </div>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Sums