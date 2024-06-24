import React from 'react'
import logo from '../../assets/logo-admin.png'
import bulbul from '../../assets/bulbul.png'
import { RxDashboard } from "react-icons/rx";
import { GrResources } from "react-icons/gr";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AdminLayout = ({ children }) => {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]

  return (
    <div>
      <header className='h-12 flex justify-between px-4 py-2 fixed w-full z-50 bg-white'>
        <img src={bulbul} alt='Bulbul' className='w-20 h-8' />
        <p className='text-primary cursor-pointer'>Logout</p>
      </header>
      <div className='flex min-h-screen absolute top-12 w-[calc(100%-1rem)]'>
        <div className='w-56 bg-primary bg-opacity-70 flex justify-center items-center fixed h-screen'>
          <nav className='absolute top-5 text-white flex flex-col px-2'>
            <Link to='/admin/user-insigth' className={`rounded px-4 py-1 ${pathname === 'user-insigth' && 'bg-primary'}`}>
              <RxDashboard className='mr-2 inline-flex' />
              Dashboards
              <MdOutlineKeyboardArrowDown className={`inline-flex ml-8 ${pathname === 'user-insigth' && 'hidden'}`} />
            </Link>
            <Link to='/admin/dashboard' className={`flex pl-10 px-4 py-1 rounded ${pathname === 'dashboard' && 'bg-primary'}`}>Main</Link>
            <div className='flex gap-2 items-center mt-4 px-4 py-1 rounded'>
              <GrResources />
              Resource
              <MdOutlineKeyboardArrowDown className='ml-10' />
            </div>
            <Link to='/admin/blog' className={`pl-10 px-4 py-1 rounded ${pathname === 'blog' && 'bg-primary'}`}>Blog</Link>
            <Link to='/admin/product' className={`pl-10 px-4 py-1 rounded ${pathname === 'product' && 'bg-primary'}`}>Product</Link>
            <Link to='/admin/service' className={`pl-10 px-4 py-1 rounded ${pathname === 'service' && 'bg-primary'}`}>Service</Link>
          </nav>
          <img src={logo} alt='Logo' className='w-32 bottom-20 absolute' />
        </div>
        <div className='flex flex-col justify-between pb-5 px-4 relative left-56 w-[calc(100%-13rem)]'>
          {children}
          <footer className='flex justify-center flex-col items-center gap-1 mt-5'>
            <p>© 2024 Bulbul . All rights reserved.</p>
            <p>Contact Us: info@Bulbul.com</p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout