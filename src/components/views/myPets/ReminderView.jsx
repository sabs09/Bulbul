import React from 'react'
import bell from '../../../assets/bell.png'

const data = [
  { name: 'grooming', date: 'BulBul - 08 May 2024 09.00 WIB' },
  { name: 'jalan-jalan', date: 'BulBul - 08 May 2024 09.00 WIB' },
  { name: 'vaksinasi', date: 'BulBul - 08 May 2024 09.00 WIB' },
  { name: 'makan', date: 'BulBul - 08 May 2024 09.00 WIB' },
]

const ReminderView = () => {
  return (
    <div className='flex flex-col gap-6 pt-10'>
      {data.map((item, index) => (
        <div key={index}>
          <div className='py-6 px-4 bg-primary rounded-lg w-1/2 flex gap-8 items-center'>
            <div className='rounded-full bg-white p-2'>
              <img src={bell} alt="bell" className='w-8 -rotate-[25deg] text-primary' />
            </div>
            <div className='text-white'>
              <p>{item.name}</p>
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReminderView