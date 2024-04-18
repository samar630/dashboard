import React from 'react'
import logo from '../../../images/logo.png'
import { LuSmilePlus } from "react-icons/lu";
const Logo = () => {
  return (
    <div className='flex flex-col mt-4 justify-center items-center'>
      <div className='w-32 h-32 p-2'>
       <a href='/'>
        <img src={logo}  alt='logo' />
       </a>
      </div>
    
      <div>
      </div>
    </div>
  )
}

export default Logo
