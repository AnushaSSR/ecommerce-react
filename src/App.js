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
import ViewProduct from './components/ViewProduct';
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="/viewProduct/:id" element={<ViewProduct />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
