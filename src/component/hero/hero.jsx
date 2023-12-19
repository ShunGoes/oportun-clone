import React from "react";
import HeroImg from "../../assets/hero-img.webp";

import { MdDataSaverOff } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-auto  grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1  flex flex-col justify-around lg:justify-center items-center lg:items-start gap-8 ">
        <div className="w-[70%]  lg:ml-[4rem] lg:text-left text-center ">
          <h1 className=" text-[45px] font-[600] leading-[3rem] lg:leading-[4rem] my-10 lg:text-[60px] lg:font-[900]">
            Your money goals are{" "}
            <span className="underline decoration-4 decoration-green-300 decoration-double">
              {" "}
              our goals
            </span>
          </h1>
          <p className="mx-auto w-11/12 lg:mx-0 ">
            {" "}
            $300 to $10,000 affordable loans to reach your full potential. Your
            new financial journey starts here.
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 lg:items-start lg:ml-[4rem] items-center">
          <button className="bg-black text-white lg:w-6/12 w-11/12 h-14 rounded-[20px]">
            Apply for a loan now
          </button>

          <a href="#" className="text-cyan-500">
            {" "}
            see personnal loan{" "}
          </a>
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1 h-full   px-5 py-0">
        <img src={HeroImg} className="h-full  object-cover w-full " />
      </div>
      <p className="col-span-2 w-9/12 text-center mx-auto">
        Check out what else option has to be offered.
      </p>

      <div className="col-span-2  mb-[5rem] flex flex-col lg:flex-row lg:mt-[2rem] lg:justify-center items-center gap-5 py-3">
        <div className="w-11/12 py-3 border-b-4 flex items-center lg:flex-col  lg:w-5/12 lg:gap-5 lg:rounded-3xl lg:border-2">
          <MdDataSaverOff size={25} className="w-2/12" />
          <div className=" w-10/12  lg:text-center">
            <strong className="links">Save</strong>
            <p>For bills, repairs, deposits, and more</p>
            <a href="#" className="links text-black underline">
              {" "}
              Learn more
            </a>
          </div>
        </div>
        <div className="w-11/12 py-3 border-b-4 flex items-center lg:flex-col  lg:w-5/12 lg:gap-5 lg:rounded-3xl lg:border-2">
          <BsCreditCard2Back size={25} className="w-2/12" />
          <div className=" w-10/12 lg:text-center">
            <strong className="links">Credit Card</strong>
            <p>That helps you build credit</p>
            <a href="#" className="links text-black underline">
              {" "}
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
