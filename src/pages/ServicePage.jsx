import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { FaLocationPin } from "react-icons/fa6";
import ServiceRecommendations from "../components/ui/ServiceRecommendations";
import { IoSearch } from "react-icons/io5";
import ProductsRecommendations from "../components/ui/ProductsRecommendations";
import service_catalog_1 from "../assets/service_catalog_1.png";
import service_catalog_2 from "../assets/service_catalog_2.png";
import service_catalog_3 from "../assets/service_catalog_3.png";
import { Link } from "react-router-dom";
import FooterService from "../components/ui/FooterService";

const service = [
  {
    image: service_catalog_1,
    title: "Vets",
    desc: "Pemeriksaan Pets Rutin Sangat Penting!",
  },
  {
    image: service_catalog_2,
    title: "Grooming",
    desc: "Perawatan Bulu pets agar bersih dan wangi!",
  },
  {
    image: service_catalog_3,
    title: "Pet Hotel",
    desc: "Penitipan pets ketika sedang berpergian!",
  },
];

const ServicePage = () => {
  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section
        className="py-32 bg-[#FFB3A3] bg-center"
        style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
      >
        <div className="text-center text-white mx-auto w-1/2 space-y-5">
          <h1 className="text-4xl font-semibold">
            Temukan Perawatan Terbaik untuk Hewan Peliharaan Anda
          </h1>
          <p className="text-lg">
            Jelajahi layanan yang direkomendasikan untuk hewan peliharaan Anda
          </p>
        </div>
      </section>
      {/* MORE SECTION */}
      <section className="p-20 text-primary">
        <h1 className="text-4xl font-bold text-center">
          Rekomendasi Pelayanan
        </h1>
        <div className="grid grid-cols-3 items-center my-5">
          {/* LIST SERVICE */}
          {service.map((items, index) => (
            <a
              href="#"
              className="content-center text-center space-y-2"
              key={index}
            >
              <div className="h-20 w-20 btn btn-ghost rounded-full bg-tertiary/20 mx-auto content-center hover:border-tertiary hover:bg-transparent">
                <img src={items.image} alt="service-img" />
              </div>
              <p className="font-semibold">{items.title}</p>
              <p>{items.desc}</p>
            </a>
          ))}
        </div>
        <Link to={"/serviceList"}>
          <button className="btn btn-ghost outline hover:bg-tertiary/80 hover:text-white flex mt-10 mx-auto">
            Pelajari Lebih Lanjut
          </button>
        </Link>
      </section>
      {/* RECOMENDATION SECTION */}
      <section className="p-20 bg-[#FFB3A3]">
        <label className="input input-bordered flex items-center gap-2 text-black w-3/4 mx-auto mb-10 ">
          <input type="text" className="grow" placeholder="Cari" />
          <IoSearch />
        </label>
        <div className="flex items-center text-white">
          <FaLocationPin />
          <select
            name="location"
            id="location"
            className=" select select-sm bg-transparent"
          >
            <option value="surabaya">Surabaya, Jawa Timur</option>
            <option value="malang">Malang, Jawa Timur</option>
          </select>
        </div>
        <ServiceRecommendations />
      </section>
      {/* PRODUCTS RECOMENDATION SECTION */}
      <section className="p-20 space-y-5">
        <div className="w-1/2 mx-auto text-center">
          <h1 className="text-4xl font-bold text-center text-primary">
            Temukan produk terbaik untuk hewan kesayangan Anda
          </h1>
        </div>
        <ProductsRecommendations />
      </section>
      <FooterService />
    </AppLayout>
  );
};

export default ServicePage;
