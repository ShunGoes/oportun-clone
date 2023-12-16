import SolutionImg from "../../assets/solution-1.webp";
import Personal from "../../assets/personal.svg";

import { MdOutlineFormatIndentIncrease } from "react-icons/md";
import { RiFundsBoxLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

const Solution = () => {
  return (
    <section className=" h-auto  ">
      <div className="  flex flex-col justify-center h-[30rem]  items-center px-5 gap-5 text-center">
        <img src={SolutionImg} />
        <h3 className="header-text">
          {" "}
          Our smart solution in the palm of your hand{" "}
        </h3>
        <p>
          The Oportun app helps you set your goals and save without thinking
          about it.
        </p>
        <button className="btn h-[60px] w-6/12 "> Get the Oportun app</button>
        <span className="text-gray-400"> STandard data may apply </span>
      </div>
      <div className=" flex flex-col gap-4 px-5">
        <img src={Personal} />
        <h3 className="   text-[34px] font-[600] px-1 leading-[37px]">
          {" "}
          Personal loans for all kinds of goals{" "}
        </h3>
        <div className=" mb-[2rem] flex flex-col items-center gap-5 py-3  ">
          <div className="w-full py-3 h-full  flex items-center ">
            <RiFundsBoxLine size={30} className="w-2/12" />
            <div className=" w-10/12  ">
              <strong className="links">From #300 to $10,000</strong>
              <p>For bills, repairs, deposits, and more</p>
            </div>
          </div>
          <div className="w-full py-3  flex items-center">
            <MdOutlineFormatIndentIncrease size={30} className="w-2/12" />
            <div className=" w-10/12 ">
              <strong className="links">Fast Funding</strong>
              <p>With direct deposit</p>
            </div>
          </div>
          <div className="w-full py-3  flex items-center">
            <MdOutlinePayments size={30} className="w-2/12" />
            <div className=" w-10/12 ">
              <strong className="links">Affordable Payments</strong>
              <p>That in your budget</p>
            </div>
          </div>
        </div>
        <div className=" flex justify-around w-11/12 mx-auto h-20">
          <button className="rounded-2xl bg-black font-[600] h-4/5 hover:bg-white hover:text-black text-white w-5/12">
            Apply now
          </button>
          <button className="rounded-2xl border-4 hover:bg-black hover:text-white font-[600] h-4/5  w-5/12">
            Learn More
          </button>
        </div>
        <div className="border-4 flex w-11/12 mx-auto h-[10rem]"></div>
      </div>
    </section>
  );
};

export default Solution;
