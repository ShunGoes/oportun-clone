import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';


import { AiOutlineLike } from "react-icons/ai";
import { RiEmotionHappyLine } from "react-icons/ri";


const Friend = () => {

  return (
    <section className="h-[30rem]   bg-black text-white flex flex-col justify-center items-center ">
        <h3 className="text-[34px] font-[600] text-center leading-[37px]"> We've made some friends along the way </h3>
        <div className=' w-10/12  h-[60%]'>
        <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide className='h-4/5  w-full   flex flex-col justify-center items-center gap-3'>
         <AiOutlineLike size={40} color={'green'}/>
         <p className='w-8/12 mx-auto text-center leading-10  '>9 of 10 members would refer friends to Oportun</p>
         <a href="#"> See more </a>
        
        </SwiperSlide>
        <SwiperSlide className='h-4/5 w-full   flex flex-col justify-center items-center gap-3'>
         <RiEmotionHappyLine size={40} color={'green'}/>
         <p className='w-8/12 mx-auto text-center  leading-10 '><span className='underline'>75,000</span> reviews on Google and Trutpilot</p>
         <a href="#"> See more </a>
        
        </SwiperSlide>
        <SwiperSlide className='h-4/5 w-full   flex flex-col justify-center items-center gap-3'>
         <AiOutlineLike size={40} color={'green'}/>
         <q className='w-8/12 mx-auto text-center   '> The whole process was extremely easy and plenty </q>
         <span> Claudia M. </span>
         <a href="#"> from Google </a>
        
        </SwiperSlide>
      </Swiper>
        </div>

    </section>
  )
}

export default Friend