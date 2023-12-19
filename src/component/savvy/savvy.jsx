import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import Photo1 from "../../assets/photo1.webp";
import Photo2 from "../../assets/photo2.webp";
import Photo3 from "../../assets/photo3.webp";
import Photo4 from "../../assets/photo4.webp";
import Photo5 from "../../assets/photo5.webp";
import Photo6 from "../../assets/photo6.webp";
import Photo7 from "../../assets/photo7.webp";

const Savvy = () => {
  const obj = [
    {
      name: Photo1, desc: 'what do you need to get a personal loan ?'
    },
    
    {
      name: Photo2, desc: 'What is a personal loan and how do personal loans work?'
    },
    {
      name: Photo3, desc: 'What is an installment loan?'
    },
    {
      name: Photo4, desc: 'How to get a personal loan'
    },
    {
      name: Photo5, desc: 'Can you pay off a personal loan early?'
    },
    {
      name: Photo6, desc: 'How to get a loan without a cosigner'
    },
    {
      name: Photo7, desc: 'What‘s the difference between debt consolidation and personal loans?'
    },

  ]
  return (
    <section className="h-auto my-[3rem]  flex flex-col items-center px-1 py-5 gap-9">
      <h3 className="header-text"> Get savvy about money </h3>

      {/* Swiper for smaller screens */}
      <div className=" w-10/12 lg:hidden  h-[40%] lg:border-4 lg:border-red-500  ">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="h-full w-full "
        >
          {
            obj.map(({name,desc}) => (
              <SwiperSlide key={name} className="h-4/5  w-full   flex flex-col justify-center items-center gap-7">
            <div className=" h-4/6 w-11/12 rounded-3xl">
              <img
                src={name}
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
            <a href="#" className="text-blue-500 w-full text-center">
              {" "}
              {desc}{" "}
            </a>
            <div className="h-10"></div>
          </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>

      {/* Swiper for large screens */}
      <div className=" w-10/12 hidden lg:block h-[20rem]   ">
        <Swiper
        slidesPerView={3}
          pagination={true}
          modules={[Pagination]}
          className="h-full  w-full  "
        >
          {
            obj.map(({name,desc}) => (
              <SwiperSlide key={name} className="h-full  w-full   flex flex-col justify-center items-center gap-7">
            <div className=" h-4/6 w-11/12 rounded-3xl">
              <img
                src={name}
                className="rounded-3xl w-full h-full object-cover"
              />
            </div>
            <a href="#" className="text-blue-500 w-full text-center">
              {" "}
              {desc}{" "}
            </a>
            <div className="h-10">

            </div>
          </SwiperSlide>
            ))
          }
          
        </Swiper>
      </div>
      <button className="h-[50px] w-10/12 bg-black text-white font-[700]  rounded-2xl  flex justify-center items-center lg:w-3/12">
        {" "}
        View financial education{" "}
      </button>
    </section>
  );
};

export default Savvy;
