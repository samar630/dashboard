import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import FormInput from '../../../input/input';

const DashboradInfo = ({formData, setFormData }) => {
  const [focused, setFocused] = useState(false)
  const inputs = [
    {
      id: 1,
      name: "name",
      label:"username",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label:"Email",
      errorMessage: "It should be a valid email address!",
      required: true
    },
    {
      id: 4,
      name: "password",
      label:"password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
  ]
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
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

  )
}

export default DashboradInfo
