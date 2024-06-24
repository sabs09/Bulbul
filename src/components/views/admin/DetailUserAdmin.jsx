import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import userImage from '../../../assets/user.png'
import { FaRegTrashAlt } from "react-icons/fa";

const data = [
  { jenis: 'kucing', nama: 'romario', umur: '1 tahun', berat: '3 kg', ras: 'lokal' },
  { jenis: '-', nama: '-', umur: '-', berat: '-', ras: '-' },
  { jenis: '-', nama: '-', umur: '-', berat: '-', ras: '-' },
]

const DetailUserAdmin = () => {
  return (
    <AdminLayout>
      <div className='flex justify-center'>
        <div className='pt-16 px-28 pb-10 shadow-xl w-5/6'>
          <div className='flex flex-col items-center gap-2'>
            <img src={userImage} alt="" className='w-36' />
            <h3 className='text-xl text-center'>User Profile</h3>
          </div>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" className='w-96 p-2 rounded-lg outline-none border border-slate-400 ml-16' placeholder='Ni Made Berliana' />
          </div>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <label htmlFor="name">Username</label>
            <input type="text" id="name" className='w-96 p-2 rounded-lg outline-none border border-slate-400 ml-8' placeholder='Berliana' />
          </div>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <label htmlFor="name">Password</label>
            <input type="text" id="name" className='w-96 p-2 rounded-lg outline-none border border-slate-400 ml-10' placeholder='Berliana1234' />
          </div>
          <div className='flex items-center justify-center gap-2 mt-8'>
            <table className='w-5/6 border-collapse'>
              <thead className='text-center'>
                <th>Jenis</th>
                <th>Nama</th>
                <th>Umur</th>
                <th>Berat</th>
                <th>Ras</th>
                <th></th>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className='text-center'>
                    <td>
                      <div className='border border-black py-2 ml-1 rounded-lg'>{item.jenis}</div>
                    </td>
                    <td>
                      <div className='border border-black py-2 ml-1 rounded-lg'>{item.nama}</div>
                    </td>
                    <td>
                      <div className='border border-black py-2 ml-1 rounded-lg'>{item.umur}</div>
                    </td>
                    <td>
                      <div className='border border-black py-2 ml-1 rounded-lg'>{item.berat}</div>
                    </td>
                    <td>
                      <div className='border border-black py-2 ml-1 rounded-lg'>{item.ras}</div>
                    </td>
                    <td>
                      <div className='ml-4'>
                        <FaRegTrashAlt className='text-lg cursor-pointer' />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex justify-center gap-8 mt-10'>
            <button className='btn bg-black hover:bg-black/80 text-white rounded-lg  text-primary'>Simpan Data</button>
            <button className='btn bg-primary hover:bg-primary/80 rounded-lg  text-white'>Hapus Data</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

export default DetailUserAdmin