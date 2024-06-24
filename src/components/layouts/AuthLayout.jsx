import React from 'react'
import logo from '../../assets/logo.png'

const AuthLayout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <div className='w-1/3 bg-primary flex justify-center items-center'>
        <img src={logo} alt='Logo' className='w-96' />
      </div>
      <div className='flex flex-col justify-center items-center w-2/3'>
        <div>
          {children}
        </div>
        <footer className='text-primary mt-20'>© 2024 Bulbul All rights reserved.</footer>
      </div>
    </div>
  )
}

export default AuthLayout