import { useState } from "react";
import SumsImg from "../../assets/sums.webp";

import { PiCaretDownBold,PiCaretUpBold } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

const Sums = () => {
  const [show_dropdown, set_Show_dropdown] = useState(false);
  const [show_accordion, set_show_accordion] = useState({
    first: false,
    second: false,
    third: false,
  });
  return (
    <section className="h-auto  grid grid-cols-2">
      <div className="col-span-2 lg:col-span-1 ">
        <img src={SumsImg} className="object-cover" />
      </div>
      <div className="col-span-2 mt-[1.5rem] px-5 lg:col-span-1 lg:pl-[2rem] lg:py-[1rem]">
        <div className="mb-5">
          <h3 className="text-[34px] font-[600] mb-2 ">That sums it up</h3>
          <p className=" text-[17px]">
            still have questions ? here are a few we've allready answered before{" "}
          </p>
        </div>

        <div className=" py-5">
          <div className="  w-full mb-8">
            <div
              className="mb-3 flex items-center  "
              onClick={() => set_Show_dropdown((prev) => !prev)}
            >
              <h4 className="font-[700] text-xl w-11/12 ">Categories</h4>
              {
                show_dropdown === true ? <PiCaretUpBold size={30} className="text-blue-500 font-[900]" /> :
                <PiCaretDownBold size={30} className="text-blue-500 font-[900]" />
              }
            </div>

            {show_dropdown && (
              <div id="dropdown">
                <p className="my-3">Applications</p>
                <p className="my-3">Credit Cards</p>
                <p className="my-3">Establishing Credit</p>
                <p className="my-3">Payments</p>
                <p className="my-3">Personal LOans</p>
                <p className="my-3">Save</p>
                <p className="my-3">Secured PErsonal Loans</p>
              </div>
            )}
          </div>

          <div className="accorfion-container mt-2">
            <div className="mt-5">
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
                What documentation do ineed to apply for a personak loan ?{" "}
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
                What documentation do ineed to apply for a personak loan ?{" "}
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
                What documentation do ineed to apply for a personak loan ?{" "}
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
        </div>

        <button className="w-11/12 h-[60px] rounded-xl bg-black justify-center flex items-center font-[700] text-xl mt-10 text-white mx-auto"> Read more </button>
      </div>
    </section>
  );
};

export default Sums;
