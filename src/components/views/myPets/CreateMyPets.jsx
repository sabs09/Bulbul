import React, { useState } from 'react'
import dogImage from '../../../assets/tipe-dog.png'
import catImage from '../../../assets/tipe-cat.png'
import { GoPlusCircle } from "react-icons/go";
import { GiPieChart } from "react-icons/gi";
import { PiNotepad } from "react-icons/pi";
import { PiStarFour } from "react-icons/pi";
import PetsSuccessModal from '../../modals/PetsSuccessModal';
import kondisi1 from '../../../assets/kondisi 1.png'
import kondisi2 from '../../../assets/kondisi 2.png'
import kondisi3 from '../../../assets/kondisi 3.png'
import kondisi4 from '../../../assets/kondisi 4.png'
import kondisi5 from '../../../assets/kondisi 5.png'
import ukuran1 from '../../../assets/ukuran 1.png'
import ukuran2 from '../../../assets/ukuran 2.png'
import ukuran3 from '../../../assets/ukuran 3.png'
import ukuran4 from '../../../assets/ukuran 4.png'
import ukuran5 from '../../../assets/ukuran 5.png'
import tingkat1 from '../../../assets/tingkat 1.png'
import tingkat2 from '../../../assets/tingkat 2.png'
import tingkat3 from '../../../assets/tingkat 3.png'


const ukuranImages = [ukuran1, ukuran2, ukuran3, ukuran4, ukuran5]
const ukuranTexts = ["Toy", "Small", "Medium", "Large", "Giant"]

const kondisiImages = [kondisi1, kondisi2, kondisi3, kondisi4, kondisi5]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const kondisiTexts = ["Too Thin", "Thin", "Normal", "Overweight", "Obese"]

const tingkatImages = [tingkat1, tingkat2, tingkat3]
const tingkatTexts = ["Less Activity", "Normal", "High Activity"]


const CreateMyPets = () => {
  const [ukuranValue, setUkuranValue] = useState(1);
  const [kondisiValue, setKondisiValue] = useState(1);
  const [tingkatValue, setTingkatValue] = useState(1);

  const handleUkuranChange = (event) => {
    setUkuranValue(event.target.value);
  };
  const handleKondisiChange = (event) => {
    setKondisiValue(event.target.value);
  };
  const handleTingkatChange = (event) => {
    setTingkatValue(event.target.value);
  };

  return (
    <div className='pt-6'>
      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl'>Tipe My Pets</h1>
        <div className='flex gap-4'>
          <div className='text-center'>
            <img src={dogImage} alt="" className='w-20 h-20 p-4 border border-slate-200 rounded' />
            <p>Anjing</p>
          </div>
          <div className='text-center'>
            <img src={catImage} alt="" className='w-20 h-20 p-4 border border-slate-200 rounded' />
            <p>Kucing</p>
          </div>
        </div>
      </div>
      <div>
        <form action="">
          <div className='flex gap-6 items-center mt-8'>
            <div className="relative h-40 w-40 rounded bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-1 bg-slate-400 transform rotate-45"></div>
                <div className="absolute w-full h-1 bg-slate-400 transform -rotate-45"></div>
              </div>
            </div>
            <div className='flex flex-col items-center gap-4'>
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div
                  htmlFor="file-upload"
                  className="cursor-pointer bg-tertiary text-white p-2 rounded"
                >
                  <div className='flex gap-2 items-center'>
                    <GoPlusCircle className='text-sm' />
                    <p>Tambah Foto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-6'>
            <p className='mr-14 font-semibold'>Nama</p>
            <input type="text" className='w-1/2 outline-none p-2 border-2 border-gray-300 rounded-md' />
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <p className="mr-14 font-semibold">Ras</p>
            <select className="w-1/2 outline-none p-2 border-2 border-gray-300 rounded-md">
              <option value="">Choose Breed</option>
              <option value="ras1">Ras 1</option>
              <option value="ras2">Ras 2</option>
              <option value="ras3">Ras 3</option>
            </select>
          </div>
          <div className='flex flex-col mt-6'>
            <p className='mr-10 font-semibold'>Jenis kelamin</p>
            <div className='flex gap-6'>
              <label className='flex items-center'>
                <input type="radio" name="jeniskemalin" value="jeniskemalin2" className='form-radio text-primary' />
                <span className='ml-2'>Betina</span>
              </label>
              <label className='flex items-center'>
                <input type="radio" name="jeniskemalin" value="jeniskemalin3" className='form-radio text-primary' />
                <span className='ml-2'>Jantan</span>
              </label>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='flex flex-col gap-2 mt-6'>
              <p className='mr-14 font-semibold'>Berat</p>
              <div className='relative border border-slate-300'>
                <input
                  type="text"
                  name="berat"
                  className='w-full p-2 text-sm outline-none pr-10'
                  placeholder='0 kg'
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  <GiPieChart />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-6'>
              <p className='mr-14 font-semibold'>Umur</p>
              <div className='relative border border-slate-300'>
                <input
                  type="text"
                  name="berat"
                  className='w-full p-2 text-sm outline-none pr-10'
                  placeholder='0 th'
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  <PiNotepad />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-6'>
            <p className='mr-12 font-semibold'>Kategori</p>
            <div className='flex gap-6'>
              <div>
                <label className='flex items-center'>
                  <input type="checkbox" className='text-primary' />
                  <span className='ml-2'>Vaksinasi</span>
                </label>
              </div>
              <div>
                <label className='flex items-center'>
                  <input type="checkbox" className='text-primary' />
                  <span className='ml-2'>Sterilisasi</span>
                </label>
              </div>
            </div>
          </div>
          <div className='w-52 p-4 bg-primary/80 cursor-pointer rounded-lg text-white flex items-center justify-center mt-6' onClick={() => document.getElementById('modal-ukuran').showModal()}>
            Atur Ukuran badan
            <PiStarFour className='inline-flex ml-4' />
          </div>
          <dialog id="modal-ukuran" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <div className="grid grid-cols-3 items-end content-center divide-x-2">

                <div className='flex flex-col justify-center items-center border-slate-300 pb-4 w-full h-full'>
                  <p className='font-semibold text-xl text-primary mb-8'>Ukuran badan</p>
                  <div className='flex items-center'>
                    <div className='flex flex-col gap-6 translate-x-28'>
                      {ukuranImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="kondisi"
                          className='w-20'
                        />
                      ))}
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={ukuranValue}
                      step="1"
                      onChange={handleUkuranChange}
                      className="rotate-90 w-96 outline-none -translate-x-5"
                    />
                    <div className='flex flex-col gap-12 -translate-x-36'>
                      {ukuranTexts.map((text, index) => (
                        <div key={index} className='text-sm'>{text}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex flex-col justify-center items-center border-slate-300 pb-4 w-full h-full'>
                  <p className='font-semibold text-xl text-primary mb-8'>Kondisi badan</p>
                  <div className='flex items-center'>
                    <div className='flex flex-col gap-6 translate-x-36'>
                      {kondisiImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="kondisi"
                          className='w-16'
                        />
                      ))}
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="9"
                      value={kondisiValue}
                      step="1"
                      onChange={handleKondisiChange}
                      className="rotate-90 w-96 outline-none"
                    />
                    <div className='flex flex-col gap-5 -translate-x-36'>
                      {numbers.map((text, index) => (
                        <div key={index} className='text-sm'>{text}</div>
                      ))}
                    </div>
                    <div className='flex flex-col gap-14 -translate-x-32'>
                      {kondisiTexts.map((text, index) => (
                        <div key={index} className='text-sm'>{text}</div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center border-slate-300 pb-4 w-full h-full'>
                  <p className='font-semibold text-xl text-primary mb-8'>Tingkat Aktivitas</p>
                  <div className='flex items-center'>
                    <div className='flex flex-col gap-6 translate-x-20'>
                      {tingkatImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt="kondisi"
                          className='w-16'
                        />
                      ))}
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      value={tingkatValue}
                      step="1"
                      onChange={handleTingkatChange}
                      className="rotate-90 w-60 outline-none"
                    />
                    <div className='flex flex-col gap-14 -translate-x-20'>
                      {tingkatTexts.map((text, index) => (
                        <div key={index} className='text-sm'>{text}</div>
                      ))}
                    </div>
                  </div>
                </div>
              
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button className='btn bg-tertiary hover:bg-tertiary/80 text-white w-52 text-center my-20'>Selesai</button>
        </form>
      </div>
      <PetsSuccessModal title="Pets kamu berhasil ditambahkan!" buttonText="Lihat My Pets" />
    </div>
  )
}

export default CreateMyPets