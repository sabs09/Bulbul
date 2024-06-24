import React, { useState } from 'react';
import PetsSuccessModal from '../../modals/PetsSuccessModal';

const days = ['ming', 'sen', 'sel', 'rabu', 'kam', 'jum', 'sab'];

const CreateReminder = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((d) => d !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <form>
      <div className="flex flex-col gap-2 mt-6">
        <p className="mr-14 font-semibold">Kategori</p>
        <select className="w-1/2 outline-none p-2 border-2 border-gray-300 rounded-md">
          <option value="">Pilih kategori</option>
          <option value="kategori1">kategori 1</option>
          <option value="kategori2">kategori 2</option>
          <option value="kategori3">kategori 3</option>
        </select>
      </div>
      <div className='flex gap-8'>
        <div className='flex flex-col gap-2 mt-6'>
          <p className='mr-14 font-semibold'>Tanggal</p>
          <div className='border border-slate-300 rounded-lg w-48'>
            <input
              type="date"
              name="berat"
              className='w-full p-2 text-sm outline-none rounded-lg'
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-6'>
          <p className='mr-14 font-semibold'>Waktu</p>
          <div className='border border-slate-300 rounded-lg w-48'>
            <input
              type="time"
              name="berat"
              className='w-full p-2 text-sm outline-none rounded-lg'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col mt-6'>
        <div className='flex gap-6'>
          <label className='flex items-center'>
            <input type="radio" name="ulngi" value="ulngi2" className='form-radio text-primary' />
            <span className='ml-2'>Ulangi</span>
          </label>
          <label className='flex items-center'>
            <input type="radio" name="ulngi" value="ulngi3" className='form-radio text-primary' />
            <span className='ml-2'>Kali ini saja</span>
          </label>
        </div>
      </div>
      <div className='flex mt-4 gap-2'>
        {days.map((day, index) => (
          <label key={index} className={`bg-primary/50 rounded-lg p-1 text-tertiary cursor-pointer ${selectedDays.includes(day) ? 'bg-tertiary text-white' : 'bg-primary/50'}`}>
            <input
              type="checkbox"
              className="hidden"
              checked={selectedDays.includes(day)}
              onChange={() => toggleDay(day)}
            />
            {day}
          </label>
        ))}
      </div>
      <div className='flex flex-col mt-6'>
        <textarea name="" id="" rows="5" className='w-1/2 outline-none p-2 border-2 border-gray-300 rounded-md' placeholder='Catatan tambahan'></textarea>
      </div>
      <div className='flex mt-6'>
        <button className='btn bg-tertiary hover:bg-tertiary/80 text-white p-2 rounded-lg'>Tambah pengingat</button>
      </div>
      <PetsSuccessModal title="Pengingat berhasil ditambahkan!" buttonText="Lihat Aktivitas" />
    </form>
  )
}

export default CreateReminder;
