import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { IoSearch } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import ServiceRecommendations from "../../ui/ServiceRecommendations";
import bucket from "../../../assets/bucket.png";
import doctor from "../../../assets/doctor.png";
import clinic from "../../../assets/clinic.png";
import product_1 from "../../../assets/product_1.png";
import card_1 from "../../../assets/card_1.jpg";
import card_2 from "../../../assets/card_2.jpg";
import FooterHome from "../../ui/FooterHome";
import { Link } from "react-router-dom";

const HomeView = () => {
  const blog_dummy = [
    {
      image: card_1,
      title: "Memilih Hewan Peliharaan yang Tepat",
      desc: "Tips memilih hewan peliharaan yang sempurna untuk gaya hidup",
    },
    {
      image: card_2,
      title: "Memilih Hewan Peliharaan yang Tepat",
      desc: "Tips memilih hewan peliharaan yang sempurna untuk gaya hidup",
    },
  ];

  const product_dummy = [
    {
      image: product_1,
      title: "Vitamin",
      price: 100000,
    },
    {
      image: product_1,
      title: "Obat",
      price: 20000,
    },
  ];
  return (
    <>
      <AppLayout>
        {/* HERO SECTION */}
        <section
          className="py-32 text-white bg-[#FFB3A3] bg-center"
          style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold">Selamat Datang di BulBul! </h1>
            <h2 className="text-3xl font-medium my-2">
              Kelola hewan peliharaan Anda dengan mudah
            </h2>
            <label className="input input-bordered flex items-center gap-2 text-black w-1/2 mx-auto">
              <input type="text" className="grow" placeholder="Search" />
              <IoSearch />
            </label>
          </div>
        </section>
        {/* BLOG SECTION */}
        <section className="grid grid-cols-2 items-center p-20">
          {/* LEFT SIDE */}
          <img src={bucket} alt="cover-img" className="w-3/4 mx-auto" />
          {/* RIGHT SIDE */}
          <div className="space-y-5">
            <h3 className="text-4xl font-bold text-primary">Blog Edukasi</h3>
            <p className="text-2xl font-light text-gray-500">
              Pelajari semua tentang perawatan dan perilaku hewan peliharaan
            </p>
            {/* CARD */}
            {blog_dummy.map((items, key) => (
              <Link to="#" className="block" key={key}>
                <div className="bg-[#FF9985] card p-5">
                  <div className="flex space-x-5">
                    <div className="w-20 h-20 relative rounded overflow-hidden">
                      <img
                        src={items.image}
                        alt="blog-img"
                        className="w-full h-full absolute object-cover object-center"
                      />
                    </div>
                    <div className="text-white">
                      <h4 className="text-xl font-semibold">{items.title}</h4>
                      <p>{items.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* SERVICES SECTION */}
        <section
          className="bg-[#FFB3A3] grid grid-cols-2 items-center text-white p-20 bg-center"
          style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
        >
          {/* LEFT SIDE */}
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">Layanan Yang Direkomendsikan</h3>
            {/* CARD */}
            <Link to="#" className="block">
              <div className="bg-white/40 card  p-5">
                <div className="flex space-x-5">
                  <div className="bg-[#FF8066]/20 rounded-full">
                    <img src={clinic} alt="menu-img" className="w-12 p-2" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Klinik Hewan</h4>
                    <p>Layanan darurat dan pemeriksaan rutin</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="#" className="block">
              <div className="bg-white/40 card p-5">
                <div className="space-x-5 flex">
                  <div className="bg-[#FF8066]/20 rounded-full">
                    <img src={clinic} alt="menu-img" className="w-12 p-2" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Klinik Hewan</h4>
                    <p>Layanan darurat dan pemeriksaan rutin</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* RIGHT SIDE */}
          <img src={doctor} alt="cover-img" className="w-3/4 mx-auto rounded" />
        </section>
        {/* PRODUCTS SECTION */}
        <section className="grid grid-cols-2 items-center p-20">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            <h3 className="text-4xl font-bold text-primary">
              Produk Hewan Peliharaan Penting
            </h3>
            <p className="text-gray-500">
              Jelajahi beragam perlengkapan hewan peliharaan berkualitas tinggi!
            </p>
          </div>
          {/* RIGHT SIDE */}
          <div className="flex gap-5">
            {/* CARD */}
            {product_dummy.map((items, key) => (
              <Link to="#" key={key}>
                <div className="card border w-64 py-3">
                  <div className="w-40 h-40 overflow-hidden relative mx-auto">
                    <img
                      src={items.image}
                      alt="product-img"
                      className="w-full h-full absolute object-cover object-center"
                    />
                  </div>
                  <hr />
                  <div className="p-2 text-gray-500">
                    <p className="text-primary">{items.title}</p>
                    <p className=" font-medium">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(items.price)}
                    </p>
                    <GiShoppingCart />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <hr />
        {/* RECOMENDATION SECTION */}
        <section className="px-20 pt-20">
          <h3 className="text-4xl font-bold text-primary mb-5">Rekomendasi Layanan</h3>
          <ServiceRecommendations />
        </section>
        <FooterHome />
      </AppLayout>
    </>
  );
};

export default HomeView;
