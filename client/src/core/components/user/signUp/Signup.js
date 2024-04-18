import React, { useEffect, useState } from 'react'
import Stepper from '../stepper';
import Login from '../login/login';
import Logo from '../logo';
import { LuSmilePlus } from 'react-icons/lu';

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);
	const goto = localStorage.getItem('goto')
	const stepArray = [
		"Dashborad Info",
		"Personal Info",
		"Address Info"
	];
	const handleClick = (clickType) => {
		let newStep = currentStep;
		(clickType == "next") ? newStep++ : newStep--;
		// Check if steps are within the boundary
		if (newStep > 0 && newStep <= stepArray.length) {
			setCurrentStep(newStep)
		}
	}
 useEffect(() =>{

 },[goto])
  return (
  goto ? <Login/> : <>
   <div className='w-full h-full  flex flex-col justify-center items-center'>
    <div className="">
       <Logo/>
       <div className='jusitfy-center items-center flex flex-col  gap-2  mb-4 text-3xl '>
       <div className='flex flex-row gap-2'>
       <span>Weclome to our business</span>
         <span className='mt-2'><LuSmilePlus /></span>
       </div>
       <div className='text-[1rem] text-gray-500'>
        <span>Do login and enjoy with full control</span>
       </div>
       </div>
	  <Stepper
		steps={stepArray}
		currentStepNumber={currentStep}
	  />
   </div>
   <div className="flex gap-64 mt-8 ">
	<button onClick={() => handleClick()} className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-black hover:bg-gray-500 text-white font-normal py-2 px-3 mr-1 rounded"> Previous </button>
	<button onClick={() => handleClick("next")} className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-black hover:bg-black text-black hover:text-white font-normal py-2 px-3 rounded"> Next </button>
  </div>
  </div> 
  </>
    
   
  )
}

export default Signup
