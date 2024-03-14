import React from "react"
import { useState } from "react"
import './input.css' 
const FormInput = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, errorMessage, onChange, id, ...inputProps } = props

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
    <div className="formInput gap-2">
      <label className="">{label}</label>
      <div className="flex flex-col">
        {}
      <input
         type={props?.type}
         accept={props?.accept}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
      </div>
    </div>
  )
}

export default FormInput