import { FETCH_PRODUCTS } from "../actions/actions";
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
  
  export const productsReducer = (state = initialState, action) => {
    console.log("action is",action );
    switch (action.type) {
      case FETCH_PRODUCTS:
        return {
          ...state,
          products: action.products,
          error: null,
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
      case SORT_PRODUCTS_BY_PRICE:
          // Fetch products from an API and store them in state
         return { ...state, loading: true, sort: action.payload.sort };  

      default:
        return state;
    }
  };
  