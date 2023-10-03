import { FETCH_PRODUCTS } from "../actions/actions";
import { error, success } from "../utils/notificationUtils"//C:\Users\nssra\OneDrive\Desktop\ecommerce-react-redux\src\utils\notificationUtils,js";

/*// reducers/productReducer.js
const initialState = {
    products: [],
    sort: ''
  };
  
  export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        // Fetch products from an API and store them in state
        return { ...state, products: action.payload };
    case 'SORT_PRODUCTS_BY_PRICE':
            // Fetch products from an API and store them in state
            return { ...state, sort: action.payload.sort };  
      default:
        return state;
    }
  };
  
*/

  // reducers/productReducer.js

// Define the initial state for the products
const initialState = {
    products: [],
    loading: false,
    error: null,
    sort: ''
  };
  
  // Action type constants
  export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
  export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
  export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
  export const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE';
  export const SET_PRODUCT = 'SET_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ADD_PRODUCT='ADD_PRODUCT'


export const productsReducer = (state = initialState, action) => {
    console.log("action is",action );
    switch (action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.payload,
          error: null,
        };
      case SET_PRODUCT:
          const productList = state.products
          console.log("productList :", productList);
          productList.push(action.payload)
          return {
            ...state,
            products: productList,
            error: null,
        };
        case SORT_PRODUCTS_BY_PRICE:
          // Fetch products from an API and store them in state
          console.log("productList :", state);
          const products = state.products
          console.log("productList :", products);
          //productList.push(action.payload)

         return { 
          ...state, 
          products: action.payload.products, 
          loading: true, 
          sort: action.payload.sort 
        };  
        case EDIT_PRODUCT:
         // success(action.message)
          console.log(action.message)
          console.log("productList :", state);
          //productList.push(action.payload)
          success(action.message);

         return { 
          ...state, 
          products: action.payload, 
          loading: true
         }; 

         case DELETE_PRODUCT :
          success(action.message)
          console.log(action.message)
          console.log("productList :", state);
          //productList.push(action.payload)

         return { 
          ...state, 
          products: action.payload.products, 
          loading: true
         }; 
         case ADD_PRODUCT :

          console.log("productList :", state);
          productList.push(action.payload)

         return { 
          ...state,
        posts: [...state?.posts, action.payload],
          
          products: [...state.products, action.payload], 
          loading: true
         };

         case 'ADD_PRODUCT_SUCCESS':
          return {
            ...state,
            loading: false,
            postId: action.payload,
            
          };
        case 'ADD_PRODUCT_ERROR':
          return {
            ...state,
            loading: false,
            error: action.payload,
          };
          
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  