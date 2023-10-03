import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART , DEC_PRODUCT_QUANTITY} from "./actions";

let message =''
export const addToCart = (items, product, dispatch) => {
    console.log("adding to cart",items, product, dispatch);
    /*toast.success('Action was successful!', {
        position: toast.POSITION.TOP_RIGHT,
      });*/
    let productAlreadyInCart = false;
    const cartItems = items.slice();
    cartItems.forEach(item => {
        if (item.id === product.id) {
            productAlreadyInCart = true;
            item.count++;
        }
        message = "' "+product.title+" ' quantity in the cart increased succesfully"

    });
    if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
        message = "' "+product.title+" ' added to cart succesfully"

    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //success("produt added to cart  succesfully");

    return dispatch({
        type: ADD_TO_CART,
        message: message,
        payload: { items: cartItems }
    })
}

export const removeFromCart = (items, item, dispatch) => {
    console.log("Called to removeFromCart");
    const cartItems = items.slice().filter(elm => elm.id !== item.id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    message = "' "+item.title+" ' removed from the cart succesfully"

    return dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            items: cartItems,
            message: message
        }
    })
}

export const decQuantity = (items, product,countBeforeClicking, dispatch) => {
    console.log("adding to cart",items, product, dispatch, countBeforeClicking);
    let productAlreadyInCart = false;
    let cartItems = items.slice();
    if(countBeforeClicking > 1 ){
        cartItems.forEach(item => {
        if (item.id === product.id) {
            item.count--;
        }
        })
        message = "' "+product.title+" ' quantity in the cart decreased succesfully"

    }
    else {
      cartItems = items.slice().filter(elm => elm.id !== product.id);        
      message = "' "+product.title+" ' removed from the cart succesfully"

    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
        type: DEC_PRODUCT_QUANTITY,
        product: product,
        message: message,
        payload: { items: cartItems }
    })

}

export const clearCart = (items,  dispatch) => {
    console.log("Called to clearCart");
    const cartItems = [];
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return dispatch({
        type: CLEAR_CART,
        payload: {
            items: cartItems
        }
    })
}
