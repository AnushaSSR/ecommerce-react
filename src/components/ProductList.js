import React from 'react';
import { connect } from 'react-redux';
import { fetchProducts, setProducts } from '../actions/productActions';
import { useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

const ProductList = ({ products }) => {
  const prodsFromRedux = useSelector((store) => {
     console.log(store);
    return store?.todoData?.todos})
  const dispatch = useDispatch();
   

  const [input, setInput] = useState("");
  const [prodsArr, setProdsArr] = useState([])
  //  {
  //   const todosFromLC = JSON.parse(localStorage.getItem('todos')) ?? []
  //   return todosFromLC
  // }
  // );

  useEffect(() => {
    dispatch(fetchProducts())
  },[])
  return (
    <div>
      <h2>Product List</h2>
      {console.log("the products are ", products)}
      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   products: state.products,
// });

export default ProductList;
//connect(mapStateToProps,{fetchProducts})(ProductList);
