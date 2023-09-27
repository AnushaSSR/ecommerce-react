import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./ProductsApp/Users/Signin";
import Signup from "./ProductsApp/Users/Signup";
import { ToastContainer, toast } from "react-toastify";
import ProductList from "./components/ProductList";
import ProductView from "./ProductsApp/Products/ProductView";
import ProductCreate from "./ProductsApp/Products/ProductCreate";
import { CustomRoutes } from "./CustomRoutes";
const Routes = () => {
  return (
    <div className="text-center">
        <Router>
            
        </Router>
      {/* <Navbar /> */}
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/product"
          element={
            <CustomRoutes>
              <ProductView />
            </CustomRoutes>
          }
        />
        <Route
          path="/product-create"
          element={
            <CustomRoutes>
              <ProductCreate />
            </CustomRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default Routes;