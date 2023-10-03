import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.webp";
import "../assets/css/Navbar.css"

const Navbar = () => {
  const storeData = useSelector((store) => { return store });//data fetched from store
  let cartCount = 0

  const cartItems = storeData.cartItems.items

  cartItems.forEach(item => {
    cartCount += item.count
  });

  return (
    <div className="navbar-container">
      <div className="nav-links">
        <NavLink to="/" className="nav-logo">
          <img style={{ width: "50px" }} src={logo} alt="logo"></img>
        </NavLink>

        <Link to="/products" className="nav-item">
          Products
        </Link>

        <Link to="/addProduct" className="nav-item">
          Add a product
        </Link>
      </div>
      <div className="cart-user-links">
        <Link to="/cart" className="nav-item">
          <img style={{ width: "50px" }} src={cart} alt="cart"></img><h5>{cartCount}</h5>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
