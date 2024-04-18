import React from 'react'
import Login from './login/login'
import Signup from './signUp/Signup'

const Auth = () => {
    const token = localStorage.getItem('token')
    const goto = localStorage.getItem('goto')
  return (
    <div>
      {!token && goto === null ?  <Signup/> : <Login />}
    </div>
  )
}

export default Auth
