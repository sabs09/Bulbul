import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { FaPlus } from 'react-icons/fa';
import { IoMdStarOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import productImage from '../../../assets/product_1.png'

const data = [
  { gizi: 'Nutrisi', jumlah: '10%' },
  { gizi: 'Nutrisi', jumlah: '10%' },
  { gizi: 'Nutrisi', jumlah: '10%' },
  { gizi: 'Nutrisi', jumlah: '10%' },
]

const EditProductAdmin = () => {
  return (
    <AdminLayout>
      <div className='flex flex-col items-center mt-5'>
        <img src={productImage} alt="" className='w-48' />
      </div>
      <div className='p-20'>
        <form action="" className='w-full flex flex-col gap-6'>
          <div className='flex items-center gap-4'>
            <p className='mr-12 font-semibold'>Kategori</p>
            <div className='flex flex-col mt-5'>
              <div>
                <label className='flex items-center'>
                  <input type="checkbox" className='form-checkbox text-primary' />
                  <span className='ml-2'>Kucing</span>
                </label>
              </div>
              <div>
                <label className='flex items-center'>
                  <input type="checkbox" className='form-checkbox text-primary' />
                  <span className='ml-2'>Anjing</span>
                </label>
              </div>
            </div>
            <div className='flex gap-6'>
              <label className='flex items-center'>
                <input type="radio" name="kategori" value="kategori1" className='form-radio text-primary' />
                <span className='ml-2'>Food</span>
              </label>
              <label className='flex items-center'>
                <input type="radio" name="kategori" value="kategori2" className='form-radio text-primary' />
                <span className='ml-2'>Non-Food</span>
              </label>
            </div>
          </div>
          <div className='flex gap-6'>
            <p className='mr-14 font-semibold'>Nama</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' placeholder='Masukkan Nama Product' />
          </div>
          <div className='flex gap-6'>
            <p className='mr-8 font-semibold'>Deskripsi</p>
            <textarea className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' rows="3" placeholder='Masukkan Deskripsi Product'></textarea>
          </div>
          <div className='flex gap-6'>
            <p className='mr-12 font-semibold'>Bahan</p>
            <textarea className='ml-1 w-full outline-none p-2 border-2 border-gray-300 rounded-md' rows="3" placeholder='Masukkan Bahan'></textarea>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold'>Rekomendasi toko</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' placeholder='Link Toko' />
          </div>
          <div className='flex flex-col ml-32 -mt-4'>
            <div>
              <label className='flex items-center'>
                <input type="checkbox" className='form-checkbox text-primary' />
                <span className='ml-2'>Kucing</span>
              </label>
            </div>
            <div>
              <label className='flex items-center'>
                <input type="checkbox" className='form-checkbox text-primary' />
                <span className='ml-2'>Anjing</span>
              </label>
            </div>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold mr-16'>Rating</p>
            <div className='flex'>
              <IoMdStarOutline className='text-3xl' />
              <IoMdStarOutline className='text-3xl' />
              <IoMdStarOutline className='text-3xl' />
              <IoMdStarOutline className='text-3xl' />
              <IoMdStarOutline className='text-3xl' />
            </div>
          </div>
          <table className='w-full border-2 border-black mt-4'>
            <thead className='border-b-2 border-black'>
              <tr>
                <th>
                  <div className='flex items-center justify-center p-2'>
                    Nilai Gizi
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Jumlah
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {data.map((item, index) => (
                <tr key={index} className='border-b-2 border-black'>
                  <td className='p-2'>{item.gizi}</td>
                  <td>{item.jumlah}</td>
                  <td className='flex gap-3 justify-center items-center pt-2'>
                    <HiDotsHorizontal className='text-xl cursor-pointer' />
                    <MdOutlineRemoveRedEye className='text-xl cursor-pointer' onClick={() => navigate(`/admin/dashboard/detail-user`)} />
                    <FaRegEdit className='text-xl cursor-pointer' />
                    <FaRegTrashAlt className='text-xl cursor-pointer' />
                  </td>
                </tr>
              ))}
              <tr>
                <td className='p-2'>
                  <div className='flex items-center justify-center'>
                    <FaPlus className=' p-1 text-xl cursor-pointer text-white bg-black rounded-full' />
                  </div>
                </td>
                <td>
                  <div className='flex items-center justify-center'>
                    <FaPlus className='p-1 text-xl cursor-pointer text-white bg-black rounded-full' />
                  </div>
                </td>
                <td className='flex gap-3 justify-center items-center pt-2'>
                  <HiDotsHorizontal className='text-xl cursor-pointer' />
                  <MdOutlineRemoveRedEye className='text-xl cursor-pointer' onClick={() => navigate(`/admin/dashboard/detail-user`)} />
                  <FaRegEdit className='text-xl cursor-pointer' />
                  <FaRegTrashAlt className='text-xl cursor-pointer' />
                </td>
              </tr>
            </tbody>
          </table>
          <div className='ml-36'>
            <button className='btn btn-sm ml-12 w-5/6 bg-tertiary hover:bg-tertiary/80 text-white font-bold rounded'>Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default EditProductAdmin