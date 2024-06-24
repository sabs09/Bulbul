import React from 'react'
import AdminLayout from '../../layouts/AdminLayout'
import { FaPlus } from 'react-icons/fa';
import { IoMdArrowDropup } from "react-icons/io";

const CreateServiceAdmin = () => {
  return (
    <AdminLayout>
      <div className='flex flex-col items-center gap-4 mt-20'>
        <p>Upload gambar blog</p>
        <div className="relative">
          <input
            type="file"
            id="file-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full cursor-pointer"
          >
            <FaPlus className='text-xl' />
          </label>
        </div>
      </div>
      <div className='p-20 mt-4'>
        <form action="" className='w-full flex flex-col gap-6'>
          <div className='flex gap-6'>
            <p className='mr-14 font-semibold'>Nama</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' />
          </div>
          <div className='flex gap-6'>
            <p className='mr-8 font-semibold'>Deskripsi</p>
            <textarea className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' rows="3"></textarea>
          </div>
          <div className='flex gap-6'>
            <p className='mr-12 font-semibold'>Alamat</p>
            <textarea className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' rows="3"></textarea>
          </div>
          <div className='flex items-center gap-6'>
            <p className='font-semibold mr-12'>Service</p>
            <div className='relative w-64'>
              <select className='appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300'>
                <option className='border-0 text-lg' value="">-Select-</option>
                <option className='border-0 text-lg' value="">Pet</option>
                <option className='border-0 text-lg' value="">Grooming</option>
                <option className='border-0 text-lg' value="">Vet</option>
                <option className='border-0 text-lg' value="">Pet klinik</option>
                <option className='border-0 text-lg' value="">Pet hotel</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700'>
                <div className='bg-slate-200 rounded-lg border border-gray-300'>
                  <IoMdArrowDropup className='text-4xl' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-6 w-96'>
            <p className='mr-14 font-semibold'>Harga</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' />
          </div>
          <div className='flex gap-6 w-96'>
            <p className='mr-14 font-semibold'>Rating</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' />
          </div>
          <div className='flex'>
            <p className='mr-14 font-semibold min-w-20'>Peta lokasi</p>
            <div className='flex justify-center items-center w-full h-96 bg-gray-200 mt-10'>
              <div className='flex flex-col items-center gap-4'>
                <p>Upload maps</p>
                <div className="relative">
                  <input
                    type="file"
                    id="file-upload"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full cursor-pointer"
                  >
                    <FaPlus className='text-xl' />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='ml-2 pt-10'>
            <button className='btn btn-sm ml-12 w-full bg-tertiary hover:bg-tertiary/80 text-white font-bold rounded'>Simpan Perubahan</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  )
}

export default CreateServiceAdmin