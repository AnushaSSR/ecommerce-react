import React from 'react'
import Navbar from './Navbar'
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartAction';
import { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

const Cart = () => {
    //sets subrscription to store.
    const cartItemsFromRedux = useSelector((store) => {
        console.log("Craitems are ******",store.cartItems.items);
       return store.cartItems.items});

    const dispatch = useDispatch();


   const [cartItems, setCartItems] = useState([])

  // localStorage.getItem("cartItems");

//  setCartItems(cartItemsFromRedux)

  useEffect(() => {
    setCartItems(cartItemsFromRedux);
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
    const clearCart = () =>{
        console.log("claering th caery");
        const emptyCart =[] 
        setCartItems([])
    }
/*    const addItems = () =>{
        const itemslist= [{title:'item1',name:'item1',id:846, price:654,count:1},{title:'item2',name:'item2',id:845, price:65,count:1},{title:'item3',name:'item3',id:46, price:60,count:1}]
        setCartItems(...cartItems, itemslist)
    } */
    return (
       <> <Navbar/>
       <button onClick={ clearCart}>Clear cart</button>
       {/* <button onClick={ addItems}>addItems to cart</button> */}
        <div className="alert alert-info">
            {cartItems.length === 0 ? "Basket is empty" :
                <div>You have {cartItems.length} items in the basket. <hr /></div>
            }
            {cartItems.length > 0 &&
                <div>
                    <ul style={{ marginLeft: -25 }}>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <b>{item.title}</b>
                                <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                
                                    onClick={() => handleRemoveAction(item)}><i className="fa-solid fa-trash-can"></i></button>
                                <br />
                                {item.count} X {(item.price)}
                            </li>))
                        }
                    </ul>
                    <b>
                        Sum: {(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                    </b>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => alert('Todo: Implement checkout page.')} className="btn btn-primary">checkout</button>
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