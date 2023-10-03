import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import ImageCarousel from './ImageCarousel.js';// carousel to dia[lsy the image of the product
import '../assets/css/viewProduct.css'
import { addToCart, removeFromCart } from '../actions/cartAction';

const ViewProduct = ({ route, navigate }) => {
    let products = useSelector((store) => {
        return store.productsStore.products
    })

    let cartItems = useSelector((store) => {
        return store.cartItems.items
    })

    const storeData = useSelector((store) => { return store });

    products = storeData.productsStore.products

    const dispatch = useDispatch();
    const value = useParams();
    const location = useLocation();
    let productId = value.id

    const targetItem = products.slice().filter(prod => prod.id == productId);

    let product = products.find((product) => product.id === parseInt(productId));
    const handleAddToCart = () => {
        addToCart(cartItems, product, dispatch)
    }
    const handleRemoveFromCart = () => {
        removeFromCart(cartItems, product, dispatch)
    }
    const exists = cartItems.some(obj => obj.id === parseInt(productId));

    if (product) {
        console.log("product exists", product)
    }
    else {
        console.log("product does not exists", targetItem)
        product = targetItem[0]
        productId = value.id
    }

    return (
        <div>
            <Navbar />

            <div id="product-details-container" style={{ height: 100 + "vh" }}>

                <div class="title">
                    <span class="col-12 display-4">{product?.title}</span>
                </div>
                <hr class="hr" />

                <div style={{ marginBottom: 0 }} class="description font-family">
                    <p>{product?.description}   </p>         </div>
                <div style={{ marginBottom: 0, marginTop: 0 }} class="product-details font-family">
                    <div class="prod-images">
                        <ImageCarousel images={product?.images} product={product} />
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

                <div style={{ margin: 0 }}>
                    <span id="cartSpan">
                        <button id="addtoCart" class="btn" onClick={() => (exists ? handleRemoveFromCart(product) : handleAddToCart(product))}>
                            {exists ? "Remove from cart" : "Add to cart"}
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ViewProduct