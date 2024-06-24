import React from "react";
import { BiPlusCircle, BiTrash } from "react-icons/bi";
import ProductsRecommendations from "../../ui/ProductsRecommendations";
import myPetsDetail_1 from "/src/assets/myPetsDetail_1.png";
import myPetsDetail_2 from "/src/assets/myPetsDetail_2.png";
import bell from "/src/assets/bell.png";
import pet from "/src/assets/pet.png";
import ChartMyPets from "./ChartMyPets";
import { Link } from "react-router-dom";

// const detail_dummy = [
//   {
//     image: myPetsDetail_2,
//     title: "Ukuran Badan",
//     desc: "Medium",
//   },
//   {
//     image: myPetsDetail_1,
//     title: "Tingkat Aktivitas",
//     desc: "High Activity",
//   },
//   {
//     image: "",
//     title: "Kalori Harian",
//     desc: "401 Kcal Per Hari",
//   },
//   {
//     image: "",
//     title: "Hidangan",
//     desc: "52 Kcal Per Hari",
//   },
// ];

const activity_dummy = [
  {
    title: "Vaksinasi",
    name: "BulBul",
    date: "06/18/2024",
    time: "10.00",
  },
  {
    title: "Vaksinasi",
    name: "BulBul",
    date: "06/19/2024",
    time: "11.00",
  },
  {
    title: "Vaksinasi",
    name: "BulBul",
    date: "06/20/2024",
    time: "12.00",
  },
];

const animal_dummy = [
  {
    image: pet,
    title: "BulBul",
    age: 1,
    weight: 3,
  },
  {
    image: pet,
    title: "BalBal",
    age: 1,
    weight: 4,
  },
  {
    image: pet,
    title: "Sukidi",
    age: 2,
    weight: 4,
  },
  {
    image: pet,
    title: "Jojo",
    age: 2,
    weight: 6,
  },
];

const DetailPets = () => {
  return (
    <>
      {/* HERO CAROUSEL SECTION */}
      <section
        className=" carousel w-full gap-5 bg-tertiary/60 p-20 bg-center"
        style={{ backgroundImage: `url('/src/assets/puppyfeet.png')` }}
      >
        {/* CARD */}
        {animal_dummy.map((items, index) => (
          <div className="card bg-white p-5" key={index}>
            <div className="flex gap-5 items-center">
              <div className=" w-32 h-20 rounded overflow-hidden relative">
                <img
                  src={items.image}
                  alt="img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="w-1/3">
                <h5 className="text-lg font-semibold">{items.title}</h5>
                <div className="flex justify-between">
                  <p>Umur</p>
                  <p>Berat</p>
                </div>
                <div className="flex justify-between font-medium">
                  <p>{items.age} Tahun</p>
                  <p>{items.weight} Kg</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button className="btn bg-tertiary hover:bg-tertiary/80 text-white">
                  Edit
                </button>
                <button className="btn btn-ghost text-xl">
                  <BiTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/* CONTENT SECTION */}
      <section className="p-20 grid grid-cols-2 gap-20">
        {/* LEFT SECTION */}
        {/* CARD */}
        <div className=" card border grid grid-cols-2 gap-5 p-5">
          <div className=" card border border-tertiary">
            <img src={myPetsDetail_2} alt="img" />
            <div className=" border-t border-tertiary card-body text-center">
              <h3 className="text-primary font-semibold">Ukuran badan</h3>
              <p>Medium</p>
            </div>
          </div>
          <div className=" card border border-tertiary">
            <img src={myPetsDetail_2} alt="img" />
            <div className=" border-t border-tertiary card-body text-center">
              <h3 className="text-primary font-semibold">Tingkat aktivitas</h3>
              <p>High Activity</p>
            </div>
          </div>
          <div className=" card border border-tertiary">
            <div className=" border-t border-tertiary card-body">
              <h3 className="text-primary font-semibold text-center">
                Kalori harian
              </h3>
              <div className="flex items-center text-xl gap-4 justify-center">
                <span className="font-semibold text-2xl">401</span>
                <div className="flex flex-col">
                  <span>Kcl</span>
                  <span>per hari</span>
                </div>
              </div>
            </div>
          </div>
          <div className=" card border border-tertiary">
            <div className=" border-t border-tertiary card-body">
              <h3 className="text-primary font-semibold text-center">
                Hidangan
              </h3>
              <div className="flex items-center text-xl gap-4 justify-center">
                <span className="font-semibold text-2xl">52</span>
                <div className="flex flex-col">
                  <span>Kcl</span>
                  <span>per hari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className=" card border space-y-5 p-5">
          <h3 className="font-medium text-2xl underline text-primary">
            Aktivitas BulBul
          </h3>
          {/* CARD */}
          {activity_dummy.map((items, index) => (
            <div className=" card p-5 bg-tertiary/80" key={index}>
              <div className=" flex gap-3 items-center">
                <div className=" bg-white rounded-full w-20 h-20">
                  <img src={bell} alt="img" className="p-5" />
                </div>
                <div className="text-white">
                  <h3 className="font-bold">{items.title}</h3>
                  <p>
                    {items.name} - {new Date(items.date).toDateString()}
                  </p>
                  <p>{items.time} WIB</p>
                </div>
              </div>
            </div>
          ))}
          <Link to={"/my-pets/reminder"}>
            <button className="btn bg-tertiary text-white flex ms-auto hover:bg-primary">
              <BiPlusCircle /> Tambah Pengingat
            </button>
          </Link>
        </div>
      </section>
      {/* INFO SECTION */}
      <section className="p-20">
        <div className="flex justify-between text-primary">
          <h3 className="text-3xl font-bold mb-5">Info My Pets</h3>
          <Link to={"/my-pets/1/1"} className="underline">
            Lihat Laporan
          </Link>
        </div>
        <ChartMyPets />
      </section>
      <hr />
      {/* RECOMMENDATION SECTION */}
      <section className="p-20">
        <h3 className="text-3xl font-bold mb-5 text-primary">
          Rekomendasi Produk
        </h3>
        <ProductsRecommendations />
      </section>
    </>
  );
};

export default DetailPets;
