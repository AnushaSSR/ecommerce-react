import React from 'react'
import  Navbar from '../components/Navbar'
import '../assets/css/home.css'
import prodIcon from '../assets/images/products.jpg'
import { fetchProducts } from '../actions/productActions'
import { Link,useNavigate } from 'react-router-dom';//to navigate to another page

const Home = () => {
  const navigate = useNavigate()
  const viewProductsList = () =>{
    console.log("view oroduct clicked")
    navigate('/products')
  }
return (
    
    <div><Navbar/><div id="container"></div>
    </div>
  )
}

export default Home