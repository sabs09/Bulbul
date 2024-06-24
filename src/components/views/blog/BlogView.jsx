import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { IoSearch } from "react-icons/io5";
import { BsEye } from "react-icons/bs";
import card_4 from "/src/assets/card_4.jpg";
import { Link } from "react-router-dom";
import FooterHome from "../../ui/FooterHome";

const blog_dummy = [
  {
    title: "Memilih Hewan Peliharaan yang Tepat untuk Gaya Hidup Anda",
    content:
      "Pelajari cara memilih hewan peliharaan sempurna yang sesuai dengan rutinitas harian dan situasi kehidupan Anda.",
    image: card_4,
  },
  {
    title: "Memilih Hewan Peliharaan yang Tepat untuk Gaya Hidup Anda",
    content:
      "Pelajari cara memilih hewan peliharaan sempurna yang sesuai dengan rutinitas harian dan situasi kehidupan Anda.",
    image: card_4,
  },
];

const education_dummy = [
  {
    title: "Cara Mengetahui Berat Badan Ideal untuk Kucing",
    content:
      "Tahukah kamu,kucing juga perlu mendapatkan berat badan ideal? Masalahnya",
    image: card_4,
    type: "Edukasi",
    time: "2",
  },
  {
    title: "Cara Mengetahui Berat Badan Ideal untuk Kucing",
    content:
      "Tahukah kamu,kucing juga perlu mendapatkan berat badan ideal? Masalahnya",
    image: card_4,
    type: "Edukasi",
    time: "2",
  },
  {
    title: "Cara Mengetahui Berat Badan Ideal untuk Kucing",
    content:
      "Tahukah kamu,kucing juga perlu mendapatkan berat badan ideal? Masalahnya",
    image: card_4,
    type: "Edukasi",
    time: "2",
  },
  {
    title: "Cara Mengetahui Berat Badan Ideal untuk Kucing",
    content:
      "Tahukah kamu,kucing juga perlu mendapatkan berat badan ideal? Masalahnya",
    image: card_4,
    type: "Edukasi",
    time: "2",
  },
];

const BlogView = () => {
  return (
    <AppLayout>
      {/* HERO SECTION */}
      <section className="text-center py-32 text-primary">
        <h1 className="text-4xl font-bold">Selamat Datang di Blog BulBul!</h1>
        <h2 className="text-3xl">
          Temukan artikel menarik untuk hewan kesayangan Anda
        </h2>
      </section>
      {/* SELECTION BLOG SECTION */}
      <section
        className="bg-[#FFB3A3] grid grid-cols-2 gap-20 items-center p-20 bg-center"
        style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
      >
        {/* LEFT SECTION */}
        <div className="text-center text-white space-y-3">
          <h1 className="text-4xl font-bold">Blog Unggulan</h1>
          <p>Temukan artikel unggulan disini!</p>
        </div>
        {/* RIGHT SECTION */}
        <div className="space-y-5">
          {/* CARD SECTION */}
          {blog_dummy.map((items, index) => (
            <div className="card bg-white p-5 rounded-lg border" key={index}>
              <div className="flex gap-5 items-center">
                <div className="w-44 h-20 rounded relative overflow-hidden">
                  <img
                    src={items.image}
                    alt="cover"
                    className="w-full h-full absolute object-cover object-center"
                  />
                </div>
                <div className="text-[#6D6F77] space-y-2">
                  <h4 className="text-xl font-semibold text-primary">
                    {items.title}
                  </h4>
                  <p>{items.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* EDUCATION BLOG SECTION */}
      <section className="p-20">
        <h2 className="text-4xl font-bold text-center text-primary">
          Blog Edukasi
        </h2>
        <label className="input input-bordered flex items-center gap-2 w-1/2 mx-auto my-10 text-black">
          <input type="text" className="grow" placeholder="Search" />
          <IoSearch />
        </label>
        <div className=" carousel w-full gap-5">
          {/* CARD SECTION */}
          {education_dummy.map((items, index) => (
            <div
              className="card w-96 border p-4 text-[#545F71] space-y-3"
              key={index}
            >
              <div className="flex gap-3 items-center">
                <div className="w-40 h-20 relative rounded overflow-hidden">
                  <img
                    src={card_4}
                    alt="img"
                    className=" w-full h-full absolute object-cover object-center"
                  />
                </div>
                <div>
                  <span className=" badge bg-tertiary/80 text-white">
                    {items.type}
                  </span>
                  <p className="font-semibold">{items.title}</p>
                  <div className="flex gap-2 items-center">
                    <BsEye />
                    <p>{items.time} menit baca</p>
                  </div>
                </div>
              </div>
              <p>{items.content.substring(0, 100)}...</p>
              <Link to={"/blog/1"}>
                <button className=" btn bg-tertiary hover:bg-tertiary/80 w-full text-white">
                  Detail
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* TIPS n TRICK SECTION */}
      <section
        className="bg-[#FFB3A3] grid grid-cols-2 gap-20 items-center p-20 bg-center"
        style={{ backgroundImage: `url('src/assets/puppyfeet.png')` }}
      >
        {/* LEFT SECTION */}
        <div className="text-white text-center space-y-3">
          <h3 className="text-4xl font-bold">Tips & Trik</h3>
          <p>
            Temukan Blog yang membahas Tip & Trik merawat kesehatan Hewan
            Peliharaanmu.
          </p>
        </div>
        {/* RIGHT SECTION */}
        <div className="space-y-5">
          {/* CARD SECTION */}
          {blog_dummy.map((items, index) => (
            <div className=" card bg-white rounded-lg p-5" key={index}>
              <div className="flex gap-5 items-center">
                <div className="w-40 h-20 relative rounded overflow-hidden">
                  <img
                    src={items.image}
                    alt="img"
                    className="w-full h-full absolute object-cover object-center"
                  />
                </div>
                <div className="text-[#6D6F77] space-y-2">
                  <h4 className="text-xl font-semibold text-primary">
                    {items.title}
                  </h4>
                  <p>{items.content}</p>
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

export default BlogView;
