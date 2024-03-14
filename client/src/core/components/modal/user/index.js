import React, { useState } from 'react'
import Stepper from './stepper';

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(1);
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
 
  return (

     <div className='w-full h-full p-[4rem] flex flex-col justify-center items-center'>
			<div className="">
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
   
  )
}

export default Signup
