import React, { useState } from "react";
import { HiScale } from "react-icons/hi";
import pet from '/src/assets/pet.png'
import ProductsRecommendations from "../../ui/ProductsRecommendations";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import ChartMyPets from "./ChartMyPets";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const weight_dummy = [
  {
    date: "06/22/2024",
    weight: 4.5,
  },
  {
    date: "06/23/2024",
    weight: 4.6,
  },
  {
    date: "06/24/2024",
    weight: 4.7,
  },
  {
    date: "06/25/2024",
    weight: 4.8,
  },
]

const WeightGrafikPets = () => {
  const [click, setClick] = useState(false)
  const [reportFilter,setReportFilter] = useState(2)
  return (
    <>
      {/* HEADER SECTION */}
      <section className="flex justify-between px-20 py-5 text-primary items-center">
        <Link to={'/my-pets/1'}> 
          <button className="btn btn-ghost text-4xl">
              <IoArrowBackCircleOutline/>
          </button> 
        </Link>
        <h1 className="text-3xl font-bold">BulBul</h1>
        <div />
      </section>
      {/* AVATAR SECTION */}
      <div className=" h-32 w-32 rounded-full overflow-hidden mx-auto flex">
        <img src={pet} alt="img" className="w-full h-full object-cover object-center" />
      </div>
      {/* WEIGHT REPORT */}
      <section className="p-20">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold text-primary">Laporan Berat Badan</h3>
          <div className="flex gap-3">
            <button className={`btn w-12 h-12 ${reportFilter == 0 && 'bg-tertiary text-white'}`} onClick={()=>setReportFilter(0)}>7H</button>
            <button className={`btn w-12 h-12 ${reportFilter == 1 && 'bg-tertiary text-white'}`} onClick={()=>setReportFilter(1)}>3B</button>
            <button className={`btn w-12 h-12 ${reportFilter == 2 && 'bg-tertiary text-white'}`} onClick={()=>setReportFilter(2)}>6B</button>
          </div>
        </div>
        <ChartMyPets/>
      </section>
      {/* WEIGHT NOTE SECTION */}
      <section className="p-20">
        <div className="flex justify-between items-center text-primary">
        <h4 className="text-2xl font-bold mb-5">Catatan Berat Badan</h4>
        <button className="btn btn-ghost text-2xl" onClick={()=>setClick(!click)}>{ click ? <BiSolidUpArrow/> : <BiSolidDownArrow/>}</button>
        </div>
        <div className="grid grid-cols-2 gap-20">
          <div className=" space-y-5">
            <label className="input input-bordered flex items-center gap-2">
              <input type="date" className="grow" placeholder="DD/MM/YY" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="0 Kg" />
              <HiScale />
            </label>
            <button className="btn bg-tertiary text-white hover:bg-tertiary/80">
              Tambahkan
            </button>
          </div>
          <div className="space-y-5">

            {/* CARD WEIGHT */}
            {weight_dummy.slice(click ? 0  : weight_dummy.length-1).map((items,index)=>(
            <div className=" card bg-tertiary/20 text-primary p-10" key={index}>
              <div className=" flex justify-between">
                <div>
                  <p className="font-bold">Berat Badan</p>
                  <p>{items.weight} Kg - {new Date(items.date).toDateString()} </p>
                </div>
                <div className="flex gap-3 items-center">
                  <BiSolidUpArrow className="text-green-500 text-xl"/>
                  <p>Berat Naik 0.1 Kg</p>
                </div>
              </div>
            </div>
            )).reverse()}
          </div>
        </div>
      </section>
      {/* RECOMMENDATION SECTION */}
      <hr />
      <section className="p-20">
        <h4 className="text-primary text-2xl font-bold mb-5">Rekomendasi Produk</h4>
        <ProductsRecommendations/>
      </section>
    </>
  );
};

export default WeightGrafikPets;
