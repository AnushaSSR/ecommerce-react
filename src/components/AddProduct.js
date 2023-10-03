import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { Link, NavLink,useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { addProduct,handleSubmit} from '../actions/productActions';
import '../assets/css/addProduct.css'
//import handleSubmit from './handleSubmit';
//import handleSubmit from './handleSubmit';
import { useRef } from 'react';
import image from '../assets/images/comingsoon.jpg'


const AddProduct = () => {
  const [product, setProduct] = useState({title: '', description: '', price: '' ,thumbnail: image,category:"smartPhone",images:[image,image],rating:5});
  const navigate = useNavigate()
 
  const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [name,setName] = useState('')

    const handleChange = (e) => {
      console.log("the element value is",e)
      const { name, value } = e.target;
  setName(value)
console.log("name is ",name)
console.log("product  is ",product)
      setProduct({ ...product, [name]: value});
    };
  //    const dataRef = useRef()
 
/*    const submithandler = (e) => {
      e.preventDefault()
      handleSubmit(dataRef.current.value)
      dataRef.current.value = ""
    }*/
   
    
  
  /*  const onAddHandler = () => {
        dispatch(setProduct(todoArr))
        if (!input) return;
        const todo = {
          id: uuidv4().split("-")[0],
          text: input
        };
        // const newArr = [...todoArr, todo]
        // setTodoArr(newArr)
    
        setTodoArr([...todoArr, todo]);
        setInput("");
      };*/
      const titleRef = useRef()
      const nameRef = useRef()
      const descRef = useRef()
      const priceRef = useRef()
       
      const brandRef = useRef()
      const ratingRef = useRef()
      const catRef = useRef()
      // let data = ({ name: nameRef.current.value, description: descRef.current.value, price: priceRef.current.value })
      const submithandler = (e) => {
        e.preventDefault()
        //console.log("inside submithandler", dataRef)
        console.log("product  is ",product)

        handleSubmit(product,dispatch)

        //dataRef.current.value = ""
       titleRef.current.value = ''
        descRef.current.value = '' 
        priceRef.current.value = ''
        brandRef.current.value = ''
        ratingRef.current.value = 'Select rating'
        catRef.current.value = 'Select Category'

        navigate(`/products`);

        //data = ({ name: '', description: '', price: '' })
      }
      

  /*const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addProduct(product)); // Dispatch the action to add the product
    setProduct({ name: '', description: '', price: '' }); // Clear the form
  };*/


  
 /* const onHandleCreate = async () => {
    const apiResponse = await createProduct(values);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  };*/


  return (
    <>
    
      <Navbar/>
      <div id="form-container" className="product-form">
      <h2>Add Product</h2>
      <form onSubmit={submithandler}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={product.title} onChange={handleChange} ref={titleRef} />
        </div>
         <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" value={product.description} onChange={handleChange} ref={descRef}/>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" value={product.brand} onChange={handleChange}  ref={brandRef}/>
        </div> 
        <div className="form-group">
          <label htmlFor="brand">Price:</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleChange}  ref={priceRef}/>
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
          <select type="text" id="category" name="category" value={product.category} onChange={handleChange}  defaultValue ={"smartPhone"}ref={catRef}>
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