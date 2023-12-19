import React from "react";
import Business from "../../assets/img1.webp";
import Warning from "../../assets/img2.webp";
import CDFI from "../../assets/img3.webp";
const Columns = () => {
  return (
    <section className="h-auto  p-7 bg-black ">
      <div className="flex flex-col lg:flex-row  lg:justify-around  gap-[3rem]">
        <div className=" lg:w-1/3 bg-white text-black lg:p-4 lg:rounded-3xl">
          <div className="rounded-2xl lg:rounded-none h-[10rem] flex  justify-center items-center lg:shadow-sm shadow-lg">
            <img src={Business} alt="business logo" className=" " />
          </div>
          <p className="mt-[1.5rem] lg:mt-1 text-center">
            {" "}
            A+ rating by the Better Business Bureau (BBB){" "}
          </p>
        </div>
        <div className=" lg:w-1/3 bg-white lg:rounded-3xl  lg:p-4">
          <div className="rounded-2xl lg:rounded-none  h-[10rem]  shadow-lg lg:shadow-none flex justify-center items-center">
            <img src={Warning} alt="business logo" className=" h-4/5 w-1/2" />
          </div>
          <p className="mt-[1.5rem] lg:mt-1 text-center">
            {" "}
            #1 savings app of 2023 by Bankrate{" "}
          </p>
        </div>
        <div className=" bg-white lg:w-1/3 lg:rounded-3xl  lg:p-4">
          <div className="rounded-2xl lg:rounded-none  h-[10rem] lg:shadow-0 shadow-lg flex justify-center items-center">
            <div className="h-4/5 w-[50%] ">
                <img src={CDFI} alt="business logo" className=" w-full h-full object-contain " />
            </div>
          </div>
          <p className="mt-[1.5rem] lg:mt-1 text-center">
            {" "}
            CDFI: Certified by U.S. Department of the Treasury{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Columns;
