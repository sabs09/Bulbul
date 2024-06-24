import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import userImage from '../../assets/user.png'
import petImage from '../../assets/pet.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const data = [
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
  { no: 1, judul: 'judul apa aja', link: 'www.apapun.com', gambar: userImage },
]

const dataPets = [
  { title: '7 Jenis Kucing Imut dan Menggemaskan', category: 'Edukasi', describe: 'Norwegian Forest Cat ini pastinya cocok dijadikan hewan peliharaan.', image: petImage },
  { title: '11 Hal Yang Disukai Kucing', category: 'Edukasi', describe: 'tapi ada hal-hal yang sepertinya disukai oleh semua kucing', image: petImage },
  { title: '7 Jenis Kucing Imut dan Menggemaskan', category: 'Edukasi', describe: 'tapi ada hal-hal yang sepertinya disukai oleh semua kucing', image: petImage },
]

const BlogAdminPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <h3 className='text-xl font-bold mb-4'>Terbaru</h3>
      <div className='grid grid-cols-3 gap-10'>
        {dataPets.map((item, index) => (
          <div key={index} className='rounded-lg border border-black flex'>
            <div>
              <img src={item.image} alt="pet" className='h-52 w-56 rounded-lg' />
            </div>
            <div className='flex flex-col gap-4 pt-4 pl-2'>
              <div>
                <span className='py-1 px-2 bg-slate-200 rounded-lg'>{item.category}</span>
              </div>
              <p>{item.title}</p>
              <p className='text-sm opacity-50'>{item.describe}</p>
              <p className='flex items-center'>
                <MdOutlineRemoveRedEye className='text-xl inline-flex mr-2' />
                2 menit baca
              </p>
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
          <button className='btn btn font-bold text-white bg-tertiary hover:bg-tertiary/80 rounded-lg' onClick={() => navigate('/admin/blog/create')}>Buat blog</button>
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
                    NO
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>GAMBAR</th>
                <th>
                  <div className='flex items-center justify-center'>
                    JUDUL
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    LINK
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {data.map((item, index) => (
                <tr key={index} className='border-b-2 border-black'>
                  <td className='font-bold'>{item.no}</td>
                  <td className='flex justify-center items-center p-2'><img src={item.gambar} alt="user" className='w-8 h-8 rounded-full' /></td>
                  <td>{item.judul}</td>
                  <td>{item.link}</td>
                  <td className='flex gap-3 justify-center items-center pb-3'>
                    <HiDotsHorizontal className='text-xl cursor-pointer' />
                    <MdOutlineRemoveRedEye className='text-xl cursor-pointer' />
                    <FaRegEdit className='text-xl cursor-pointer' />
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

export default BlogAdminPage