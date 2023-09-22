/*import { createStore, combineReducers } from 'redux';
import cartReducers from './reducers/cartReducers';
import { productsReducer } from './reducers/productsReducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart: cartReducers,
  products: productsReducer
});

const middleware = [thunk];

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;*/

import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'

import thunk from 'redux-thunk'
import { productsReducer } from './reducers/productsReducers';
import cartReducers from './reducers/cartReducers';

const reducers = combineReducers({
  productsStore: productsReducer,  //{count: 0,}
  cartData: cartReducers       //{ todos:[]}
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
