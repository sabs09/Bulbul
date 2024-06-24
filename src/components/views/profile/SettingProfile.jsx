import React from 'react'
import ProfileLayout from '../../layouts/ProfileLayout'
import { MdOutlineToggleOff } from "react-icons/md";

const SettingProfile = () => {
  return (
    <ProfileLayout>
      <div className='flex flex-col gap-14 justify-center pt-28 items-center'>
        <div className='w-2/3 flex justify-between items-center'>
          <div>
            <h4>Reminder</h4>
            <p>Aktifkan pemberitahuan reminder My Pets !</p>
          </div>
          <div>
            <MdOutlineToggleOff className='text-3xl' />
          </div>
        </div>
        <div className='w-2/3 flex justify-between items-center'>
          <div>
            <h4>Blog</h4>
            <p>Aktifkan pemberitahuan blog terbaru !</p>
          </div>
          <div>
            <MdOutlineToggleOff className='text-3xl' />
          </div>
        </div>
        <div className='w-2/3 flex justify-between items-center'>
          <div>
            <h4>Rekomendasi produk</h4>
            <p>Aktifkan Rekomendasi Produk My Pets !</p>
          </div>
          <div>
            <MdOutlineToggleOff className='text-3xl' />
          </div>
        </div>
        <div className='w-2/3 flex justify-between items-center'>
          <div>
            <h4>Rekomendasi layanan</h4>
            <p>Aktifkan Rekomendasi Layanan My Pets !</p>
          </div>
          <div>
            <MdOutlineToggleOff className='text-3xl' />
          </div>
        </div>
        <div className='w-2/3 flex justify-between items-center'>
          <div>
            <h4>Update aplikasi bulbul</h4>
            <p>Pemberitahuan Update Aplikasi BulBul !</p>
          </div>
          <div>
            <MdOutlineToggleOff className='text-3xl' />
          </div>
        </div>
      </div>
    </ProfileLayout>
  )
}

export default SettingProfile