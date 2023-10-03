import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { removeFromCart ,clearCart,addToCart,decQuantity} from '../actions/cartAction';
import { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import '../assets/css/cart.css'
import { Link } from 'react-router-dom';
import store from '../store';

const Cart = () => {
    //sets subrscription to store.
    const cartItemsFromRedux = useSelector((store) => {
        console.log("Craitems are ******",store.cartItems.items);
       return store.cartItems.items});
    const dispatch = useDispatch();
   //const cartItemsFromRedux = JSON.parse(localStorage.getItem("cartItems"))
  // const modified = store.cartItems.modified
   console.log(typeof cartItemsFrom)
    console.log(localStorage.getItem("cartItems"))

   const [cartItems, setCartItems] = useState([])

   //const [loaded,setLoaded] = useState(0);


  // localStorage.getItem("cartItems");

//  setCartItems(cartItemsFromRedux)

  useEffect(() => {
    //if(modified === 1){
    setCartItems(cartItemsFromRedux);
    //setLoaded(1)
    //}
  }, [cartItemsFromRedux]);
  //cartItems.pop();
  //cartItems.pop();  //setCartItems(...cartItems, cartItems.pop())
  
  //cartItems.push({name:'item',id:844, price:65,count:1})
  //setCartItems(...cartItems,[])
//setCartItems(...cartItems, cartItems.push('item'))
//(cartItems.push({name:'item',id:846, price:654}))
//setCartItems(...cartItems,cartItems.push({name:'item',id:846, price:654,count:1}))
/*useEffect(() => {
    dispatch(fetchProducts())
  },[])*/
//  setCartItems(cartItemsFromRedux);

/*  useEffect(() => {
  }, [cartItems]);*/
    //const { cartItems } = this.props;

    const handleRemoveAction = (item) => {
        // Dispatch the action when the button is clicked
        removeFromCart(cartItems, item, dispatch);
        //dispatch({type: "REMOVE_FROM_CART", payload:{cartItems: cartItems, Item: item} })//removeFromCart(cartItems, item);
        console.log('Action method called');
    };

    const handleIncQuantity = () =>{

    }
    
    const handleDecQuantity = () =>{
        
    }
    

    const handleClearCart = () =>{
        console.log("claering th caery");
        clearCart(cartItems, dispatch);
        console.log('Action method called');
    

//        const emptyCart =[] 
//        setCartItems([])
    }
/*    const addItems = () =>{
        const itemslist= [{title:'item1',name:'item1',id:846, price:654,count:1},{title:'item2',name:'item2',id:845, price:65,count:1},{title:'item3',name:'item3',id:46, price:60,count:1}]
        setCartItems(...cartItems, itemslist)
    } */
    const incItemCount = (id,item) =>{
        addToCart(cartItemsFromRedux, item,dispatch)

    }
    const decItemCount = (id,item) =>{
        const countBeforeClicking = item.count 
        decQuantity(cartItemsFromRedux, item,countBeforeClicking , dispatch)

    }
    const onRemoveHandler = (id,item) =>{
        // Dispatch the action when the button is clicked
        removeFromCart(cartItems, item, dispatch);
        //dispatch({type: "REMOVE_FROM_CART", payload:{cartItems: cartItems, Item: item} })//removeFromCart(cartItems, item);
        console.log('Action method called');
    }

    const onAddHandler = (product) => {
        //console.log("the product is is : ", product);
        //console.log("mhhgjhgjhgjhgjg************ ",storeData.cartItems.items)
        addToCart(cartItemsFromRedux, product,dispatch)
      }
    
      const onDeleteHandler = (product) => {
        removeFromCart(cartItemsFromRedux, product,dispatch)
    
      }
    

    return (
       <> <Navbar/>
       {/* <button onClick={ addItems}>addItems to cart</button> */}
        <div id="cart-container">
            {cartItems.length === 0 ? <div style={{textAlign:'center'}}><h1>Cart is empty </h1><Link to="/products">
          Go to Products Page
        </Link></div>:
                <div id="cart-text">
                <div>You have {cartItems.length} items in the cart. </div>
                <button onClick={() => handleClearCart()} className="btn btn-primary">Clear Cart</button>
                
                 </div>
            }
            {cartItems.length > 0 &&
            <div>

                        {cartItems.map(item => (
                        
                        <section key={item.id} >
                        <div className="container ">
                          <div className="row justify-content-center mb-3">
                            <div className="col-md-12 col-xl-10">
                              <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                      <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                        <img src={item.thumbnail} className="w-100" />
                                        <a href="#!">
                                          <div className="hover-overlay">
                                            <div className="mask"></div>
                                          </div>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div id={"Title_"+item.id} className="col d-flex align-items-center">
                                        <p><b>{item.title}</b></p>
                                    </div>
                                      <div id={"qty"} className="col d-flex align-items-center d-flex flex-row">
                                        <p>Qty: {item.count}</p>          
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                      <div className="d-flex flex-row align-items-center mb-1">
                                        {/* <h4 className="mb-1 me-1">INR : {product.price}</h4> */}
                                        <p>{item.count} X {item.price} </p>
                                      </div>
                                      <div className="d-flex flex-column mt-4">
                                      <div className="col-sm-10 d-flex align-items-center">
                                        
                                        <button className="form-control inc-count" style={{color: "orange"}} onClick={() => incItemCount(item.id,item)}>
                                          <i className="fa-solid fa-plus" ></i>
                                        </button>
                                       
                                        <button className=" form-control dec-count" style={{color: "red" }} type="button" onClick={() => decItemCount(item.id,item)}>
                                          <i className="fa-solid fa-minus"></i>
                                        </button>
                                       </div> 
                                      </div>
                                    </div>
                                  </div>
                                  <hr/>
                                        
                                  <button id="removeFromCart"
                                          className="btn btn-primary btn-sm mt-2"
                                          type="button" onClick={()=>onRemoveHandler(item.id, item)}
                                        >
                                          <i className="fa-solid fa-delete"></i>Remove from cart
                                        </button>
              
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>          
                         </section>
                                      ))}
                    
                    
                    <div>
                    <b>
                    <section >
                        <div className="container ">
                          <div className="row justify-content-center mb-3">
                            <div className="col-md-12 col-xl-10">
                              <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                  <div className="row">
                                    <div className="col-md-6 col-lg-6 col-xl-6">             
                                               Sum:

                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                      <div className="d-flex flex-row align-items-center mb-1">
                                        {(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                                      </div>
                                    </div>

                                    </div>
                                  </div>
              
                                </div>
                              </div>
                            </div>
                          </div>
                                    
                         </section>
                    </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;
<div>
                        <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
                    </div>
                    </div>
            </div>
            }
        </div>


</>
    )
}


const mapStateToProps = state => ({
    cartItems: state.cart?.items
})
export default Cart//connect(mapStateToProps, { removeFromCart })(Cart);