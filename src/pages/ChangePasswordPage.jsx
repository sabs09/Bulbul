import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import AuthLayout from '../components/layouts/AuthLayout';

const ChangePasswordPage = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-3xl text-primary font-bold'>Ganti Password</h1>
        <p>Silahkan buat password baru anda</p>
        <form className='flex flex-col gap-2 mt-5'>
          <div className='relative border border-slate-300 rounded w-96'>
            <input
              type={showOldPassword ? "text" : "password"}
              name="password"
              className='w-full p-2 text-sm outline-none pr-10'
              placeholder='Masukkan password baru'
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              onClick={toggleOldPasswordVisibility}
            >
              {showOldPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </div>
          <div className='relative border border-slate-300 rounded w-96'>
            <input
              type={showNewPassword ? "text" : "password"}
              name="password"
              className='w-full p-2 text-sm outline-none pr-10'
              placeholder='Masukkan password baru'
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
              onClick={toggleNewPasswordVisibility}
            >
              {showNewPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </div>
          <div className='flex justify-center mt-14 gap-6'>
            <button className='btn btn-outline border-2 border-primary rounded px-10 py-1 text-primary'>Konfirmasi</button>
            <button className='btn bg-primary hover:bg-tertiary/80 rounded px-10 py-1 text-white'>Daftar</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default ChangePasswordPage