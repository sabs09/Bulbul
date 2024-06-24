import React, { useState } from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'
import userImage from '../../../assets/user.png'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const EditProfile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ProfileLayout>
      <div className='flex justify-center'>
        <div className='pt-20'>
          <div className='flex flex-col items-center gap-4'>
            <h3 className='text-3xl text-primary font-bold text-center '>Halo, Berliana</h3>
            <img src={userImage} alt="" className='w-48' />
          </div>
          <div>
            <form action="" className=''>
              <div className='flex flex-col gap-4'>
                <div className='w-96 flex flex-col gap-2'>
                  <label htmlFor="name">Nama</label>
                  <input type="text" id="name" className='outline-none rounded p-2 border-2 border-slate-300' placeholder='Edit Nama baru Anda' />
                </div>
                <div className='w-96 flex flex-col gap-2'>
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" className='outline-none rounded p-2 border-2 border-slate-300' placeholder='Edit Username baru Anda' />
                </div>
                <div className='w-96 flex flex-col gap-2'>
                  <label htmlFor="password">Password</label>
                  <div className='relative border-2 border-slate-300 rounded w-96'>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      className='outline-none rounded p-2'
                      placeholder='Edit Password baru Anda'
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                  </div>
                </div>
                <div className='w-96 flex flex-col gap-2'>
                  <label htmlFor="confirm-password">Konfirmasi Password</label>
                  <div className='relative border-2 border-slate-300 rounded w-96'>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirm-password"
                      id="confirm-password"
                      className='outline-none rounded p-2'
                      placeholder='Konfirmasi Password baru Anda'
                    />
                    <div
                      className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex justify-center mt-16 px-2'>
                <button className='btn bg-tertiary hover:bg-tertiary/80 rounded px-20 text-white'>Simpan perubahan</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout >
  )
}

export default EditProfile