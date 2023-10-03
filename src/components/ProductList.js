import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, sortProducts, editProduct ,deleteProduct} from '../actions/productActions';
import { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import "../assets/css/ProductList.css"
import StarRating from './StarRating';
import { Card } from 'react-bootstrap';
import Navbar from './Navbar';
import { addToCart, removeFromCart } from '../actions/cartAction';
import { Link,useNavigate } from 'react-router-dom';//to navigate to another page
import store from '../store';
import { error, success } from "../utils/notificationUtils"//C:\Users\nssra\OneDrive\Desktop\ecommerce-react-redux\src\utils\notificationUtils,js";


const ProductList = ({ products }) => {
  const navigate = useNavigate()
  const prodsFromRedux = useSelector((store) => {
     //console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore);
     //console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore.products);
    return store.productsStore.products})
    const cartItemsFromRedux = useSelector((store) => {
      //console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore);
      //console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore.products);
     return store.cartItems.items})
 
    const storeData = useSelector((store) => {return store});
    //console.log("**************Store data is : ", storeData)
    /* => {
      console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore);
      console.log("khfgjkdhfgjkfghkjghjkg******",store.productsStore.products);
     return store.productsStore.products})*/
  const dispatch = useDispatch();
   console.log("prodsFromRedux",prodsFromRedux)

  const [input, setInput] = useState("");
  const [prodsArr, setProdsArr] = useState([])
  //  {
  //   const todosFromLC = JSON.parse(localStorage.getItem('todos')) ?? []
  //   return todosFromLC
  // }
  // );

  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  useEffect(() => {
    setProdsArr(prodsFromRedux);
  }, [prodsFromRedux]);
//console.log("the prods array data is ", prodsArr);

  const [product, setProduct] = useState([]);
  const [enableForEdit, setEnableForEdit] = useState(1);
  const [idForEdit, setIdForEdit] = useState(0);
  const [hideSaveAndCancel, setHideSaveAndCancel] = useState(1);
  const [hideEditIcon, setHideEditIcon] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [ratingg, setRating] = useState(0);

  let descid,ratingid,check;

  const setFieldForEdit = (id,prod) =>{
   // console.log("user selected to edit")
    //console.log(id);
//    if(TitleLabel_"+product.id)
    setEnableForEdit (0)
    setHideSaveAndCancel(0)
    setIdForEdit(id)
    setDesc(prod.description)
    setTitle(prod.title)
    setPrice(prod.price)
    setRating(prod.rating)

    //document.getElementById().hidden=true
    //setHideEditIcon(1)
    //document.getElementById().addClass('editMode');
  }

  const viewProduct = (prod) =>{
    
    navigate(`/viewProduct/${prod}`);
};

  const getInputForPrice = (edit, price, disable,selectedId) =>{
    return (!selectedId) ? <input className="mx-1 disableForEdit" defaultValue={price} disabled style={{background:'none',border:'none'}}/>    :  <input className="form-control mx-1 " disabled = {false} defaultValue={price}  />
  }
  const getInputForTitle = (edit, title, disable,selectedId) =>{
    console.log("********************* title is : ", title, selectedId);
    return (!selectedId ) ?  <input className="mx-1 disableForEdit" disabled value ={title}  style={{background:'none',border:'none'}}/>   :  <input className="form-control mx-1 disableForEdit" type="text" disabled= {false} readOnly={false} defaultValue="jhghjghjgjhg" onChange={e => setTitle(e.target.value)}/>
    //{title}/>//<textarea className="form-control mx-1 disableForEdit" defaultValue={title} />//  
  }
  const getInputForDescription = (edit, description, disable,selectedId) =>{
    //console.log("Description is ",description);
    return (!selectedId) ? <textarea disabled className="mx-1 disableForEdit" defaultValue ={description}  style={{background:'none',border:'none'}}/>    :  <textarea className="form-control mx-1 disableForEdit" disabled={false} defaultValue={description} onChange={e => setDesc(e.target.value)}/>
  }
  const getInputForRating = (edit, rating, disable,selectedId) =>{
    //console.log("Description is ",description);
    return (!selectedId) ?                             <div hidden ={(idForEdit==product.id)?!enableForEdit:false}>
    <StarRating rating={rating}/>
  </div>
: <input
    className="form-control mx-1 disableForEdit"
    defaultValue={rating}
    disabled= {false}
    readOnly={false}
    onChange={(e) => setRating(e.target.value)
    }
  />
  }
  const getChangedTitle = ()=>{
    console.log("titel changed")
  }
  const  UpdateDesc=(event) =>{
    console.log(event.target.value);
    console.log(event.target.value,"******************************************************************dfgdfg")
    setDesc(event.target.value)

  }
  const saveChanges =(product) =>{
    console.log("product",product)
    console.log(desc)

    setEnableForEdit (1)
    setHideSaveAndCancel(1)
    setIdForEdit(0)
    editProduct(prodsFromRedux,product,desc,title,price,ratingg,dispatch)
    console.log("saving changes");
    //setTitle
  }
  const cancelEdit =() =>{
    setEnableForEdit (1)
    setHideSaveAndCancel(1)
    setIdForEdit(0)
    success("Changes discarded")


    //console.log("Cancelling edit");
  }
  var rating =0

  
  const renderSwitch = (param) =>{
    switch(param) {
      case 1:
        return 'one';
      default:
        return 'two';
    }
  }
  const [isSorted, setIsSorted] = useState(false);
  const toggleSort = (sort) => {
   // console.log("list sorrted?",isSorted)
    setIsSorted(!isSorted);
    sortProducts(prodsFromRedux,sort,dispatch)
    /*{console.log (product)}
    {console.log (product.reverse())}*/
    //fetchData()
  };

  const onAddHandler = (product) => {
    //console.log("the product is is : ", product);
    //console.log("mhhgjhgjhgjhgjg************ ",storeData.cartItems.items)
    addToCart(storeData.cartItems.items, product,dispatch)

  }

  const onDeleteHandler = (product) => {
    removeFromCart(storeData.cartItems.items, product,dispatch)

  }

  const deleteProd = (product) => {
    console.log("deleteProduct called")

    deleteProduct(prodsFromRedux, product,dispatch)
  }


  const exists = (productId) =>{
    console.log(productId + "productId");


    return cartItemsFromRedux.some(obj => obj.id === productId);
  }

  return (
    <div>
      <Navbar/>
      <h2>Product List</h2>
      {/* {console.log("the products are ", {prodsFromRedux}+"kdjhfkdjg", prodsArr)} */}
      <div  id="products-container">
        <button className="pd-5 btn btn-primary" onClick={ isSorted ? ()=>toggleSort("lowest") : ()=>toggleSort("jkgj") }>Sort By price</button>
      {isSorted && <button className="pd-5 btn btn-primary" onClick={() =>toggleSort("")}>"X"</button>}
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
                      <div style={{padding:5+"px"}}className="col d-flex align-items-center">
                      <label id={"TitleLabel_"+product.id} hidden ={(idForEdit==product.id)?enableForEdit:true}>Title: </label>
                      {getInputForTitle(((idForEdit==product.id)?hideSaveAndCancel:true), product.title,((idForEdit==product.id)?enableForEdit:false),(idForEdit===product.id ? true:false))}
{/*                       
                      <input
                        className="form-control mx-1 disableForEdit"
                        value={product.title}
                        disabled={enableForEdit}
                        /> */}
                      </div>
                        {/* <h5>{product.title}</h5> */}
                        {/* <p className="mb-4 mb-md-0">{product.description}</p> */}
                        {/*descid="description_"+(product.id)*/}
                      <div style={{padding:5+"px"}} className="col d-flex align-items-center">  
                      <label id={descid} hidden ={(idForEdit==product.id)?enableForEdit:true}>Description: </label>
                      {getInputForDescription(((idForEdit==product.id)?hideSaveAndCancel:true), product.description,((idForEdit==product.id)?enableForEdit:false),(idForEdit===product.id ? true:false))}

                        {/* <textarea
                          className="form-control mx-1 disableForEdit"
                          value={product.description}
                          disabled={enableForEdit}
                        /> */}
                      </div>
                        {/*ratingid="rating_"+product.id */}
                      
                        <div style={{padding:5+"px"}} id={ratingid} className="col-sm-10 d-flex align-items-center d-flex flex-row">
                          <label hidden ={(idForEdit==product.id)?enableForEdit:true}>Rating: </label>
                          {getInputForRating(((idForEdit==product.id)?hideSaveAndCancel:true), product.rating,((idForEdit==product.id)?enableForEdit:true),(idForEdit===product.id ? true:false))} 
                          
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center mb-1">
                          {/* <h4 className="mb-1 me-1">INR : {product.price}</h4> */}
                          <label hidden ={(idForEdit==product.id)?enableForEdit:true}>Price: </label>
                           Rs. {getInputForPrice(((idForEdit==product.id)?hideSaveAndCancel:true), product.price,((idForEdit==product.id)?enableForEdit:false),(idForEdit===product.id ? true:false))}
                          {/* <input className="form-control mx-1 disableForEdit" value={product.price} disabled={enableForEdit} /> */}
                        </div>
                        <div className="d-flex flex-column mt-4">
                        <div className="col-sm-10 d-flex align-items-center">
                          
                          <button className="form-control edit-product" style={{color: "orange"}}onClick={() => setFieldForEdit(product.id,product)} hidden={((idForEdit==product.id)?!hideSaveAndCancel:false)}>
                            <i className="fa-solid fa-pen-to-square" ></i>
                          </button>
                         
                          <button className=" form-control delete-product" style={{color: "red" }} type="button" onClick={() => deleteProd(product)}hidden={((idForEdit==product.id)?!hideSaveAndCancel:false)}>
                            <i className="fa-solid fa-trash-can"></i>
                          </button>
                         </div> 
                          <div className="col-sm-10 d-flex align-items-center">
                            <button className="form-control save-changes" style={{color: "white" , background:"green"}} onClick={() => saveChanges(product)} hidden={((idForEdit==product.id)?hideSaveAndCancel:true)}> 
                             <i className="fa-solid fa-check" ></i>
                            </button>
                            <button className="form-control cancel-edit" style={{color: "white" , background:"red"}}onClick={() => cancelEdit(product.id)}  hidden={((idForEdit==product.id)?hideSaveAndCancel:true)}  >
                              <i class="fa-solid fa-xmark"></i> </button>
                          </div>
                          
                          <button id="addTocart-btn"
                            className="btn btn-primary btn-sm mt-2"
                            type="button" hidden={((idForEdit==product.id)?!hideSaveAndCancel:false)}
                            onClick={()=>(exists(product.id) ? onDeleteHandler(product) : onAddHandler(product))}>
                            
                            {exists(product.id) ?"Remove from cart" : "Add to cart"}

                          </button>
                        </div>
                      </div>
                    </div>
                    <hr/>
                    <button className="link" id="view-products" onClick={() => viewProduct(product.id)}>View Product Details</button>  

                  </div>
                </div>
              </div>
            </div>
            </div>          
           </section>

      ))}
    </div>

      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   products: state.products,
// });

export default ProductList;
//connect(mapStateToProps,{fetchProducts})(ProductList);
