import React from "react";
import Business from "../../assets/img1.webp";
import Warning from "../../assets/img2.webp";
import CDFI from "../../assets/img3.webp";
const Columns = () => {
  return (
    <section className="h-auto  p-7">
      <div className="flex flex-col gap-[3rem]">
        <div>
          <div className="rounded-2xl h-[10rem] flex bg-white justify-center items-center shadow-lg">
            <img src={Business} alt="business logo" className="" />
          </div>
          <p className="mt-[1.5rem] text-center">
            {" "}
            A+ rating by the Better Business Bureau (BBB){" "}
          </p>
        </div>
        <div>
          <div className="rounded-2xl bg-white h-[10rem] shadow-lg flex justify-center items-center">
            <img src={Warning} alt="business logo" className="-500 h-4/5 w-1/2" />
          </div>
          <p className="mt-[1.5rem] text-center">
            {" "}
            #1 savings app of 2023 by Bankrate{" "}
          </p>
        </div>
        <div>
          <div className="rounded-2xl bg-white h-[10rem] shadow-lg flex justify-center items-center">
            <div className="h-4/5 w-[50%] ">
                <img src={CDFI} alt="business logo" className=" w-full h-full object-contain " />
            </div>
          </div>
          <p className="mt-[1.5rem] text-center">
            {" "}
            CDFI: Certified by U.S. Department of the Treasury{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Columns;
