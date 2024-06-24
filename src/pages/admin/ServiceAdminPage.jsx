import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import AdminLayout from '../../components/layouts/AdminLayout';
import ServiceRecommendations from '../../components/ui/ServiceRecommendations';
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 1, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 2, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 3, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 4, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 5, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 6, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 7, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
  { id: 8, service: 'aladin hotel pets', alamat: 'bandung', harga: '100000' },
]

const ServiceAdminPage = () => {

  const navigate = useNavigate();

  return (
    <AdminLayout>
      <h3 className='text-xl font-bold mb-4'>Terbaru</h3>
      <ServiceRecommendations />
      <div className='mt-10'>
        <div className='flex justify-between'>
          <div className='relative flex items-center'>
            <IoSearchSharp className='absolute left-1 text-3xl opacity-60' />
            <input
              type="text"
              placeholder='Search'
              className='pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-200'
            />
          </div>
          <button className='btn font-bold text-white bg-tertiary hover:bg-tertiary/80 rounded-lg' onClick={() => navigate('/admin/service/create')}>Buat Layanan</button>
        </div>
      </div>
      <div className='mt-10'>
        <div>
          <header className='flex justify-between px-5'>
            <div className='flex items-center'>
              <input type="checkbox" />
              <MdOutlineKeyboardArrowDown className='ml-1' />
            </div>
            <div className='flex items-center'>
              <CiFilter className='ml-1 text-xl' />
              <MdOutlineKeyboardArrowDown className='ml-1' />
            </div>
          </header>
          <table className='w-full border-y-2 border-slate-200 mt-4'>
            <thead className='border-b-2 border-black bg-sky-100 bg-opacity-50'>
              <tr>
                <th>
                  <div className='flex items-center justify-center'>
                    ID
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Service
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Alamat
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Harga
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {data.map((item, index) => (
                <tr key={index} className='border-b-2 border-black'>
                  <td className='font-bold'>{item.id}</td>
                  <td>{item.service}</td>
                  <td>{item.alamat}</td>
                  <td>{item.harga}</td>
                  <td className='flex gap-3 justify-center items-center py-3'>
                    <HiDotsHorizontal className='text-xl cursor-pointer' />
                    <MdOutlineRemoveRedEye className='text-xl cursor-pointer' />
                    <FaRegEdit className='text-xl cursor-pointer' onClick={() => navigate(`/admin/service/${item.id}`)} />
                    <FaRegTrashAlt className='text-xl cursor-pointer' />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className='flex justify-between px-5 border-b-2 border-slate-300'>
            <p className='py-4 text-sm opacity-50'>Previous</p>
            <p className='py-4 text-sm opacity-50'>1-1 of 7</p>
            <p className='py-4 text-sm opacity-50'>Next</p>
          </footer>
        </div>
      </div>
    </AdminLayout>
  )
}

export default ServiceAdminPage