import React from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import { CgShoppingCart } from "react-icons/cg";
import { PiNotepad } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { BsCurrencyDollar } from "react-icons/bs";
import ChartsUserInsigth from '../components/views/user/ChartsUserInsigth';

const listPets = [
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
  { id: 1, nama: 'prabowo', umur: 33 },
]

const products = [
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
  { id: 1, product: 'wishkas', costumer: 'jokowi', waktu: 'Rabu, 12 Maret 2021', status: 'dikirim' },
]

const UserInsigthPage = () => {
  return (
    <AdminLayout>
      <div className='grid grid-cols-4 gap-8 px-20 mt-20'>
        <div className="relative p-5 shadow-xl flex justify-between items-center">
          <div className="relative z-10">
            <h2 className="text-lg font-semibold">TOTAL COSTUMER</h2>
            <h2 className="text-lg font-semibold ml-6">9</h2>
          </div>
          <div className="relative z-10">
            <CgShoppingCart className="text-3xl opacity-30" />
          </div>
          <div className="absolute top-0 left-0 h-full w-2 bg-tertiary filter blur-sm"></div>
        </div>
        <div className="relative p-5 shadow-xl flex justify-between items-center">
          <div className="relative z-10">
            <h2 className="text-lg font-semibold">TOTAL PETS</h2>
            <h2 className="text-lg font-semibold ml-6">9</h2>
          </div>
          <div className="relative z-10">
            <PiNotepad className="text-3xl opacity-30" />
          </div>
          <div className="absolute top-0 left-0 h-full w-2 bg-tertiary filter blur-sm"></div>
        </div>
        <div className="relative p-5 shadow-xl flex justify-between items-center">
          <div className="relative z-10">
            <h2 className="text-lg font-semibold">TOTAL KATEGORI</h2>
            <h2 className="text-lg font-semibold ml-6">9</h2>
          </div>
          <div className="relative z-10">
            <TiShoppingCart className="text-3xl opacity-30" />
          </div>
          <div className="absolute top-0 left-0 h-full w-2 bg-tertiary filter blur-sm"></div>
        </div>
        <div className="relative p-5 shadow-xl flex justify-between items-center">
          <div className="relative z-10">
            <h2 className="text-lg font-semibold">WAITING PRODUCT</h2>
            <h2 className="text-lg font-semibold ml-6">9</h2>
          </div>
          <div className="relative z-10">
            <BsCurrencyDollar className="text-3xl opacity-30" />
          </div>
          <div className="absolute top-0 left-0 h-full w-2 bg-tertiary filter blur-sm"></div>
        </div>
      </div>
      <div className='px-28 flex gap-10 mt-10'>
        <div className="w-96 shadow-xl mb-4">
          <h2 className="text-lg font-semibold bg-primary bg-opacity-30 p-2">List Pets</h2>
          <div className='pb-4 h-72 overflow-y-auto px-4'>
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th className="p-1 text-sm text-left">ID</th>
                  <th className="p-1 text-sm text-left">Nama</th>
                  <th className="p-1 text-sm text-left">Umur</th>
                </tr>
              </thead>
              <tbody>
                {listPets.map((item, index) => (
                  <tr key={index} className="border-b-2 border-slate-300">
                    <td className="p-1 text-sm">{item.id}</td>
                    <td className="p-1 text-sm">{item.nama}</td>
                    <td className="p-1 text-sm">{item.umur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[600px] h-48 shadow-xl mb-4">
          <h2 className="text-lg font-semibold bg-primary bg-opacity-30 p-2">Waiting Product</h2>
          <div className='pb-4 h-36 overflow-y-auto px-8'>
            <table className="table table-xs table-pin-rows table-pin-cols">
              <thead>
                <tr>
                  <th className="p-1 text-sm text-left">ID</th>
                  <th className="p-1 text-sm text-left">Product</th>
                  <th className="p-1 text-sm text-left">Nama kostumer</th>
                  <th className="p-1 text-sm text-left">Waktu</th>
                  <th className="p-1 text-sm text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index} className="border-b-2 border-slate-300">
                    <td className="p-1 text-sm">{item.id}</td>
                    <td className="p-1 text-sm">{item.product}</td>
                    <td className="p-1 text-sm">{item.costumer}</td>
                    <td className="p-1 text-sm">{item.waktu}</td>
                    <td className="p-1 text-sm">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* CHART */}
      <div className=' card border shadow-lg w-96 mx-auto overflow-hidden'>
          <h2 className='card-title bg-primary/30 p-5'>List Pets</h2>
        <div className='card-body'>
          <ChartsUserInsigth/>
        </div>
      </div>
      {/* <div className='h-96 w-96 mx-auto'>
      </div> */}
    </AdminLayout>
  )
}

export default UserInsigthPage