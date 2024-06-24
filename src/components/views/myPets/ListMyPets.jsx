import React from 'react'
import catImage from '../../../assets/service_1.png'
import { FaRegTrashAlt } from "react-icons/fa";

const data = [
  { nama: 'BulBul', umur: '1 tahun', berat: '3 kg', image: catImage },
  { nama: 'BulBul', umur: '1 tahun', berat: '3 kg', image: catImage },
]

const ListMyPets = () => {
  return (
    <div className='pt-20 flex flex-col gap-10'>
      {data.map((item, index) => (
        <div key={index} className='flex items-center rounded justify-between border border-slate-200 pr-4'>
          <div className='flex items-center gap-4'>
            <img src={item.image} alt="" className='w-52 rounded' />
            <div>
              <h4 className='text-lg'>{item.nama}</h4>
              <div className='flex gap-4'>
                <div>
                  <p>umur</p>
                  <p>{item.umur}</p>
                </div>
                <div>
                  <p>berat</p>
                  <p>{item.berat}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <button className='btn px-10 bg-tertiary hover:bg-tertiary/80 text-white'>Edit</button>
              <FaRegTrashAlt className='text-2xl text-tertiary' />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListMyPets