import React from "react";
import AppLayout from "../../layouts/AppLayout";
import service_1 from "../../../assets/service_1.png";
import detail_1 from "../../../assets/detail_1.png";
import { MdOutlineStar } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import ProductsRecommendations from "../../ui/ProductsRecommendations";
import FooterService from "../../ui/FooterService";
import { Link } from "react-router-dom";

const DetailService = () => {
  const service_dummy = [
    {
      image: service_1,
      title: "Grooming Lengkap",
      desc: "Anjing/Kucing",
    },
    {
      image: service_1,
      title: "Grooming Kutu",
      desc: "Anjing/Kucing",
    },
    {
      image: service_1,
      title: "Grooming Jamur",
      desc: "Anjing/Kucing",
    },
    {
      image: service_1,
      title: "Grooming Jamur",
      desc: "Anjing/Kucing",
    },
    {
      image: service_1,
      title: "Grooming Jamur",
      desc: "Anjing/Kucing",
    },
  ];
  return (
    <AppLayout>
      {/* MAIN SECTION */}
      <section className="p-20 text-gray-500">
        <div className="h-[40em] overflow-hidden rounded-lg relative">
          <img
            src={detail_1}
            alt="main-picture"
            className="w-full h-full absolute object-cover object-center"
          />
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">Petstasion</h1>
            <div className="flex space-x-2 items-center">
              <BsClock />
              <p>Senin-Minggu</p>
              <span className="bg-tertiary/50 rounded text-white px-4">
                08.00 - 20.00
              </span>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <MdOutlineStar className="text-tertiary text-3xl" />
            <h1 className="text-3xl font-semibold">4,4</h1>
          </div>
        </div>
        <div className="my-5">
          <p className=" font-semibold">Tentang</p>
          <p>
            hewan peliharaan yang bisa mencakup penjualan makanan hewan,
            perlengkapan, mainan, dan aksesori lainnya untuk hewan peliharaan.
          </p>
        </div>
        <div className="my-5 space-y-3">
          <p className="font-semibold">Layanan</p>
          <span className="bg-tertiary/80 badge text-white px-4">
            Grooming
          </span>
          <div className="flex overflow-x-auto hide-scrollbar space-x-10">
            {/* CARD SERVICE */}
            {service_dummy.map((items, key) => (
              <div className="card border overflow-hidden min-w-96" key={key}>
                <img src={items.image} alt="service-img" />
                <div className=" card-body">
                  <h3 className="text-2xl font-bold">{items.title}</h3>
                  <p>{items.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className="bg-tertiary/80 text-white px-4 badge">Pet Shop</span>
      </section>
      {/* RECOMENDATION PRODUCT */}
      <section className="p-20">
        <div className="flex justify-between items-center mb-10">
        <h1 className=" text-xl font-semibold">Rekomendasi Produk</h1>
        <Link to="#" className="underline">Lihat Lainnya</Link>
        </div>
        <ProductsRecommendations/>
      </section>
      {/* LOCATION SECTION */}
      <section className="px-20 mb-20 text-gray-500">
        <h1 className=" text-xl font-semibold">Peta Lokasi</h1>
        <p className=" font-light mb-5">Jl.Kutai No 84, Surabaya, Jawa Timur</p>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?q=Jl.Kutai+No+84%2C+Surabaya%2C+Jawa+Timur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          className="w-full h-96"
        />
      </section>
      <FooterService />
    </AppLayout>
  );
};

export default DetailService;
