import SectionImg from "../../assets/section-phone.webp";

import { PiFirstAidBold } from "react-icons/pi";
import { FaThumbsUp } from "react-icons/fa6";
import { TbMoneybag } from "react-icons/tb";


const Section = () => {
  return (
    <section className="h-auto mb-[8rem]  p-5">
      <div>
        <img
          src={SectionImg}
          alt=" download our app"
          className="object-cover"
        />
      </div>
      <div className=" flex flex-col items-center mt-6">
        <h3 className="text-[34px] font-[600]  leading-[37px]">
          {" "}
          Set & Save helps you save withhout thinking about it{" "}
        </h3>
        <div className=" mb-[2rem] flex flex-col items-center gap-5 py-3  ">
          <div className="w-full py-3 h-full  flex items-center ">
            <PiFirstAidBold size={25} className="w-2/12" />
            <div className=" w-10/12  ">
              <strong className="links">A savvier way to save</strong>
              <p>Set up your savings goals and we’ll start working toward them</p>
            </div>
          </div>
          <div className="w-full py-3  flex items-center">
            <FaThumbsUp size={25} className="w-2/12" />
            <div className=" w-10/12 ">
              <strong className="links">Smart amounts, saved here and there</strong>
              <p>Set & Save learns your spending habits and intelligently moves money to a savings account for you</p>
            </div>
          </div>
          <div className="w-full py-3  flex items-center">
            <TbMoneybag size={25} className="w-2/12" />
            <div className=" w-10/12 ">
              <strong className="links">Our members save over $1,800 a year*</strong>
              <p>It really does add up fast</p>
            </div>
          </div>
        </div>
        <button className="rounded-2xl text-[18px] bg-black font-[600] h-[60px] hover:bg-white hover:text-black text-white w-11/12">
          Learn more 
        </button>
      </div>
    </section>
  );
};

export default Section;
