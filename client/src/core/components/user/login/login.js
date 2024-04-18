import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Logo from '../logo';
import { LuSmilePlus } from 'react-icons/lu';
import { Navigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch()

  const [loading, setloading] =useState(false)
  const [formData, setFormData]= useState({
    email: "",
    password: "",
   
  })
  const loginNavigate = async () =>{
   
    <Navigate to='/categories' />
  }
  const  submitLogin = async (e) => {
    e.preventDefault();
    console.log(formData,'formData') 
    try{
      dispatch(
        {
          type: 'CREATE_REQUESTED_CREATE_LOGIN',
          payload: { users: formData, loading: false },
      }); 
    }catch(error){
      console.log("An error occurred while dispatch signup")
    }}
    useEffect(() => {
      console.log(loading)
    },[])
  return (
    <div className='flex flex-col text-center jusitfy-center items-center'>
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
     <div className=' flex items-center justify-center  flex-col gap-[4rem] '>
      <div className=' flex items-center justify-center  rounded-lg border-[1px] border-gray-300 p-8'>
      <form onSubmit={submitLogin}>
      <div className='flex gap-4 flex-col items-center justify-center'>
      <div class="w-72">
      <div class="relative w-full min-w-[200px] h-10">
      <input
       type="text"  
       name='email'
      value={formData.email}
      onChange={(e) => {
       setFormData({ ...formData, email: e.target.value });
       }}
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
     /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Email
      </label>
     </div>
     </div>  
     <div class="w-72">
     <div class="relative w-full min-w-[200px] h-10">
     <input
     type="text"
     name='password'
     value={formData.password}
     onChange={(e) => {
       setFormData({ ...formData, password: e.target.value });
     }}
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
     /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Password
     </label>
     </div>
    </div>     
    </div>
    <div className='w-72 flex items-center jusitfy-center mt-4'>

    <button type='submit' onClick={loginNavigate} className='relative w-full min-w-[220px] h-10 btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-black hover:bg-black text-black hover:text-white font-normal py-2 px-3 rounded'>
       
       {loading ? 
       <div
       class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
       role="status">
       <span
         class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
         >Loading...</span >
     </div>
  
 : 'Submit'}
        
      </button>
     </div>
      </form>
      </div>
    
    </div>
    </div>
   
  )
}

export default Login
