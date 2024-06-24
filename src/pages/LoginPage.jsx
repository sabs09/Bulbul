import React, { useState } from 'react';
import AuthLayout from '../components/layouts/AuthLayout';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl text-primary font-bold'>Selamat Datang Pawrents!</h1>
        <p>Daftar atau Masuk untuk mengakses semua fitur</p>
        <form className='flex flex-col gap-2'>
          <div className='border border-slate-300 rounded w-96'>
            <input
              type="text"
              name="email"
              className='w-full p-2 text-sm outline-none'
              placeholder='Masukkan email'
            />
          </div>
          <div className='relative border border-slate-300 rounded w-96'>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className='w-full p-2 text-sm outline-none pr-10'
              placeholder='Masukkan password'
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </div>
          <small className='text-primary cursor-pointer flex justify-end w-full'>Lupa password?</small>
          <div className='flex justify-between mt-10 px-2'>
            <button href="src/pages/HomePage.jsx" className='btn btn-outline border-2 border-primary rounded px-16 text-primary'>Masuk</button>
            <button className='btn bg-primary hover:bg-primary/80 rounded px-16 text-white'>Daftar</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default LoginPage;
