import React from 'react'
import ProfileLayout from '../components/layouts/ProfileLayout'
import userImage from '../assets/user.png'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
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
              <div className='flex flex-col gap-6'>
                <div className='w-96 border-b-2 border-slate-300 flex flex-col gap-2'>
                  <label htmlFor="name">Nama</label>
                  <div>Berliana</div>
                </div>
                <div className='w-96 border-b-2 border-slate-300 flex flex-col gap-2'>
                  <label htmlFor="username">Username</label>
                  <div>Berliana07</div>
                </div>
                <div className='w-96 border-b-2 border-slate-300 flex flex-col gap-2'>
                  <label htmlFor="password">password</label>
                  <div>**********************</div>
                </div>
              </div>
              <small>Terakhir diperbaharui 30 April 2024</small>
              <div className='flex justify-center mt-10 px-2'>
                <Link to="/profile/edit" className='btn bg-tertiary hover:bg-tertiary/80 rounded px-24 text-white'>Edit Akun</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout >
  )
}

export default ProfilePage