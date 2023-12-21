import React, { useState } from 'react'

import GooglePlay from '../../assets/google-play.png'
import AppStore from '../../assets/appstore.svg'

import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  const [show_accordion, set_show_accordion] = useState({
    first: false, second: false, third: false
  })
  return (
    <footer className="mt-[8rem] lg:grid lg:grid-cols-3  lg:gap-[2rem] p-5">
      <div className="accorfion-container mt-2 lg:mt-0">
        <div className="mt-5 lg:mt-0">
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
              Oportun{" "}
            </h4>
            {
              show_accordion.first === true ? <FaMinus size={30} className="text-blue-500" /> : <IoMdAdd size={30} className="text-blue-500 " />
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
              Help{" "}
            </h4>
            {
              show_accordion.second === true ? <FaMinus size={30} className="text-blue-500" /> : <IoMdAdd size={30} className="text-blue-500 " />
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
              Products{" "}
            </h4>
            {
              show_accordion.third === true ? <FaMinus size={30} className="text-blue-500" /> : <IoMdAdd size={30} className="text-blue-500 " />
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
      <div className='cc my-[2rem] lg:w-9/12 lg:mx-auto flex flex-col gap-3 lg:my-0'>
        <h3 className='font-[800] text-xl '>Contact</h3>
        <p>(866) 488 6090</p>
        <p>hello@oportun.com</p>
        <p>Log in</p>
        <div className="flex gap-3 mt-3 items-center justify-around lg:justify-between">
          <FaFacebook size={25} />
          <IoLogoYoutube size={25} />
          <BsTwitterX size={25} />
          <FaInstagram size={25} />
        </div>
      </div>

      <div className=' '>
        <h4 className='font-[800] my-3 lg:m-0 text-xl'>sign up</h4>
        <p>to stay up to date with Oportun <br /> please sign up for updates</p>
        <div className="flex justify-between my-3 ">
          <input type="text" placeholder='your email ' className='border w-8/12 p-3 rounded-2xl h-[50px]' />
          <button className='bg-black  w-3/12 font-[400] text-xl px-3 rounded-md  h-[50px] flex justify-center text-white  items-center'> Subscribe</button>
        </div>

        <h4 className='font-[600] text-xl mt-8'>Get the Oportun app</h4>

        <p>All your financial needs right at your fingertips</p>
        <div className='h-[60px] flex justify-around w-10/12 mx-auto gap-4 px-5 my-6  lg:w-full '>
          <img src={AppStore} alt="app store icon" className='h-full w-3/5 object-cover' />
          <img src={GooglePlay} alt="google play store icon" className='h-full w-4/5 object-cover' />
        </div>
      </div>

      <div className='lg:col-span-3'>
        <div className="flex flex-col gap-4 mt-8  lg:flex-row ">
          <h2 className='text-2xl font-[600] lg:w-3/12 lg:text-3xl'>Oportun</h2>
          <div className="flex flex-col gap-2 lg:flex-row lg:w-9/12 lg:justify-between lg:text-xl lg:font-[600]">
            <p>terms of use</p>
            <p>Accessibity</p>
            <p>Privacy</p>
            <p>Privacy Setting</p>
            <p>Report Vulnerability</p>
          </div>
        </div>

      </div>

      <div className='lg:col-span-3 flex flex-col gap-8 w-10/12 mx-auto my-8'>
        <div className='flex flex-col gap-4'>
          <h4 className='text-xl font-[600]'>View state licenses and notices.</h4>
          <p>California loans made pursuant to a California Financing Law license.</p>
          <p> New Jersey residents: This is an advertisement for a consumer loan.</p>
          <p>New Mexico residents: TO REPORT A PROBLEM OR COMPLAINT WITH THIS LENDER, YOU MAY WRITE OR CALL: Customer Experience – Contact Manager, Oportun, PO Box 4085, Menlo Park, CA 94026; 888-408-3020; Complaints@oportun.com. This lender is licensed and regulated by the New Mexico Regulation and Licensing Department, Financial Institutions Division, PO Box 25101, 2550 Cerrillos Road, Santa Fe, New Mexico 87504. To report any unresolved problems or complaints, contact the division by telephone at 505-476-4885 or
            visit the website</p>
          <p>NMLS #1671904. Click
            here
            for the NMLS Consumer Access Database.</p>
        </div>
        <div>
          Oportun’s website terms, privacy, and security policies don’t apply to outside sites we reference. Please review those websites for their terms, privacy, and security policies to see how they apply to you. Oportun isn’t responsible for (and doesn’t provide) any products, services or content at this third-party site or app, except for products and services that explicitly carry our name.
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-[600]'>Personal loans information</h3>
          <p>Lender information: Personal loans in CA, NM, and WI are originated by Oportun Inc. NV loans originated by Oportun, LLC. Personal loans in AL, AK, AR, AZ, DE, FL, GA, HI, ID, IL, IN, KS, KY, LA, MI, MN, MO, MS, MT, NC, ND, NE, NH, NJ, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VA, VT, WA, and WY are originated by Pathward®, N.A. THIS IS A LOAN SOLICITATION ONLY. OPORTUN MAY NOT BE THE LENDER. INFORMATION RECEIVED WILL BE SHARED WITH PATHWARD IN CONNECTION WITH YOUR LOAN INQUIRY. THE LENDER MAY NOT BE SUBJECT TO ALL VERMONT OR OTHER STATE LENDING LAWS. THE LENDER MAY BE SUBJECT TO FEDERAL LENDING LAWS.</p>
          <p>Product Terms: Lending products are subject to credit approval. Terms may vary by applicant and state and are subject to change. While a prior credit history is not required to qualify, credit reports will be requested and considered for all applicants. Account payment history is reported to select nationwide credit bureaus. Prequalification will not impact your credit score with the nationwide credit reporting agencies until you submit for final approval. Typical personal loan amounts are $500 to $5,500 for new customers, $2,000 to $10,000 for returning customers, and secured personal loan amounts are $4,500 to $16,000, based on information from previously approved loans which may not represent current terms. Click the products below for specific details.</p>
          <p>Pricing information: Amounts financed for unsecured personal loans vary by state: amounts above $6,000 are not available for first-time borrowers; amounts below $3,100 are not available in GA; and amounts below $1,600 are not available in HI. A secured personal loan with an amount financed from $2,525 to $18,500 is only offered by Oportun through the personal loan application to qualifying customers in CA subject to certain terms and conditions. For example, for an unsecured personal loan with a principal amount of $3,261, a term of 30 months, an 8% administrative fee of $261, an APR of 35.95%, the borrower will receive $3,000 and make 66 payments of $70, due every 2 weeks. For example, for a secured personal loan in California with a principal amount of $7,609 for a term of 42 months, an 8% administrative fee of $609, and an APR of 34.95%, the borrower will receive $7,000 and make 91 payments of $134, due every 2 weeks.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-[600]'>Credit card information</h3>
          <p>Lender information: Oportun® Visa® Credit Card is issued by WebBank. The Oportun Credit Card is open to all consumers, except for residents in CO, DC, IA, MD, WI, and WV. See the Oportun Cardholder Agreement
            or the Oportun Cash Back Cardholder Agreement
            for details, including applicable fees.
          </p>
          <p>Lender information: Oportun® Visa® Credit Card is issued by WebBank. The Oportun Credit Card is open to all consumers, except for residents in CO, DC, IA, MD, WI, and WV. See the Oportun Cardholder Agreement
            or the Oportun Cash Back Cardholder Agreement
            for details, including applicable fees.
          </p>
          <p>Pricing information: Credit card loan amounts range from $330 to $1,000. APRs are variable and range from 24.90% to 29.90% as of June 2022.</p>
        </div>
        <p>Your savings funds are held at other partner banks and funds are FDIC insured, subject to applicable limitations and restrictions.</p>
        <p>
          Customer satisfaction based on quarterly survey results from Q3 2023. 9 out of 10 is based on loan members and 4 out of 5 is based on credit card members.
        </p>
        <p>Google and Trustpilot reviews are solicited from credit customers only. Google rating is currently based on all Oportun store locations.</p>
        <p>* Member savings based on average saves of all paying app members in the prior 12 months. Not a guarantee; results will vary based on your income and spending.</p>
        <p>Community partners like SpringFour, UnidosUS, and Steady, are not affiliates or agents of Oportun, Inc. or its affiliates. Community partners are optional services and are not partner bank services through Pathward, N.A. or WebBank N.A. Oportun is not responsible for any third-party content and opinions provided by community partners.</p>

        <p>© 2023 Oportun, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer