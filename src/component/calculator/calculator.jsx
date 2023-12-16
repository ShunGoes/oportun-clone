import React from 'react'

const Calculator = () => {
  return (
    <section className='p-5 h-auto'>
        <div className="border-2 border-slate-400/60 h-full rounded-lg">
            <div className='p-5 h-[45%]  flex flex-col gap-4'>
                <h3 className='text-[34px] font-[600]  leading-[37px]'> Loan Calculator</h3>
                <span className="text-gray-400 italic text-[14px]">What could your loan payments look like</span>
                <input type="text" placeholder='Where do you live ?' className='border border-slate-50 p-3 h-[50px] w-full bg-transparent rounded-lg ' />
            </div>

            <div>
            <div className="border-b-2 border-b-50 py-5 border-slate-50 w-11/12 mx-auto rounded-xl">
                <span className="text-gray-500  text-[14px]"> Loan Amount</span>
                <h1 className='text-[34px] font-[800]  leading-[37px] mt-2'>$10,000 </h1>
            </div>
            <p className='p-5'>This tool offers example pricing and loan terms for standard personal loans. Actual terms will vary based on application information, credit profile and applicable state law. Displayed terms may change without prior notice.</p>
            </div>
        </div>
    </section>
  )
}

export default Calculator