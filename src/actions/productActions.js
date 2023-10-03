// actions/productActions.js
import { FETCH_PRODUCTS, SET_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_FAILURE, SORT_PRODUCTS_BY_PRICE, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from './actions'
import { firebase } from 'firebase/app';
import 'firebase/firestore';
import { firestore } from '../services/firebase';

import { addDoc, collection, getDocs } from "@firebase/firestore"

export const handleSubmit = async (testdata, dispatch) => {

  const ref = collection(firestore, "Product_Data") // Firebase creates this automatically
  let data = {
    title: testdata.title,
    price: testdata.price,
    description: testdata.description,
    category: testdata.category,
    rating: testdata.rating,
    thumbnail: testdata.thumbnail,
    images: testdata.images
  }
  try {
    const newPostRef = await addDoc(ref, data);
    const postId = newPostRef.id;

    // Dispatch an action indicating success
    dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: postId });
  } catch (error) {

    console.log(error)
    dispatch({ type: 'ADD_PRODUCT_ERROR', payload: error.message });
  }

}

let message = ""
export const addProduct = async (product) => {
  try {
    message = { status: "success", message: "Product added succesfully" }
  } catch (error) {
    console.error('Error:', error);
    message = { status: "failed", message: "Add product to database failed" }
  }
  return {
    type: ADD_PRODUCT,
    payload: product,
    message: message
  };
};

const fetchData = async () => {
  const res = await fetch("https://my-json-server.typicode.com/AnushaSSR/ecommerce/products")
  const data = await res.json();
  return data;
};
export const fetchProducts = () => async (dispatch) => {
  const productsFromApi = await fetchData();
  const querySnapshot = await getDocs(collection(firestore, "Product_Data"));
  let prodDataFromDb = []
  querySnapshot.docs.forEach((doc) => {
    let docdata = doc.data()
    docdata.id = doc.id;
    prodDataFromDb.push(docdata)
  });
  const products = [...productsFromApi, ...prodDataFromDb];
  localStorage.setItem("products", JSON.stringify(products));
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
    prodDataFromDb: prodDataFromDb
  })
};

export const setProduct = (product) => async (dispatch) => {
  dispatch({
    type: SET_PRODUCT,
    payload: product
  })
};
export const editProduct = (prods, product, desc, title, price, rating, dispatch) => {
  const productsList = prods.slice();
  message = "Changes saved succesfully"

  productsList.forEach(prod => {
    if (prod.id === product.id) {
      prod.description = desc;
      prod.rating = rating;
      prod.title = title;
    }
  });
  return dispatch({
    type: EDIT_PRODUCT,
    payload: productsList,
    message: message
  })

}


export const sortProducts = (items, sort, dispatch) => {
  const products = items.slice();
  if (sort !== '') {
    console.log("inde if ", sort)
    products.sort((a, b) => (sort === 'lowest'
      ? ((a.price > b.price) ? 1 : -1)
      : ((a.price < b.price) ? 1 : -1)));
  } else {
    products.sort((a, b) => (a.id > b.id) ? 1 : -1);
  }
  return dispatch({
    type: SORT_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      products: products
    }
  })
}

export const deleteProduct = (products, product, dispatch) => {
  const productsList = products.slice().filter(prod => prod.id !== product.id);
  //localStorage.setItem("productsList", JSON.stringify(productsList));
  message = "Product deleted succesfully"

  return dispatch({
    type: DELETE_PRODUCT,
    payload: {
      products: productsList
    },
    message: message
  })
}
