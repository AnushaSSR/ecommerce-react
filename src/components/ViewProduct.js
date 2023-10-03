import React from 'react'
import { useParams,useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect ,useState} from 'react';
import ImageCarousel from './ImageCarousel';

import '../assets/css/viewProduct.css'
import { addToCart, removeFromCart } from '../actions/cartAction';
// const SingleTopic = ({route,navigate}) => {
//   return (
//     <div>
//         {route.params.id}
//     </div>
//   )
// }
const ViewProduct = ({route,navigate}) => {
    let products = useSelector((store) => {
        return store.productsStore.products})

    let cartItems = useSelector((store) => {
            return store.cartItems.items})
    
    console.log("products", products)
   
    const storeData = useSelector((store) => {return store});

    products = storeData.productsStore.products
    console.log("products are ", products)
     const dispatch = useDispatch();
  const  value  = useParams();
  const location = useLocation();
  console.log("location is ",location);
  console.log("value is",value);
  let productId= value.id
  console.log("prod is is ", productId)

  products.forEach(element => {
    console.log("insde fo each " ,element)
    
  });
  //const product = products.slice().filter(prod => prod.id == productId);
    
  const targetItem =   products.slice().filter(prod => prod.id == productId);
  //const[product, setProduct] = useState('')
 /*useEffect(() => {
    setProduct(targetItem)
},[])*/

// /const prodId = product.id
let product = products.find((product) => product.id === parseInt(productId));
const handleAddToCart = () => {
    console.log("handleAddToCart called")
    addToCart(cartItems,product,dispatch)
}
const handleRemoveFromCart = () => {
    console.log("handleRemoveFromCart called")
    removeFromCart(cartItems,product,dispatch)
}
console.log(cartItems, productId)
const exists = cartItems.some(obj => obj.id === parseInt(productId));
  

//  products.find(item => item.id === productId);

//  console.log("productsList is : ", productsList )

  console.log("targetItem is : ", targetItem , product)

  if(product){
    console.log("product exists", product)
  }
  else{
    console.log("product does not exists", targetItem)
    product = targetItem[0]
    productId= value.id


  }
  return (
    <div>
        <Navbar/>

{/* 
<div>
      <h1>Product Details</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </div> */}
  
      {/* <h1>Another Page</h1> */}
      {/* <p>Received value: {value.id}</p> */}
      {/* {route} */}
 {/* //{location.state.id}  */}
 {/* <p>{productId}, {product.rating} 
</p> */}

{/* {} */}
 <div id="product-details-container" style={{height:100+"vh"}}>  
            
            <div class="title"> 
                <span class="col-12 display-4">{product?.title}</span>
            </div> 
            <hr class="hr"/>

            <div style={{marginBottom:0}} class="description font-family">
                <p>{product?.description}   </p>         </div>
            <div style={{marginBottom:0, marginTop:0}}  class="product-details font-family">
                <div class="prod-images">
                <ImageCarousel images = {product?.images} product={product}/>
                </div>
                <span class="product-data">
                    <p>
                     Ratings
                     </p>
                     <p>
                        <span class="key"><button class="btn-style rating" disabled=""><i class="fa-solid fa-star"></i> {product?.rating}</button></span>
                     </p>   
                         
                    <p><span class="key">Price: </span> {product?.price}</p>
                    <p><span class="key">Categort: </span> {product?.category}</p>
                    <p><span class="key">Brand: </span> {product?.brand} </p>
                    <p><span class="key">Discount % : </span>{product?.discountPercentage}</p>   
                </span>
            </div>
                              
            <div style={{margin:0}}>  
                <span id="cartSpan">                
                    <button id="addtoCart" class="btn" onClick={()=>(exists ? handleRemoveFromCart(product) : handleAddToCart(product))}>
                    {exists ? "Remove from cart" : "Add to cart"}
                    </button>
                </span>
            </div>
</div> 


    </div>
  )
}

export default ViewProduct