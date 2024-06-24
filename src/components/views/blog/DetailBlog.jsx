import React from "react";
import AppLayout from "../../layouts/AppLayout";
import { BsEye } from "react-icons/bs";
import card_4 from "/src/assets/card_4.jpg";
import service_1 from "/src/assets/service_1.png";
import FooterService from "../../ui/FooterService";

const recommendation_dummy = [
  {
    image: service_1,
    type: "Edukasi",
    title: "√Kenali! 15 Cara Melatih Kucing Agar Nurut, Pintar dan Jinak",
    content: "tapi ada hal-hal yang sepertinya disukai oleh semua kucing",
    time: "2",
  },
  {
    image: card_4,
    type: "Edukasi",
    title: "√Kenali! 15 Cara Melatih Kucing Agar Nurut, Pintar dan Jinak",
    content: "tapi ada hal-hal yang sepertinya disukai oleh semua kucing",
    time: "2",
  },
  {
    image: card_4,
    type: "Edukasi",
    title: "√Kenali! 15 Cara Melatih Kucing Agar Nurut, Pintar dan Jinak",
    content: "tapi ada hal-hal yang sepertinya disukai oleh semua kucing",
    time: "2",
  },
  {
    image: service_1,
    type: "Edukasi",
    title: "√Kenali! 15 Cara Melatih Kucing Agar Nurut, Pintar dan Jinak",
    content: "tapi ada hal-hal yang sepertinya disukai oleh semua kucing",
    time: "2",
  },

];

const DetailBlog = () => {
  return (
    <AppLayout>
      {/* HERO IMAGE SECTION */}
      <section className="px-20">
        <div className="w-full h-[40em] rounded overflow-hidden relative">
          <img
            src={service_1}
            alt="cover-img"
            className="w-full h-full object-cover object-center absolute"
          />
        </div>
      </section>
      {/* HEADER CONTENT SECTION */}
      <section className="text-[#6D6F77] my-5 px-20">
        <h1 className="text-4xl font-bold text-primary">Blog Detail</h1>
        <span className=" badge bg-tertiary text-white px-5 py-3 mt-5">
          Edukasi
        </span>
        <h4 className="text-xl font-semibold">
          Cara Mengetahui Berat Badan Ideal untuk Kucing
        </h4>
        <div className="flex gap-2 items-center">
          <BsEye />
          <p>4 menit baca</p>
        </div>
      </section>
      {/* CONTENT SECTION */}
      <section className="text-[#6D6F77] my-5 px-20">
        <p className="font-bold">
          Menentukan Berat Badan Ideal untuk Kucing: Panduan Sederhana
        </p>
        <article>
          Apakah Anda memiliki kucing peliharaan yang sehat dan bahagia? Salah
          satu kunci utama untuk memastikan kesejahteraan mereka adalah dengan
          memantau berat badan mereka secara teratur. Seperti halnya manusia,
          kucing juga memiliki berat badan ideal yang harus dipertahankan untuk
          menjaga kesehatan dan kebahagiaannya. Namun, mengetahui berat badan
          ideal kucing bukanlah hal yang mudah bagi banyak pemilik hewan
          peliharaan. Berikut adalah panduan sederhana untuk membantu Anda
          menentukan berat badan ideal untuk kucing kesayangan Anda:
          <ol className=" list-inside list-decimal space-y-5 my-5 ">
            <li>
              <b>Konsultasikan dengan Dokter Hewan</b> <br />
              Langkah pertama yang terbaik adalah berkonsultasi dengan dokter
              hewan. Dokter hewan akan membantu menilai kondisi kesehatan kucing
              Anda secara keseluruhan, termasuk berat badannya. Mereka dapat
              memberikan panduan yang lebih spesifik berdasarkan usia, ras, dan
              kondisi kesehatan kucing Anda.
            </li>
            <li>
              <b>Perhatikan Ras dan Ukuran Tubuh</b> <br />
              Setiap ras kucing memiliki berat badan ideal yang berbeda-beda.
              Misalnya, kucing Maine Coon cenderung lebih besar dan berat
              daripada kucing domestik biasa. Jadi, penting untuk
              memperhitungkan ras kucing Anda saat menentukan berat badan
              idealnya. Selain itu, ukuran tubuh kucing juga memainkan peran
              penting. Sebuah kucing yang lebih besar mungkin memiliki berat
              badan ideal yang lebih tinggi daripada kucing yang lebih kecil.
            </li>
            <li>
              <b>Gunakan Tabel Berat Badan Ideal</b> <br />
              Ada banyak tabel berat badan ideal untuk kucing yang tersedia
              secara online. Tabel ini sering kali membagi berat badan ideal
              berdasarkan usia dan ras kucing. Namun, ingatlah bahwa ini hanya
              sebagai panduan umum, dan konsultasikan dengan dokter hewan Anda
              untuk rekomendasi yang lebih tepat.
            </li>
            <li>
              <b>Perhatikan Tanda-tanda Kesehatan</b> <br />
              Selain berat badan, penting juga untuk memperhatikan tanda-tanda
              kesehatan lainnya pada kucing Anda. Ini termasuk energi yang
              tinggi, bulu yang sehat dan mengkilap, nafsu makan yang baik, dan
              kunjungan rutin ke kotak pasir. Jika Anda melihat perubahan dalam
              perilaku atau kondisi fisik kucing Anda, segera konsultasikan
              dengan dokter hewan.
            </li>
            <li>
              <b>Lakukan Penilaian Rutin</b> <br />
              Terakhir, lakukan penilaian rutin terhadap berat badan kucing
              Anda. Anda dapat melakukan ini dengan menggunakan timbangan khusus
              untuk hewan peliharaan dan mencatat perkembangannya dari waktu ke
              waktu. Jika Anda melihat kenaikan atau penurunan berat badan yang
              signifikan, segera konsultasikan dengan dokter hewan.
            </li>
          </ol>
          Dengan memperhatikan berat badan ideal kucing Anda dan memastikan
          mereka tetap sehat dan bahagia, Anda membantu memastikan bahwa mereka
          menikmati hidup yang panjang dan berkualitas. Jadi, jadikan pemantauan
          berat badan kucing sebagai bagian penting dari perawatan sehari-hari
          Anda terhadap hewan peliharaan kesayangan Anda.
        </article>
      </section>
      {/* RECOMMENDATION BLOG SECTION */}
      <section className="p-20">
        <h3 className="text-2xl font-bold mb-5">Rekomendasi Blog</h3>
        <div className="grid grid-cols-2 gap-5 text-[#6D6F77]">
          {/* CARD SECTION */}
          {recommendation_dummy.map((items, index) => (
            <div className="card card-compact card-side bg-white border overflow-hidden">
              <img src={items.image} alt="img" className="w-40 object-cover" />
              <div className=" card-body">
                <span className=" badge bg-tertiary/80 text-white">
                  {items.type}
                </span>
                <p className=" font-semibold underline text-xl">
                  {items.title}
                </p>
                <p>{items.content}</p>
                <div className="flex gap-2 items-center">
                  <BsEye />
                  <p>{items.time} menit baca</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterService />
    </AppLayout>
  );
};

export default DetailBlog;
