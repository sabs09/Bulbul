import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import meoImage from '../../assets/meo.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import AdminLayout from '../../components/layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 1, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 2, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 3, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 4, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 5, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 6, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 7, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 8, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 9, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 10, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
  { id: 11, product: meoImage, name: 'Wishkas tuna', brand: 'Wishkas', category: 'makanan basah', type: 'Kucing' },
]

const dataFoods = [
  { category: 'Makanan basah', describe: 'Me-O 80 Gram Adult Ocean Fish', image: meoImage },
  { category: 'Makanan basah', describe: 'Chumy Pet Dog Kaleng 375 Gram', image: meoImage },
  { category: 'Makanan basah', describe: 'Olive Care Shampoo Kucing Kitten 2 in 1', image: meoImage },
  { category: 'Makanan basah', describe: 'Me-O 80 Gram Adult Ocean Fish', image: meoImage },
  { category: 'Makanan basah', describe: 'Me-O 80 Gram Adult Ocean Fish', image: meoImage },
]
const ProductAdminPage = () => {
  const navigate = useNavigate()

  return (
    <AdminLayout>
      <h3 className='text-xl font-bold mb-4'>Terbaru</h3>
      <div className='grid grid-cols-5 gap-5'>
        {dataFoods.map((item, index) => (
          <div key={index} className='rounded-lg border border-slate-300 flex flex-col'>
            <div>
              <img src={item.image} alt="pet" className='rounded-lg' />
            </div>
            <div className='flex-inline flex-col p-2 border-t border-slate-300'>
              <span className='bg-primary opacity-70 text-white rounded-lg p-1'>{item.category}</span>
              <p className='py-2'>{item.describe}</p>
              <div>
                <button className='btn btn-xs w-full bg-tertiary hover:bg-tertiary/80 rounded-2xl text-white relative bottom-0'>Lihat product</button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
          <button className='btn btn font-bold text-white bg-tertiary hover:bg-tertiary/80 rounded-lg' onClick={() => navigate('/admin/product/create')}>Buat product</button>
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
                <th>Product</th>
                <th>
                  <div className='flex items-center justify-center'>
                    Nama
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Brand
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Kategori
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    Jenis
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
                  <td className='flex justify-center items-center p-2'><img src={item.product} alt="user" className='w-8 h-8 rounded-full' /></td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td className='flex gap-3 justify-center items-center pb-3'>
                    <HiDotsHorizontal className='text-xl cursor-pointer' />
                    <MdOutlineRemoveRedEye className='text-xl cursor-pointer' />
                    <FaRegEdit className='text-xl cursor-pointer' onClick={() => navigate(`/admin/product/${item.id}`)} />
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

export default ProductAdminPage