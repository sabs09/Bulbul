import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { TbSettings } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import petImage from '../../assets/kucing.png'

const ProfileLayout = ({ children }) => {
  const location = useLocation()
  const pathname = location.pathname.split('/')[2]

  return (
    <div>
      <div className='flex min-h-screen absolute w-[calc(100%-1rem)]'>
        <div className='w-56 bg-secondary bg-opacity-30 flex flex-col py-4 justify-between items-center fixed h-screen'>
          <nav className='flex flex-col items-center'>
            <Link to='/profile' className={`flex justify-between items-center w-full rounded p-2 ${pathname === undefined && 'bg-primary text-white'}`}>
              <div>
                <CgProfile className='mr-4 inline-flex' />
                <span>Profile</span>
              </div>
              <MdKeyboardArrowRight className='ml-10' />
            </Link>
            <Link to='/profile/edit' className={`flex justify-between items-center w-full rounded p-2 ${pathname === 'edit' && 'bg-primary text-white'}`}>
              <div>
                <FaRegEdit className='mr-4 inline-flex' />
                <span>Edit Akun</span>
              </div>
              <MdKeyboardArrowRight className='ml-10' />
            </Link>
            <Link to='/profile/setting' className={`flex justify-between items-center w-full rounded p-2 ${pathname === 'setting' && 'bg-primary text-white'}`}>
              <div>
                <TbSettings className='mr-4 inline-flex' />
                <span>Pengaturan</span>
              </div>
              <MdKeyboardArrowRight className='ml-10' />
            </Link>
          </nav>
          <nav className='flex flex-col items-center'>
            <div className="cursor-pointer hover:bg-primary hover:text-white flex justify-between items-center w-full rounded p-2" onClick={() => document.getElementById('modal-delete').showModal()}>
              <div>
                <FaRegTrashAlt className='mr-4 inline-flex' />
                <span>Hapus Akun</span>
              </div>
              <MdKeyboardArrowRight className='ml-10' />
            </div>
            <dialog id="modal-delete" className="modal">
              <div className="modal-box flex flex-col justify-center items-center">
                <img src={petImage} alt="Pet" className='w-20' />
                <p>Apakah Anda yakin Hapus Akun?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <div className='flex justify-center px-2 gap-10'>
                      <button className='btn-sm border-2 bg-primary hover:bg-primary/80 rounded px-8 text-white'>Batal</button>
                      <button className='btn-sm bg-slate-100 rounded px-6'>Ya, hapus</button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
            <div className="cursor-pointer hover:bg-primary hover:text-white flex justify-between items-center w-full rounded p-2" onClick={() => document.getElementById('modal-logout').showModal()}>
              <div>
                <TbLogout2 className='mr-4 inline-flex' />
                <span>Keluar</span>
              </div>
              <MdKeyboardArrowRight className='ml-10' />
            </div>
            <dialog id="modal-logout" className="modal">
              <div className="modal-box flex flex-col justify-center items-center">
                <img src={petImage} alt="Pet" className='w-20' />
                <p>Apakah Anda yakin Hapus Akun?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <div className='flex justify-center px-2 gap-10'>
                      <button className='btn-sm border-2 bg-primary hover:bg-primary/80 rounded px-8 text-white'>Batal</button>
                      <button className='btn-sm bg-slate-100 rounded px-6'>Ya, keluar</button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </nav>
        </div>
        <div className='flex flex-col justify-between pb-5 px-4 relative left-56 w-[calc(100%-13rem)]'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout