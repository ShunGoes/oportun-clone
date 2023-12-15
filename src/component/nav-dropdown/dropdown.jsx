import React from "react";

import { CiWarning } from "react-icons/ci";

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
        name: 'save',
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
        name: 'credit card',
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
    loan: {
      loans: [
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
  const array_of_keys = Object.keys(data)
  const position_of_elem = array_of_keys.indexOf(currentTab);
  const final_object = data[array_of_keys[position_of_elem]]
  console.log(final_object);
  return (
    <section className="h-[23rem] bg-black text-white  w-full border-red-500 top top-[148px]  absolute hidden md:block">
      <div className="w-[80%] h-4/5  mx-auto border-red-600 grid grid-cols-4 ">
        <div className=" h-4/6 mt-5 ">
          <strong className="links"> {final_object.name} </strong>
          <div className="border-4 h-4/5 border-yellow-500 mt-1 flex flex-col">
            {final_object.main_arr.map((item) => (
                <a key={item} className="font-[18px]">
                {item}
                </a>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div className="border-4 h-4/8 border-green-500 flex flex-col ">
            <strong className="links"> Tools </strong>
            <a className="font-[18px] ">
              {final_object.tools.map((item) => (
                <a key={item} className="font-[18px]">
                  {item}
                </a>
              ))}
            </a>
          </div>
          <div className="border-4 h-4/8 border-green-500 flex flex-col ">
            <strong className="links"> Get Savvy </strong>
            <div className="border-4 h-4/5 border-yellow-500 mt-1 flex flex-col">
                {final_object.get_savy.map((item) => (
                <a key={item} className="font-[18px]">
                    {item}
                </a>
                ))}

            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-5">
          <div className="flex justify-center items-center h-28 w-24 bg-slate-300">
            <CiWarning size={20} color="red" />
          </div>
          <p className="6/12">{final_object.addons}</p>
          <div className="w-6/12  h-24 border-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Dropown;
