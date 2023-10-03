import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, handleSubmit } from '../actions/productActions';
import '../assets/css/addProduct.css'
import { useRef } from 'react';
import image from '../assets/images/comingsoon.jpg'


const AddProduct = () => {
  //product object sent to add to firebase colcetion / DB
  const [product, setProduct] = useState({ title: '', description: '', price: '', thumbnail: image, category: "smartPhone", images: [image, image], rating: 5 });
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [name, setName] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target;
    setName(value)
    setProduct({ ...product, [name]: value });
  };
  //ref to keep track of the current values of the form elements
  const titleRef = useRef()
  const nameRef = useRef()
  const descRef = useRef()
  const priceRef = useRef()
  const brandRef = useRef()
  const ratingRef = useRef()
  const catRef = useRef()

  //Handler to handle submission of form and add product
  const submithandler = (e) => {
    e.preventDefault()
    handleSubmit(product, dispatch)
    titleRef.current.value = ''
    descRef.current.value = ''
    priceRef.current.value = ''
    brandRef.current.value = ''
    ratingRef.current.value = 'Select rating'
    catRef.current.value = 'Select Category'
    navigate(`/products`);
  }

  return (
    <>
      <Navbar />
      <div id="form-container" className="product-form">
        <h2>Add Product</h2>
        <form onSubmit={submithandler}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={product.title} onChange={handleChange} ref={titleRef} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={product.description} onChange={handleChange} ref={descRef} />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand:</label>
            <input type="text" id="brand" name="brand" value={product.brand} onChange={handleChange} ref={brandRef} />
          </div>
          <div className="form-group ">
            <label htmlFor="brand">Price:</label>
            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} ref={priceRef} />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <select id="rating" name="rating" value={product.rating} onChange={handleChange} defaultValue={5} ref={ratingRef}>
              <option value={1}>1</option>
              <option value={2} default>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select type="text" id="category" name="category" value={product.category} onChange={handleChange} defaultValue={"smartPhone"} ref={catRef}>
              <option value={"smartPhone"}>SmartPhone</option>
              <option value={"Laptops"}>Laptops</option>
              <option value={"Clothing"}>Clothing</option>
              <option value={"Watches"}>Watches</option>
              <option value={"Cycle"}>Cycle</option>
            </select>
          </div>

          <button type="submit" className="add-button" >Add Product</button>
        </form>
      </div>
    </>
  )
}

export default AddProduct