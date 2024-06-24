import React from "react";
import logo_navbar from "../../assets/logo_navbar.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AppLayout = ({ children }) => {
  const pathname = location.pathname.split("/")[1];

  return (
    <section>
      {/* NAVBAR */}
      <nav className=" flex justify-between items-center py-2 px-5 text-primary">
        <Link to="/my-pets" className="flex space-x-2 items-center">
          <img src={logo_navbar} alt="logo" className="w-12" />
          <h1 className="font-bold">BulBul</h1>
        </Link>
        <div className="flex space-x-5 items-center">
          <Link to="/" className={pathname == "home" && "font-bold"}>
            Home
          </Link>
          <Link to="/blog" className={pathname == "blog" && "font-bold"}>
            Blog
          </Link>
          <Link to="/service" className={pathname == "service" && "font-bold"}>
            Layanan
          </Link>
          <Link to="/product" className={pathname == "product" && "font-bold"}>
            Produk
          </Link>
          <Link to="/profile">
            <div className=" w-10 h-10 rounded-full bg-slate-400"></div>
          </Link>
        </div>
      </nav>
      {/* MAIN */}
      {children}
    </section>
  );
};

export default AppLayout;
