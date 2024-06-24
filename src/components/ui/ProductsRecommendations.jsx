import React from "react";
import product_1 from "../../assets/product_1.png";
import { Link } from "react-router-dom";

const product_dummy = [
  {
    image: product_1,
    type: "Maknan Kering",
    title: "Cat Choice Adlut Salmon 800 Gram",
  },
  {
    image: product_1,
    type: "Obat & Vitamin",
    title: "Olive Care Vitamin Kucing Bulu Gambul",
  },
  {
    image: product_1,
    type: "Makanan Basah",
    title: "Cat Choice Adlut Salmon 800 Gram",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
  {
    image: product_1,
    type: "Makanan Kering",
    title: "Me-O 80 Gram Adlut Ocean Fish",
  },
];

const ProductsRecommendations = () => {
  return (
    <div className=" carousel gap-5 w-full">
      {product_dummy.map((item, index) => (
        <div
          key={index}
          className="min-w-56 border bg-white card flex flex-col drop-shadow"
        >
          <div>
            <img src={item.image} alt="pet" className="p-5" />
          </div>
          <div className="flex flex-col pt-4 border-t  text-black gap-2 p-5">
            <span className="bg-tertiary/80 text-white px-3 rounded-full w-fit text-xs">
              {item.type}
            </span>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <Link to={"/product/1"}>
              <button className="btn btn-sm text-white bg-tertiary hover:bg-tertiary/80 rounded-full">
                Lihat Produk
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsRecommendations;
