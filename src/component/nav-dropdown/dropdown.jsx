import React from "react";

import { CiWarning } from "react-icons/ci";

import GoogleLogo from '../../assets/google.png'
import IosLogo from '../../assets/ios.png'

const Dropown = ({ currentTab }) => {
  const data = {
    loans: {
      name: "Loans",
      main_arr: [
        "Personnal Loans",
        "Secured Personnal Loan",
        "Make a payment",
        "Contact Us",
        "Location",
      ],
      tools: [
        "Loan Calculators",
        "FAQs",
        "Glossaryof Financial Terms",
        "Get Support from Our Partners",
      ],
      get_savy: [
        "What do you need to apply for a loan?",
        "What is an installment loan?",
      ],
      addons:
        "Get the all-in-one app to manage your loan. Plus it intelligently saves and invests for you.",
    },
    save: {
      name: "save",
      main_arr: ["Set & Save", "Help", "Contact"],
      tools: [
        "FAQs",
        "Glossary of financial terms",
        "Get support from our partners",
      ],
      get_savy: [
        "What do you need to apply for a loan?",
        "What is an installment loan?",
      ],
      addons:
        "Get the all-in-one app that intelligently saves and invests for you.",
    },
    creditcards: {
      name: "Credit Card",
      main_arr: ["Credit Card", "Make a payment", "Contact Us", "Location"],
      tools: [
        "FAQs",
        "Glossaryof Financial Terms",
        "Get Support from Our Partners",
      ],
      get_savy: [
        "Credit card security: Keeping your information safe",
        "Don’t be fooled by these six credit myths",
      ],
      addons:
        "Get the all-in-one app to manage your loan. Plus it intelligently saves and invests for you.",
    },
    login: {
      main_arr: [
        "Personnal Loans",
        "Secured Personnal Loan",
        "Make a payment",
        "Contact Us",
        "Location",
      ],
      tools: [
        "Loan Calculators",
        "FAQs",
        "Glossaryof Financial Terms",
        "Get Support from Our Partners",
      ],
      get_savy: [
        "What do you need to apply for a loan?",
        "What is an installment loan?",
      ],
      addons:
        "Get the all-in-one app to manage your loan. Plus it intelligently saves and invests for you.",
    },
  };
  const array_of_keys = Object.keys(data);
  const position_of_elem = array_of_keys.indexOf(currentTab);
  const final_object = data[array_of_keys[position_of_elem]];

  
  return (
    <section className="h-[23rem] bg-black text-white  w-full  top top-[148px]  absolute hidden md:block">
      {final_object.name ? (
        <div className="w-[79%] h-4/5  mx-auto  grid grid-cols-4 ">
          <div className=" h-4/6 mt-5 ">
            <strong className="links"> {final_object.name} </strong>
            <div className=" h-4/5  mt-1 flex flex-col">
              {final_object.main_arr.map((item) => (
                <a key={item} className="font-[18px]">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className=" h-7/12  mt-4 ">
              <strong className="links"> Tools </strong>
              <div className=" h-4/5 mt-1   flex flex-col">
                {final_object.tools.map((item) => (
                  <a key={item} className="font-[18px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className=" h-4/8   mt-5 ">
              <strong className="links"> Get Savvy </strong>
              <div className=" h-4/5  mt-1 flex flex-col">
                {final_object.get_savy.map((item) => (
                  <a key={item} className="font-[18px]">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2  mt-5">
            <div className=" flex flex-col gap-5 w-8/12 mx-auto  ">
              <div className="flex justify-center items-center h-28 w-24 bg-slate-300">
                <CiWarning size={20} color="red" />
              </div>
              <p className="6/12">{final_object.addons}</p>
              <div className="w-10/12  h-24 border grid grid-cols-2">
                <img src={IosLogo} alt='download on the app store' className="h-full"/>
                <img src={GoogleLogo} alt='download on the google play store' className="h-full"/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[79%] h-11/12  mx-auto  grid grid-cols-4">
          <div className="col-span-2 mt-5 h-full">
            <div className=" flex flex-col gap-5 w-8/12  ">
              <div className="flex justify-center items-center h-28 w-24 bg-slate-300">
                <CiWarning size={20} color="red" />
              </div>
              <p className="6/12">{final_object.addons}</p>
              <div className="w-10/12  h-24 border">
              
              </div>
            </div>
          </div>
          <div className="col-span-2 mt-2 flex justify-end">
          <div className="  w-[62%] h-[90%] mt-5">
            <strong className="links">Select an account to log in </strong>
            <div className="flex flex-col mt-2">
                <a className="font-[18px]"> Loans or Credit Card</a>
                <a className="font-[18px]"> Saving</a>
                <a className="font-[18px]"> Sezzle credit accounts</a>
            </div>
          </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dropown;
