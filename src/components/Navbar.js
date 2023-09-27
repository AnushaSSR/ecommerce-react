import React from "react";
import { Link, NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
//import logo from '../assets/images/cart.webp'
import logo from "../assets/images/logo.png";
import cart from "../assets/images/cart.webp";
import Avatar from "./Avatar";
import "./Navbar.css"

//import Avatar from "../Avatar/Avatar";

const Navbar = () => {
    const storeData = useSelector((store) => {return store});
    let cartCount = 0
    const cartItems=  storeData.cartItems.items
    cartItems.forEach(item => {
//        console.log(item.count)
        cartCount +=item.count
    });
    console.log("the carcount is : ", cartCount)
    const User = "null";
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
          <img style={{ width: "50px" }} src={cart} alt="cart"></img>
        </Link>
        <h5>{cartCount}</h5>


        <div className="user-links">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log In
            </Link>
          ) : (
            <>  
                <Avatar>
                    <Link to="/User">{User}</Link>
              </Avatar>
              <button className="nav-item nav-links"> Log Out</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
