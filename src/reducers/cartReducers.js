import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,DEC_PRODUCT_QUANTITY } from "../actions/actions";
import { error, success } from "../utils/notificationUtils"//C:\Users\nssra\OneDrive\Desktop\ecommerce-react-redux\src\utils\notificationUtils,js";


const initialState = { items: [] };
/*if (localStorage.getItem('cartItems')) {
    initialState.cartItems = { items: JSON.parse(localStorage.getItem('cartItems')) };
  }*/
  
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:

            success(action.message);

            return {
                ...state,
                items: action.payload.items,
            
            };
        case REMOVE_FROM_CART:
            console.log("the message is ", action.message)
            success(action.payload.message);

            return {
                ...state,
                items: action.payload.items
            };
        case CLEAR_CART :
            success("Cart is cleared");
            return {
                ...state,
                items: action.payload.items   
            }
        case DEC_PRODUCT_QUANTITY :
            success(action.message);
            return {
                ...state,
                items: action.payload.items   
            }
        default:
            return state;
    }
}
