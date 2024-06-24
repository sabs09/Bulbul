import React from 'react';
import { FaPlus } from 'react-icons/fa';
import AdminLayout from '../../layouts/AdminLayout';

const CreateBlogAdmin = () => {
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
          <div className='flex items-center gap-4'>
            <p className='mr-10 font-semibold'>Kategori</p>
            <div className='flex gap-6'>
              <label className='flex items-center'>
                <input type="radio" name="kategori" value="kategori1" className='form-radio text-primary' />
                <span className='ml-2'>Edukasi</span>
              </label>
              <label className='flex items-center'>
                <input type="radio" name="kategori" value="kategori2" className='form-radio text-primary' />
                <span className='ml-2'>Tip & Trik</span>
              </label>
              <label className='flex items-center'>
                <input type="radio" name="kategori" value="kategori3" className='form-radio text-primary' />
                <span className='ml-2'>Layanan</span>
              </label>
            </div>
          </div>
          <div className='flex gap-6'>
            <p className='mr-14 font-semibold'>Judul</p>
            <input type="text" className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' />
          </div>
          <div className='flex gap-6'>
            <p className='mr-8 font-semibold'>Deskripsi</p>
            <textarea className='w-full outline-none p-2 border-2 border-gray-300 rounded-md' rows="5"></textarea>
          </div>
          <div className='ml-2'>
            <button className='btn ml-28 bg-tertiary hover:bg-tertiary/80 text-white font-bold rounded'>Simpan Data</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateBlogAdmin;
