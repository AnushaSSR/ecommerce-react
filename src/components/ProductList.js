import React from 'react';
import { fetchProducts, sortProducts, editProduct, deleteProduct } from '../actions/productActions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import "../assets/css/ProductList.css"
import StarRating from './StarRating'; // to display stars rating which corresponds to rounded off rating value 
import Navbar from './Navbar';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link, useNavigate } from 'react-router-dom';//to navigate to another page
import { error, success } from "../utils/notificationUtils"

const ProductList = ({ products }) => {
  const navigate = useNavigate()
  const prodsFromRedux = useSelector((store) => {
    return store.productsStore.products
  })
  const cartItemsFromRedux = useSelector((store) => {
    return store.cartItems.items
  })

  const storeData = useSelector((store) => { return store });
  const dispatch = useDispatch();
  console.log("prodsFromRedux", prodsFromRedux)

  const [input, setInput] = useState("");
  const [prodsArr, setProdsArr] = useState([])

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    setProdsArr(prodsFromRedux);
  }, [prodsFromRedux]);

  const [product, setProduct] = useState([]);
  const [enableForEdit, setEnableForEdit] = useState(1);
  const [idForEdit, setIdForEdit] = useState(0);
  const [hideSaveAndCancel, setHideSaveAndCancel] = useState(1);
  const [hideEditIcon, setHideEditIcon] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [ratingg, setRating] = useState(0);

  let descid, ratingid, check;

  const setFieldForEdit = (id, prod) => {
    setEnableForEdit(0)
    setHideSaveAndCancel(0)
    setIdForEdit(id)
    setDesc(prod.description)
    setTitle(prod.title)
    setPrice(prod.price)
    setRating(prod.rating)
  }

  const viewProduct = (prod) => {
    navigate(`/viewProduct/${prod}`);
  };

  //conditionally enabling fields for editing
  const getInputForPrice = (edit, price, disable, selectedId) => {
    return (!selectedId) ? <input className="mx-1 disableForEdit" defaultValue={price} disabled style={{ background: 'none', border: 'none' }} /> : <input className="form-control mx-1 " disabled={false} defaultValue={price} />
  }
  const getInputForTitle = (edit, title, disable, selectedId) => {
    return (!selectedId) ? <input className="mx-1 disableForEdit" disabled value={title} style={{ background: 'none', border: 'none' }} /> : <input className="form-control mx-1 disableForEdit" type="text" disabled={false} readOnly={false} defaultValue="jhghjghjgjhg" onChange={e => setTitle(e.target.value)} />
  }
  const getInputForDescription = (edit, description, disable, selectedId) => {
    return (!selectedId) ? <textarea disabled className="mx-1 disableForEdit" defaultValue={description} style={{ background: 'none', border: 'none' }} /> : <textarea className="form-control mx-1 disableForEdit" disabled={false} defaultValue={description} onChange={e => setDesc(e.target.value)} />
  }
  const getInputForRating = (edit, rating, disable, selectedId) => {
    return (!selectedId) ? <div hidden={(idForEdit == product.id) ? !enableForEdit : false}>
      <StarRating rating={rating} />
    </div>
      : <input
        className="form-control mx-1 disableForEdit"
        defaultValue={rating}
        disabled={false}
        readOnly={false}
        onChange={(e) => setRating(e.target.value)
        }
      />
  }

  const saveChanges = (product) => {
    setEnableForEdit(1)
    setHideSaveAndCancel(1)
    setIdForEdit(0)
    editProduct(prodsFromRedux, product, desc, title, price, ratingg, dispatch)
  }
  const cancelEdit = () => {
    setEnableForEdit(1)
    setHideSaveAndCancel(1)
    setIdForEdit(0)
    success("Changes discarded")
  }

  const [isSorted, setIsSorted] = useState(false);
  const toggleSort = (sort) => {
    setIsSorted(!isSorted);
    sortProducts(prodsFromRedux, sort, dispatch)
  };

  const onAddHandler = (product) => {
    addToCart(storeData.cartItems.items, product, dispatch)
  }

  const onDeleteHandler = (product) => {
    removeFromCart(storeData.cartItems.items, product, dispatch)
  }

  const deleteProd = (product) => {
    deleteProduct(prodsFromRedux, product, dispatch)
  }

  const exists = (productId) => {
    return cartItemsFromRedux.some(obj => obj.id === productId);
  }

  return (
    <div>
      <Navbar />
      <h2>Product List</h2>
      <div id="products-container">
        <button className="pd-5 btn btn-primary" onClick={isSorted ? () => toggleSort("lowest") : () => toggleSort("jkgj")}>Sort By price</button>
        {isSorted && <button className="pd-5 btn btn-primary" onClick={() => toggleSort("")}>"X"</button>}
        {prodsArr.map((product) => (
          <section key={product.id} >
            <div className="container ">
              <div className="row justify-content-center mb-3">
                <div className="col-md-12 col-xl-10">
                  <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                          <div className="bg-image hover-zoom ripple rounded ripple-surface">
                            <img src={product.thumbnail} className="w-100" />
                            <a href="#!">
                              <div className="hover-overlay">
                                <div className="mask"></div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                          <div style={{ padding: 5 + "px" }} className="col d-flex align-items-center">
                            <label id={"TitleLabel_" + product.id} hidden={(idForEdit == product.id) ? enableForEdit : true}>Title: </label>
                            {getInputForTitle(((idForEdit == product.id) ? hideSaveAndCancel : true), product.title, ((idForEdit == product.id) ? enableForEdit : false), (idForEdit === product.id ? true : false))}
                          </div>
                          <div style={{ padding: 5 + "px" }} className="col d-flex align-items-center">
                            <label id={descid} hidden={(idForEdit == product.id) ? enableForEdit : true}>Description: </label>
                            {getInputForDescription(((idForEdit == product.id) ? hideSaveAndCancel : true), product.description, ((idForEdit == product.id) ? enableForEdit : false), (idForEdit === product.id ? true : false))}

                          </div>
                          <div style={{ padding: 5 + "px" }} id={ratingid} className="col-sm-10 d-flex align-items-center d-flex flex-row">
                            <label hidden={(idForEdit == product.id) ? enableForEdit : true}>Rating: </label>
                            {getInputForRating(((idForEdit == product.id) ? hideSaveAndCancel : true), product.rating, ((idForEdit == product.id) ? enableForEdit : true), (idForEdit === product.id ? true : false))}

                          </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                          <div className="d-flex flex-row align-items-center mb-1">
                            <label hidden={(idForEdit == product.id) ? enableForEdit : true}>Price: </label>
                            Rs. {getInputForPrice(((idForEdit == product.id) ? hideSaveAndCancel : true), product.price, ((idForEdit == product.id) ? enableForEdit : false), (idForEdit === product.id ? true : false))}
                          </div>
                          <div className="d-flex flex-column mt-4">
                            <div className="col-sm-10 d-flex align-items-center">

                              <button className="form-control edit-product" style={{ color: "orange" }} onClick={() => setFieldForEdit(product.id, product)} hidden={((idForEdit == product.id) ? !hideSaveAndCancel : false)}>
                                <i className="fa-solid fa-pen-to-square" ></i>
                              </button>

                              <button className=" form-control delete-product" style={{ color: "red" }} type="button" onClick={() => deleteProd(product)} hidden={((idForEdit == product.id) ? !hideSaveAndCancel : false)}>
                                <i className="fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center">
                              <button className="form-control save-changes" style={{ color: "white", background: "green" }} onClick={() => saveChanges(product)} hidden={((idForEdit == product.id) ? hideSaveAndCancel : true)}>
                                <i className="fa-solid fa-check" ></i>
                              </button>
                              <button className="form-control cancel-edit" style={{ color: "white", background: "red" }} onClick={() => cancelEdit(product.id)} hidden={((idForEdit == product.id) ? hideSaveAndCancel : true)}  >
                                <i class="fa-solid fa-xmark"></i> </button>
                            </div>

                            <button id="addTocart-btn"
                              className="btn btn-primary btn-sm mt-2"
                              type="button" hidden={((idForEdit == product.id) ? !hideSaveAndCancel : false)}
                              onClick={() => (exists(product.id) ? onDeleteHandler(product) : onAddHandler(product))}>

                              {exists(product.id) ? "Remove from cart" : "Add to cart"}

                            </button>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <button className="link" id="view-products" onClick={() => viewProduct(product.id)}>View Product Details</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        ))}
      </div>
    </div>
  );
};

export default ProductList;
