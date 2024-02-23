import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-[10%] justify-center items-center mp-8 h-screen ' >
       <div className='font-bold text-3xl text-[#cf450e]'>Welcome to Dashnoard laoding... </div>
       <div class="rounded-full h-28 w-28 bg-[#cf450e] animate-ping"></div>
    </div>
  )
}

export default Spinner
