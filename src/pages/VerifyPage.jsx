import React from 'react'
import AuthLayout from '../components/layouts/AuthLayout'

const VerifyPage = () => {
  return (
    <AuthLayout>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-primary text-3xl font-bold'>Verifikasi Akun</h1>
        <p>Masukkan 4-digit kode PIN yang telah dikirmkan ke email</p>

        <div className='flex gap-2 my-10'>
          <input type="text" className='w-10 h-10 border border-black rounded' />
          <input type="text" className='w-10 h-10 border border-black rounded' />
          <input type="text" className='w-10 h-10 border border-black rounded' />
          <input type="text" className='w-10 h-10 border border-black rounded' />
        </div>

        <div className='flex justify-between mt-10 gap-4'>
          <button className='btn btn-outline border-2 border-primary rounded px-8 text-primary'>Kirim ulang</button>
          <button className='btn bg-primary hover:bg-primary/80 rounded px-8 text-white'>Konfirmasi</button>
        </div>
      </div>
    </AuthLayout>
  )
}

export default VerifyPage