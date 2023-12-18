import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Friend = ({ header_text, arr_of_obj }) => {
  return (
    <section className="h-[30rem]   bg-black text-white flex flex-col  gap-8 justify-center items-center ">
      <h3 className="header-text"> {header_text} </h3>
      <div className=" w-10/12   h-[60%]">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-full w-full "
        >
          {arr_of_obj.map((obj,index) => (
            <SwiperSlide key={index} className="h-4/5  w-full   flex flex-col justify-center items-center gap-3">
              <div>

              {obj.icon}
              </div>
              {obj.topic && <h3 className="font-[700] text-[18px]"> {obj.topic} </h3>}
              <p className="w-8/12 mx-auto text-center leading-10  ">
                {obj.text}
              </p>
              <a href="#"> {obj.link} </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Friend;
