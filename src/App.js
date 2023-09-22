import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';

function App() {
  
  return (
      <div className="App">
        <ProductList />
          {/* Add your shopping cart component here */}
      </div>
  );
}

export default App;
