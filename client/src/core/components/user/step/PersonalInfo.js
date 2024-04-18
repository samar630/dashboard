import React from 'react'
import FormInput from '../../../input/input'

const PersonalInfo = ({formData, setFormData,selectedImage, setSelectedImage }) => {
  const inputs = [
    {
      id: 1,
      name: "phone",
      label:"phone",
      type: "text",
      errorMessage:"phone is required",
      required: true
    },
    {
      id: 2,
      name: "isAdmin",
      type: "boolean",
      label:"isAdmin",
      errorMessage: "Enter if you admin or not!",
      required: true
    },
 
  ]
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
     {inputs.map((input) => (
            <FormInput
            key={input.id}
             {...input}
             value={formData[input.name]}
             onChange={onChange}
            />

            ))}
    </div>
  )
}

export default PersonalInfo
