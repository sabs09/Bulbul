import React from "react";
import AppLayout from "../components/layouts/AppLayout";
import { FaLocationPin } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import ProductsRecommendations from "../components/ui/ProductsRecommendations";
import bucket from "../assets/bucket.png";
import product_catalog_1 from "../assets/product_catalog_1.png";
import product_catalog_2 from "../assets/product_catalog_2.png";
import product_catalog_3 from "../assets/product_catalog_3.png";
import product_catalog_4 from "../assets/product_catalog_4.png";
import { Link } from "react-router-dom";

const service = [
  {
    image: product_catalog_1,
    title: "Mainan",
    desc: "Anjing/Kucing",
    price: "Rp. 10.000",
  },
  {
    image: product_catalog_2,
    title: "Makanan",
    desc: "Perawatan Bulu pets agar bersih dan wangi!",
    price: "Rp. 10.000",
  },
  {
    image: product_catalog_3,
    title: "Obat & Vitamin",
    desc: "Penitipan pets ketika sedang berpergian!",
    price: "Rp. 10.000",
  },
  {
    image: product_catalog_4,
    title: "Shampoo",
    desc: "Anjing/Kucing",
    price: "Rp. 10.000",
  },
];

const ProductPage = () => {
  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section
        className="py-32 bg-[#FFB3A3] bg-center"
        style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
      >
        <div className="text-center text-white mx-auto w-1/2 space-y-5">
          <h1 className="text-4xl font-semibold">
            Selamat Datang di Katalog BulBul!
          </h1>
          <p className="text-lg">
            Temukan produk terbaik untuk hewan kesayangan Anda
          </p>
        </div>
      </section>
      {/* MORE SECTION */}
      <section className="p-20 text-primary">
        <h1 className="text-4xl font-bold text-center">
          Rekomendasi Produk Pilihan
        </h1>
        <div className="grid grid-cols-4 items-center my-5">
          {/* LIST SERVICE */}
          {service.map((items, index) => (
            <a
              href="#"
              className="content-center text-center space-y-2"
              key={index}
            >
              <div className="h-20 w-20 btn btn-ghost rounded-full bg-tertiary/20 mx-auto content-center hover:bg-transparent hover:border-tertiary">
                <img src={items.image} alt="service-img" />
              </div>
              <p className="text-lg">{items.title}</p>
              <p className="text-black text-sm">{items.desc}</p>
              <p className=" font-medium text-lg">Mulai dari {items.price}</p>
            </a>
          ))}
        </div>
        <Link to={"/productList"}>
          <button className="px-5 py-2 btn btn-ghost hover:bg-tertiary/80 hover:text-white  outline flex mt-10 mx-auto">
            Pelajari Lebih Lanjut
          </button>
        </Link>
      </section>
      {/* RECOMENDATION SECTION */}
      <section className="p-20 bg-[#FFB3A3]">
        <div className="gap-1 text-white text-center">
          <h1 className="text-4xl font-bold">Jelajahi Berdasarkan Kategori</h1>
          <p>Pilih dari berbagai kebutuhan hewan peliharaan</p>
        </div>
        <div className="input input-bordered flex items-center gap-2 text-black w-3/4 mx-auto my-10">
          <input
            type="text"
            className="grow"
            placeholder="Temukan Product Terbaik"
          />
          <IoSearch />
        </div>
        <div className="flex items-center text-white mb-5">
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
        <ProductsRecommendations />
      </section>
      {/* MORE SECTION */}
      <section className="p-20 grid grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-primary">Tips & Trik</h1>
          <p className="text-[#6D6F77]">
            Jelajahi berbagai topik terkait tips & trik perawatan hewan !
          </p>
        </div>
        <img src={bucket} alt="cover-img" className=" mx-auto border" />
      </section>
    </AppLayout>
  );
};

export default ProductPage;
