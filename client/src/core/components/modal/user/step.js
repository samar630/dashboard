import React, { useEffect, useState } from 'react'
import {inputsDataDashboard, inputsAddress, inputsPersonalInfo}   from './data'
import FormInput from '../../../input/input'
import { useDispatch, useSelector } from 'react-redux';
import DashboradInfo from './DashboradInfo';
import AddressInfo from './AddressInfo';
import PersonalInfo from './PersonalInfo';
import { useNavigate } from 'react-router-dom';

const Step = (props) => {
    const dispatch = useDispatch()
  
 
    useEffect(() =>{
 
    },[])
    const [formData, setFormData]= useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone:"",
      isAdmin: "",
      image:"",
      age: "",
      country:"",
      city:"",
      street: "",
      zip:"",
    })
   
    const [selectedImage, setSelectedImage] = useState(null);
  
 
      const  submitSignUp = async (e) => {
        e.preventDefault();
        console.log(formData,'formData') 
        try{
          dispatch(
            {
              type: 'CREATE_REQUESTED_USER',
              payload: { users: formData, loading: false },
          });
         
          
        }catch(error){
          console.log("An error occurred while dispatch signup")

        }
          }

  return (
    <div className=''>
      <form onSubmit={submitSignUp}>
       {props.currentStepNumber === 1 ?
            <DashboradInfo formData={formData} setFormData={setFormData} /> : 
              props.currentStepNumber === 2 ?
            <PersonalInfo formData={formData} setSelectedImage={setSelectedImage}  setFormData={setFormData} /> :
            <AddressInfo formData={formData} setFormData={setFormData} />
            
          
       }       
   </form>
    </div>
  )
}

export default Step
