import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { IoSearch } from "react-icons/io5";
import ServiceRecommendations from "../../ui/ServiceRecommendations";
import myPets_1 from "/src/assets/myPets_1.png";
import myPets_2 from "/src/assets/myPets_2.png";
import myPets_3 from "/src/assets/myPets_3.png";
import myPets_4 from "/src/assets/myPets_4.png";
import service_1 from "/src/assets/service_1.png";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ChartMyPets from "./ChartMyPets";
import FooterHome from "../../ui/FooterHome";

const service_dummy = [
  {
    image: myPets_1,
    title: "MyPets",
    link: "/my-pets",
  },
  {
    image: myPets_2,
    title: "Blog",
    link: "/blog",
  },
  {
    image: myPets_3,
    title: "Layanan",
    link: "/service",
  },
  {
    image: myPets_4,
    title: "Produk",
    link: "/product",
  },
];

const MyPetsView = () => {
  return (
    <AppLayout>
      {/* HERO SECTION*/}
      <section
        className=" bg-tertiary/60 py-32 bg-center text-center space-y-5 text-white"
        style={{ backgroundImage: `url('/src/assets/puppyfeet.png')` }}
      >
        <h1 className="text-4xl font-bold ">Selamat Datang di BulBul !</h1>
        <h3 className="text-2xl">Kelola hewan peliharaan Anda dengan mudah</h3>
        <label className="input input-bordered flex items-center gap-2 text-black w-1/2 mx-auto">
          <input
            type="text"
            className="grow"
            placeholder="Cari hewan peliharaan"
          />
          <IoSearch />
        </label>
      </section>
      {/* SERVICE SECTION */}
      <section className="p-20 text-primary">
        <h2 className="text-3xl font-bold text-center mb-10">
          Jelajahi dan berikan yang terbaik!
        </h2>
        <div className="flex">
          <div className=" flex gap-20 mx-auto">
            {/* SERVICE DUMMY */}
            {service_dummy.map((items, index) => (
              <Link to={items.link} className="space-y-3" key={index}>
                <div className="bg-tertiary/40 btn p-3 rounded-full w-32 h-32 flex mx-auto hover:bg-white hover:border-tertiary ">
                  <img src={items.image} alt="" className="p-5" />
                </div>
                <p className="text-center text-xl font-medium">{items.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* MYPETS SECTION */}
      <section className="p-20">
        <h3 className="text-3xl font-bold mb-5 text-primary">Pilih MyPets</h3>
        <div className="grid grid-cols-3 items-center gap-20">
          <div className=" carousel w-full gap-5 col-span-2">
            <div className="carousel-item rounded-md overflow-hidden w-80 h-80 relative">
              <img
                src={service_1}
                alt=""
                className="w-full h-full absolute object-cover object-center"
              />
            </div>
            <div className="carousel-item rounded-md overflow-hidden w-80 h-80 relative">
              <img
                src={service_1}
                alt=""
                className="w-full h-full absolute object-cover object-center"
              />
            </div>
          </div>
          <div className="text-center space-y-3">
            <Link to={"/my-pets-list"}>
              <div className=" btn w-32 h-32 bg-tertiary text-white rounded-full">
                <FaPlus className="text-4xl" />
              </div>
            </Link>
            <h3 className="text-2xl font-medium text-primary">
              Daftarkan MyPets
            </h3>
          </div>
        </div>
      </section>
      {/* INFO SECTION */}
      <section className="p-20 text-primary">
        <h3 className="text-3xl font-bold">Info My Pets</h3>
        <ChartMyPets />
        <Link to={"/my-pets/1"} className="underline">
          <p className="text-end">Lihat Info Lainnya</p>
        </Link>
      </section>
      <hr />
      {/* RECOMMENDATION SECTION */}
      <section className="px-20 pt-20 text-primary">
        <h3 className="text-3xl font-bold mb-5">Rekomendasi Layanan</h3>
        <ServiceRecommendations />
      </section>
      <FooterHome />
    </AppLayout>
  );
};

export default MyPetsView;
