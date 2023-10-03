import { FETCH_PRODUCTS } from "../actions/actions";
import { error, success } from "../utils/notificationUtils"//C:\Users\nssra\OneDrive\Desktop\ecommerce-react-redux\src\utils\notificationUtils,js";


// Define the initial state for the products
const initialState = {
  products: [],
  loading: false,
  error: null,
  sort: ''
};

// Action type constants
export const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE';
export const SET_PRODUCT = 'SET_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'


export const productsReducer = (state = initialState, action) => {
  console.log("action is", action);
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        error: null,
      };
    case SET_PRODUCT:
      const productList = state.products
      productList.push(action.payload)
      return {
        ...state,
        products: productList,
        error: null,
      };
    case SORT_PRODUCTS_BY_PRICE:
      // Fetch products from an API and store them in state
      const products = state.products
      return {
        ...state,
        products: action.payload.products,
        loading: true,
        sort: action.payload.sort
      };
    case EDIT_PRODUCT:
      success(action.message);
      return {
        ...state,
        products: action.payload,
        loading: true
      };

    case DELETE_PRODUCT:
      success(action.message)
      return {
        ...state,
        products: action.payload.products,
        loading: true
      };
    case ADD_PRODUCT:
      productList.push(action.payload)

      return {
        ...state,
        posts: [...state?.posts, action.payload],

        products: [...state.products, action.payload],
        loading: true
      };

    case 'ADD_PRODUCT_SUCCESS':
      success("Product added to database succesfully");

      return {
        ...state,
        loading: false,
        postId: action.payload
      };
    case 'ADD_PRODUCT_ERROR':
      error("Error occured while adding product to database ");
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
