import React from 'react'
import AdminLayout from '../../components/layouts/AdminLayout'
import { HiOutlineChartBar } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import userImage from '../../assets/user.png'
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { HiChevronUpDown } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const data = [
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
  { id: 1, name: 'John Doe', email: 'jCZpF@example.com', avatar: userImage },
]

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      <div className='flex p-2 gap-16'>
        <div className='p-4 border border-slate-100 rounded flex flex-col gap-5'>
          <div className='flex gap-32'>
            <p>Current Users</p>
            <div className='border border-slate-300 rounded'>
              <select name="" id="">
                <option value="">30 days</option>
              </select>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='p-4 bg-tertiary rounded-xl'>
              <HiOutlineChartBar className='text-3xl text-white' />
            </div>
            <div className='text-5xl opacity-60'>7</div>
          </div>
          <div></div>
        </div>
        <div className='p-4 border border-slate-100 rounded flex flex-col gap-5'>
          <div className='flex justify-between'>
            <p>New Users</p>
            <p>15k</p>
          </div>
          <div className='text-5xl opacity-60'>75%</div>
          <div className='flex w-96'>
            <div className='p-3 bg-tertiary rounded-l-3xl w-3/4'></div>
            <div className='p-3 bg-slate-200 rounded-r-3xl w-1/4'></div>
          </div>
          <div></div>
        </div>
      </div>
      <div className='mt-10'>
        <h1 className='text-3xl opacity-60'>Users</h1>
        <div className='flex ml-96'>
          <div className='relative flex items-center'>
            <IoSearchSharp className='absolute left-1 text-3xl opacity-60' />
            <input
              type="text"
              placeholder='Search'
              className='pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-200'
            />
          </div>
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
                <th></th>
                <th>ID</th>
                <th>AVATAR</th>
                <th>
                  <div className='flex items-center justify-center'>
                    NAME
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th>
                  <div className='flex items-center justify-center'>
                    EMAIL
                    <HiChevronUpDown className='ml-1' />
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody className='text-center'>
              {data.map((item, index) => (
                <tr key={index} className='border-b-2 border-black'>
                  <td><input type="checkbox" /></td>
                  <td className='font-bold'>{item.id}</td>
                  <td className='flex justify-center items-center p-2'>
                    <img src={item.avatar} alt="user" className='w-8 h-8 rounded-full' />
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.email}</td>
                  <td className='flex gap-3 justify-center items-center pb-3'>
                    <HiDotsHorizontal className='text-xl cursor-pointer' />
                    <MdOutlineRemoveRedEye className='text-xl cursor-pointer' onClick={() => navigate(`/admin/dashboard/${item.id}`)} />
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

export default AdminPage