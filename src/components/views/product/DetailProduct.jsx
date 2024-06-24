import React from "react";
import AppLayout from "../../layouts/AppLayout";
import ProductsRecommendations from "../../ui/ProductsRecommendations";
import product_1 from "../../../assets/product_1.png";
import puupyfeet from '/src/assets/puppyfeet.png'
import shopeeImage from '../../../assets/shopee.png'
import tokpedImage from '../../../assets/tokped.png'
import { Link } from "react-router-dom";

const DetailProduct = () => {
  return (
    <AppLayout>
      <section className="flex items-center gap-20 p-10 text-[#6D6F77]">
        {/* LEFT SIDE */}
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-5 text-primary">
            Product Detail
          </h1>
          <span className="bg-tertiary/80 badge text-white">
            Makanan Kering
          </span>
          <h3 className="text-lg font-semibold text-primary">
            Whiskas Adult Cat Tuna 1.2 Kg
          </h3>
          <p className=" text-justify my-10">
            WHISKAS makanan kucing yang sehat dan seimbang, secara spesifik di
            formulasikan untuk memenuhi kebutuhan nutrisi kucing pada setiap
            masa kehidupannya. WHISKAS mengerti akan kandungan nutrisi yang
            dibutuhkan oleh kucing dan setiap produk secara spesifik di
            formulasikan dengan kandungan nutrisi yang lengkap dan seimbang.
          </p>
          {/* MID INFORMATION */}
          <div className="grid grid-cols-2 gap-10 my-5">
            <div>
              <h3 className="text-lg font-medium mb-5">Kandungan Nutrisi</h3>
              <table className="table table-auto">
                <thead>
                  <tr className="bg-primary text-white">
                    <th>Kandungan</th>
                    <th>Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protein</td>
                    <td>24 %</td>
                  </tr>
                  <tr>
                    <td>Lemak</td>
                    <td>18 %</td>
                  </tr>
                  <tr>
                    <td>Kolesterol</td>
                    <td>0 %</td>
                  </tr>
                  <tr>
                    <td>Netrisili</td>
                    <td>0 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Bahan Penyusun</h3>
              <p className="text-justify">
                Sereal (Jagung dan/atau Gandum), Daging Unggas Olahan, Tepung
                Bulu Terhidrolisis, Bekatul Tanpa Lemak, Palm Stearin, Tepung
                Kacang Kedelai, Ikan Terhidrolisis, Tepung Gandum, Mineral,
                Tepung Jagung Gluten, GaransBeryodium, Vitamin, Taurin, Pewarna,
                Pengawet, Metionin, Perasa
              </p>
              <h3 className="text-lg font-medium mt-10 mb-3">
                Informasi Tambahan
              </h3>
              <ul className="list-disc list-inside">
                <li>
                  Mengandung Omega 3 & 6 dan Zinc untuk kesehatan kulit dan bulu
                  yang indah
                </li>
                <li>Mengandung Vit.A dan taurine untuk kesehatan matanya</li>
                <li>
                  Mengandung protein dari ikan yang segar, lemak yang baik,
                  vitamin dan mineral yang seimbang, untuk tetap menjaga
                  kucingmu aktif dan bahagia.
                </li>
              </ul>
            </div>
          </div>
          {/* BOTTOM INFROMATION */}
          <div>
            <h3 className="text-lg font-medium mb-3">Rekomendasi Toko</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-5 items-center">
                <div className="h-10 w-10 rounded-full border drop-shadow">
                  <img src={shopeeImage} className="w-10 pt-2" alt="shopee" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rp.67.275</h3>
                  <p className="text-xs">Harga Terbaik</p>
                </div>
                <Link to="#">
                  <button className="ml-10 underline bg-tertiary btn hover:bg-tertiary/80 text-white px-10">
                    Beli Sekarang
                  </button>
                </Link>
              </div>
              <div className="flex gap-5 items-center">
                <div className="h-10 w-10 rounded-full border drop-shadow">
                  <img src={tokpedImage} className="w-10" alt="tokopedia" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Rp.56.900</h3>
                  <p className="text-xs">Lebih Murah Rp 10.375</p>
                </div>
                <Link to="#">
                  <button className="underline bg-tertiary btn hover:bg-tertiary/80 text-white px-10">
                    Beli Sekarang
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="relative">
          <img
            src={product_1}
            alt="product-img"
            className="rounded border w-full p-3"
          />
          <img src={puupyfeet} className="absolute inset-y-0 object-cover  object-center  mx-auto my-auto -z-10" />
        </div>
      </section>
      <hr />
      {/* RECOMMENDATIONS PRODUCT SECTION */}
      <section className="p-10">
        <div className="flex justify-between items-center mb-5">
          <h1 className=" text-xl font-semibold">Rekomendasi Produk</h1>
          <Link to="#" className="underline">
            Lihat Lainnya
          </Link>
        </div>
        <ProductsRecommendations />
      </section>
    </AppLayout>
  );
};

export default DetailProduct;
