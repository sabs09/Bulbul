import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import serviceImage from "../../../assets/service.png";

import { IoSearch } from "react-icons/io5";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import FooterHome from "../../ui/FooterHome";

const category = [
  {
    name: "Semua",
    value: "",
  },
  {
    name: "Grooming",
    value: "grooming",
  },
  {
    name: "Pet Shop",
    value: "pet shop",
  },
  {
    name: "Pet Hotel",
    value: "pet hotel",
  },
  {
    name: "Pet Clinic",
    value: "pet clinic",
  },
  {
    name: "Aksesoris",
    value: "aksesoris",
  },
];
const price = [
  {
    name: "0 - 50.000",
    value: "50",
  },
  {
    name: "50.000 - 100.000",
    value: "100",
  },
  {
    name: "100.000 - 500.000",
    value: "500",
  },
  {
    name: "> 500.000",
    value: "501",
  },
];
const sorting = [
  {
    name: "Anjing",
  },
  {
    name: "Kucing",
  },
];

const catalog = [
  {
    image: serviceImage,
    title: "Grooming Jamur",
    address: "Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322",
    type: "Grooming",
  },
  {
    image: serviceImage,
    title: "Vitamin",
    address: "Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322",
    type: "Pet Clinic",
  },
  {
    image: serviceImage,
    title: "K and K Circle",
    address: "Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322",
    type: "Grooming",
  },
  {
    image: serviceImage,
    title: "Big Plane Pet",
    address: "Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322",
    type: "Pet Hotel",
  },
  {
    image: serviceImage,
    title: "Pet Pet Uhuy",
    address: "Jl.Margo Utomo, Basuki, Rahmad, Surabaya, 54322",
    type: "Pet Shop",
  },
];

const ListService = () => {
  const [search, setSearch] = useState("");
  const [click, SetClick] = useState("");
  const filteredCatalog = catalog.filter(
    (items) =>
      items.title.toLowerCase().includes(search.toLowerCase()) ||
      items.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section
        className="py-32 text-center bg-[#FFB3A3] text-white bg-center"
        style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
      >
        <div className="w-1/3 text-center mx-auto space-y-3">
          <h1 className="text-4xl font-bold">
            Selamat Datang di Katalog BulBul
          </h1>
          <p className="text-lg font-medium">
            Temukan produk terbaik untuk hewan kesayangan anda
          </p>
        </div>
      </section>
      {/* LIST SECTION */}
      <section className="grid grid-cols-4 gap-10 py-20 px-10">
        {/* LEFT SIDE */}
        <div className="border rounded p-5 sticky top-5 text-[#6D6F77] space-y-3 max-h-fit ">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search Activity"
              onKeyUp={(e) => setSearch(e.target.value)}
            />
            <IoSearch />
          </label>
          <p className="font-bold">Kategori Produk</p>
          <div className="grid grid-cols-2 gap-3">
            {/* CATEGORY LIST */}
            {category.map((items, index) => (
              <button
                key={index}
                className={`bg-gray-200 btn btn-sm px-5 ${
                  click == items.name && "bg-primary text-white"
                }`}
                onClick={() => {
                  SetClick(items.name), setSearch(items.value);
                }}
              >
                {items.name}
              </button>
            ))}
          </div>
          <p className="font-bold">Urutkan</p>
          {/* SORT LIST */}
          <div className="flex gap-5">
            {sorting.map((items, index) => (
              <div className="flex space-x-2 items-center" key={index}>
                <input
                  type="radio"
                  name="sortList"
                  value={items.name}
                  id={items.name}
                  className="radio h-4 w-4 rounded  border checked:bg-orange-500 hover:cursor-pointer appearance-none"
                />
                <label htmlFor={items.name}>{items.name}</label>
              </div>
            ))}
          </div>
          <p className="font-bold">Harga</p>
          {/* PRICE LIST */}
          {price.map((items, index) => (
            <div className="flex space-x-2 items-center" key={index}>
              <input
                type="radio"
                name="priceList"
                value={items.value}
                id={items.value}
                className="radio h-4 w-4 rounded border checked:bg-orange-500 hover:cursor-pointer appearance-none"
              />
              <label htmlFor={items.value}>{items.name}</label>
            </div>
          ))}
        </div>
        {/* RIGHT SIDE */}
        <div className="grid grid-cols-4 gap-8 col-span-3">
          {/* CARD SERVICE CATALOG */}
          {filteredCatalog.map((items, index) => (
            <div className="card border overflow-hidden w-60" key={index}>
              <img src={items.image} alt="service-img" />
              <div className="flex flex-col py-5 px-3 text-[#6D6F77]">
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-semibold">{items.title}</h4>
                  <span className="bg-tertiary px-3 badge text-xs text-white">
                    {items.type}
                  </span>
                </div>
                <small>{items.address}</small>
                <div className="flex gap-2 items-center mt-4 ">
                  <Link to={"/service/1"}>
                    <button className="text-sm p-1 btn btn-sm bg-tertiary text-white px-3">
                      Ulasan
                    </button>
                  </Link>
                  <MdOutlineStar className="text-tertiary" />
                  <MdOutlineStar className="text-tertiary" />
                  <MdOutlineStar className="text-tertiary" />
                  <MdOutlineStar className="text-tertiary" />
                  <span>4.4</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterHome />
    </AppLayout>
  );
};

export default ListService;
