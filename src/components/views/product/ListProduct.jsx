import React, { useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import product_1 from "../../../assets/product_1.png";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import FooterHome from "../../ui/FooterHome";

const category = [
  {
    name: "Semua",
    value: "",
  },
  {
    name: "Makanan Kering",
    value: "makanan kering",
  },
  {
    name: "Makanan Basah",
    value: "makanan basah",
  },
  {
    name: "Obat & Vitamin",
    value: "obat & vitamin",
  },
  {
    name: "Shampo",
    value: "shampo",
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

const product_dummy = [
  {
    image: product_1,
    type: "Maknan Kering",
    title: "Cat Choice Adlut Salmon 800 Gram",
  },
  {
    image: product_1,
    type: "Obat & Vitamin",
    title: "Olive Care Vitamin Kucing Bulu Gambul",
  },
  {
    image: product_1,
    type: "Makanan Basah",
    title: "Cat Choice Adlut Salmon 800 Gram",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
];

const ListProduct = () => {
  const [search, setSearch] = useState("");
  const [click, SetClick] = useState("");
  const filteredProduct = product_dummy.filter(
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
        <div className="w-1/2 text-center mx-auto space-y-3">
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
        <div className="border rounded p-5 text-[#6D6F77] space-y-3">
          <label className="flex text-[#6D6F77] input input-bordered gap-2 items-center">
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
                className={`bg-gray-200 btn ${
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
          {filteredProduct.map((items, index) => (
            <div key={index} className="border bg-white card  flex flex-col">
              <div>
                <img src={items.image} alt="product-img" className="p-5" />
              </div>
              <div className="flex flex-col pt-4 border-t border-slate-300 text-black gap-2 p-5">
                <span className="bg-tertiary/80 text-white px-3 badge w-fit text-xs">
                  {items.type}
                </span>
                <h4 className="text-lg font-semibold">{items.title}</h4>
                <Link to={"/product/1"}>
                  <button className="btn btn-sm text-sm bg-tertiary text-white rounded-full hover:bg-tertiary/80">
                    Lihat Produk
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterHome />
    </AppLayout>
  );
};

export default ListProduct;
