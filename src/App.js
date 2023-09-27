import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductList from './components/ProductList';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
function App() {
  
  return (
      <div className="App">
        
        <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<ProductList/>} />
        <Route exact path = "/addProduct" element = {<AddProduct/>} />
        <Route exact path = "/cart" element = {<Cart/>} />
        
          </Routes>
          
          {/* Add your shopping cart component here */}
        </Router>
      </div>
  );
}

export default App;
