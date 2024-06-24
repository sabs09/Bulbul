import React from "react";
import AppLayout from "../../layouts/AppLayout";
import logo_white from "../../../assets/logo_white.png";
import bucket from "../../../assets/bucket.png";
import card_1 from "../../../assets/card_1.jpg";
import card_2 from "../../../assets/card_2.jpg";
import card_3 from "../../../assets/card_3.jpg";
import card_4 from "../../../assets/card_4.jpg";
import FooterHome from "../../ui/FooterHome";
import { Link } from "react-router-dom";

const LandingView = () => {
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
  const articel_dummy = [
    {
      image: card_3,
      title: "Memilih Hewan Peliharaan yang Tepat",
      desc: "Tips memilih hewan peliharaan yang sempurna untuk gaya hidup",
    },
    {
      image: card_4,
      title: "Memilih Hewan Peliharaan yang Tepat",
      desc: "Tips memilih hewan peliharaan yang sempurna untuk gaya hidup",
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
            <div className="space-x-4 mt-12 mx-auto">
              <Link to="/login" className="btn btn-ghost outline outline-white px-8">
                Masuk
              </Link>
              <Link to="/register" className="btn btn-ghost bg-tertiary hover:bg-tertiary/80 px-8">
                Daftar
              </Link>
            </div>
          </div>
        </section>
        {/* BLOG SECTION */}
        <section className="grid grid-cols-2 items-center p-20">
          {/* LEFT SIDE */}
          <img
            src={bucket}
            alt="cover-img"
            className="rounded-md border w-3/4 mx-auto"
          />
          {/* RIGHT SIDE */}
          <div className="space-y-5">
            <h3 className="text-4xl font-bold text-primary">Blog Edukasi</h3>
            <p className="text-2xl font-light text-gray-500">
              Pelajari semua tentang perawatan dan perilaku hewan peliharaan
            </p>
            {/* CARD */}
            {blog_dummy.map((items, key) => (
              <Link to="#" className="block" key={key}>
                <div className="card bg-[#FF9985] p-5 text-white">
                  <div className="flex space-x-5">
                    <div className="w-20 h-20 overflow-hidden relative">
                      <img
                        src={items.image}
                        alt="blog-img"
                        className="w-full h-full absolute object-cover object-center"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{items.title}</h4>
                      <p>{items.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* ARTICEL SECTION */}
        <section
          className="bg-[#FFB3A3] grid grid-cols-2 items-center p-20 bg-center"
          style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
        >
          {/* LEFT SIDE */}
          <h3 className="text-4xl font-bold text-white text-center">Artikel Unggulan</h3>
          {/* RIGHT SIDE */}
          <div className="space-y-5">
            {/* CARD */}
            {articel_dummy.map((items, key) => (
              <Link to="#" className="block">
                <div className="card p-5 bg-white">
                  <div className="flex space-x-5 items-center">
                    <div className="w-20 h-20 overflow-hidden relative">
                      <img
                        src={items.image}
                        alt="articel-img"
                        className="w-full h-full absolute object-cover object-center"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{items.title}</h4>
                      <p className="text-gray-500">{items.desc}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* MORE SECTION */}
        <section className="grid grid-cols-2 items-center p-20">
          {/* LEFT SIDE */}
          <div className="space-y-5">
            <h3 className="text-4xl font-bold text-primary">
              Selamat datang di Blog Hewan Peliharaan!
            </h3>
            <p className="text-gray-500 text-2xl font-light">
              Jelajahi berbagai topik terkait perawatan dan kepemilikan hewan
              peliharaan!
            </p>
          </div>
          {/* RIGHT SIDE */}
          <img
            src={bucket}
            alt="cover-img"
            className="rounded-md border w-3/4 mx-auto"
          />
        </section>
        {/* ABOUT US SECTION */}
        <section className="flex space-x-20 items-center bg-[#FFB3A3] p-20">
          <img src={logo_white} alt="logo-white" />
          <div className="text-white space-y-5">
            <h3 className="text-3xl font-semibold text-center">About Us</h3>
            <p className="font-medium text-justify">
              BulBul adalah platform yang menyediakan bantuan kepada pawrents
              dalam merawat hewan peliharaan kesayangan mereka dengan lebih
              baik. Kami menyediakan akses mudah dan informatif terhadap
              perawatan hewan peliharaan dengan user interface yang mudah untuk
              dimengerti dan pendekatan konten yang ramah untuk new pawrents.
              Dengan menggunakan aplikasi ini, pawrents dapat merawat hewan
              kesayangan mereka dengan lebih baik dan terencana. Maka dari itu,
              tujuan Usability Testing ini membantu developer mengetahui
              seberapa berdampaknya penggunaan aplikasi BulBul dalam perawatan
              hewan.
            </p>
          </div>
        </section>
        <FooterHome />
      </AppLayout>
    </>
  );
};

export default LandingView;
