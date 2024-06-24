import React from "react";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import VerifyPage from "./pages/VerifyPage";
import MyPetsPage from "./pages/MyPetsPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UserInsigthPage from "./pages/UserInsigthPage";
import BlogAdminPage from "./pages/admin/BlogAdminPage";
import ServiceAdminPage from "./pages/admin/ServiceAdminPage";
import AdminPage from "./pages/admin/AdminPage";
import ProductAdminPage from "./pages/admin/ProductAdminPage";
import DetailUserAdmin from "./components/views/admin/DetailUserAdmin";
import CreateBlogAdmin from "./components/views/admin/CreateBlogAdmin";
import ServicePage from "./pages/ServicePage";
import DetailService from "./components/views/service/DetailService";
import CreateServiceAdmin from "./components/views/admin/CreateServiceAdmin";
import ListService from "./components/views/service/ListService";
import ProductPage from "./pages/ProductPage";
import ListProduct from "./components/views/product/ListProduct";
import DetailProduct from "./components/views/product/DetailProduct";
import CreateProductAdmin from "./components/views/admin/CreateProductAdmin";
import EditProfile from "./components/views/profile/EditProfile";
import SettingProfile from "./components/views/profile/SettingProfile";
import EditProductAdmin from "./components/views/admin/EditProductAdmin";
import EditServiceAdmin from "./components/views/admin/EditServiceAdmin";
import BlogPage from "./pages/BlogPage";
import DetailBlog from "./components/views/blog/DetailBlog";
import DetailPets from "./components/views/myPets/DetailPets";
import WeightGrafikPets from "./components/views/myPets/WeightGrafikPets";
import MyPetsListPage from "./pages/MyPetsListPage";
import ReminderPage from "./pages/ReminderPage";

export default function App() {
  return (
    <Routes>
      {/* sudah selesai */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />
      <Route path="/verify" element={<VerifyPage />} />

      <Route path="/admin/user-insigth" element={<UserInsigthPage />} />
      <Route path="/admin/dashboard" element={<AdminPage />} />
      <Route path="/admin/dashboard/:id" element={<DetailUserAdmin />} />
      <Route path="/admin/blog" element={<BlogAdminPage />} />
      <Route path="/admin/blog/create" element={<CreateBlogAdmin />} />
      <Route path="/admin/service" element={<ServiceAdminPage />} />
      <Route path="/admin/service/create" element={<CreateServiceAdmin />} />
      <Route path="/admin/service/:id" element={<EditServiceAdmin />} />
      <Route path="/admin/product" element={<ProductAdminPage />} />
      <Route path="/admin/product/create" element={<CreateProductAdmin />} />
      <Route path="/admin/product/:id" element={<EditProductAdmin />} />
      
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/service/1" element={<DetailService/>} />
      <Route path="/serviceList" element={<ListService/>} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/1" element={<DetailProduct />} />
      <Route path="/productList" element={<ListProduct />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/1" element={<DetailBlog />} />

      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/profile/setting" element={<SettingProfile />} />

      {/* Belum selesai */}
      <Route path="/admin/user-insigth" element={<UserInsigthPage />} />
      <Route path="/my-pets" element={<MyPetsPage />} />
      <Route path="/my-pets/1" element={<DetailPets />} />
      <Route path="/my-pets/1/1" element={<WeightGrafikPets />} />
      <Route path="/my-pets-list" element={<MyPetsListPage />} />
      
      <Route path="/my-pets/reminder" element={<ReminderPage />} />
    </Routes >
  )
}