import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Navbar from "./components/navbar/Navbar";
import AddProduct from "./pages/products/add_product/AddProduct";
import Updateproduct from "./pages/products/update_product/Updateproduct";
import Brand from "./pages/brand/Brand";
import AddBrand from "./pages/brand/add_brand/AddBrand";
import UpdateBrand from "./pages/brand/update_brand/UpdateBrand";
import Seller from "./pages/seller/Seller";
import AddSeller from "./pages/seller/add_seller/AddSeller";
import UpdateSeller from "./pages/seller/update_seller/UpdateSeller";
import User from "./pages/user/User";
import AddUser from "./pages/user/add_user/AddUser";
import UpdateUser from "./pages/user/update_user/UpdateUser";
import ProductGuide from "./pages/product_guide/ProductGuide";
import AddGuide from "./pages/product_guide/AddGuide/AddGuide";
import UpdateGuide from "./pages/product_guide/updateGuide/UpdateGuide";
import BrandService from "./pages/brand_service/BrandService";
import AddService from "./pages/brand_service/addService/AddService";
import UpdateService from "./pages/brand_service/updateService/UpdateService";
import Invoice from "./pages/invoice/Invoice";
import AddInvoice from "./pages/invoice/addInvoice/AddInvoice";
import UpdateInvoice from "./pages/invoice/updateInvoice/UpdateInvoice";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="/products" element={<Product/>}/>
      <Route path="/products/product_add" element={<AddProduct/>}/>
      <Route path="/products/product_update" element={<Updateproduct/>}/>

      <Route path="/product_guide" element={<ProductGuide/>}/>
      <Route path="/product_guide/add_product_guide" element={<AddGuide/>}/>
      <Route path="/product_guide/update_product_guide" element={<UpdateGuide/>}/>

      <Route path="/brands" element={<Brand/>}/>
      <Route path="/brands/brand_add" element={<AddBrand/>}/>
      <Route path="/brands/brand_update" element={<UpdateBrand/>}/>

      <Route path="/brand_service" element={<BrandService/>}/>
      <Route path="/brand_service/add_brand_service" element={<AddService/>}/>
      <Route path="/brand_service/update_brand_service" element={<UpdateService/>}/>

      <Route path="/sellers" element={<Seller/>}/>
      <Route path="/sellers/seller_add" element={<AddSeller/>}/>
      <Route path="/sellers/seller_update" element={<UpdateSeller/>}/>

      <Route path="/users" element={<User/>}/>
      <Route path="/users/user_add" element={<AddUser/>}/>
      <Route path="/users/user_update" element={<UpdateUser/>}/>

      <Route path="/invoice" element={<Invoice/>}/>
      <Route path="/invoice/invoice_add" element={<AddInvoice/>}/>
      <Route path="/invoice/invoice_update" element={<UpdateInvoice/>}/>

    </Routes>
    </>
  );
}

export default App;
