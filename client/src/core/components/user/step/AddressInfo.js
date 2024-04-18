import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { useSelector} from "react-redux";
import { last } from 'lodash';
import FormInput from '../../../input/input';
const AddressInfo = ({formData, setFormData }) => {
  const navigate = useNavigate()
  const goto = localStorage.getItem('goto')
  const loading = useSelector(state => state?.user?.loading)
  const [buttonDisabled , setButtonDisabled] =  useState(false)
  const inputs = [
    {
      id: 1,
      name: "country",
      label:"country",
      type: "text",
      errorMessage:"country is required",
      required: true
    },
    {
      id: 2,
      name: "city",
      type: "text",
      label:"city",
      errorMessage: "city is required",
      required: true
    },
    {
      id: 3,
      name: "street",
      type: "text",
      label:"street",
    },
    
  ]
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleRedirct = async () =>{
    setTimeout(()=>{
      setButtonDisabled(true)
    },3000)
    navigate('/login')
  }
  useEffect(()=>{
    console.log(loading, 'loading')
  },[loading])
  return (
    <>
      <div className='flex gap-4 flex-col items-center justify-center'>
      {inputs.map((input) => (
            <FormInput
            key={input.id}
             {...input}
             value={formData[input.name]}
             onChange={onChange}
            />

            ))}  
      
    </div>
    <div className='w-72 flex items-center jusitfy-center mt-4'>
    <button type='submit'  className='relative w-full min-w-[220px] h-10 btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-black hover:bg-black text-black hover:text-white font-normal py-2 px-3 rounded'>
        Submit
      </button>
     </div>
 
    </> 
  )
}

export default AddressInfo
