// actions/productActions.js
import {FETCH_PRODUCTS, SET_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, FETCH_PRODUCTS_FAILURE,SORT_PRODUCTS_BY_PRICE,ADD_PRODUCT,ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR} from './actions'
import {firebase} from 'firebase/app';
import 'firebase/firestore';
import { firestore } from '../services/firebase';

// actions.js
/*import firebase from '../services/firebase';

export const addProduct = (postData) => {
  console.log("Called AddPorduct , the data is", postData)
  return (dispatch) => {
    // Perform the POST request to Firebase here
    // Example:
    const postsRef = firebase.ref('posts');
    const newPostRef = postsRef.push();
    newPostRef.set(postData)
      .then(() => {
        dispatch({ type: 'CREATE_POST_SUCCESS', payload: postData });
      })
      .catch((error) => {
        dispatch({ type: 'CREATE_POST_ERROR', payload: error.message });
      });
  };
};*/

// src/actions/postActions.js

//import { database } from "../services/firebase";
// src/actions/postActions.js
//import { database } from '../firebase';
// src/actions/postActions.js
/*import { database,ref,push } from '../services/firebase';

export const addProduct = (postData) => {
  return async (dispatch) => {
    try {
      // Create a reference to the 'posts' node in the database
      const dbRef = ref(database, 'posts');

      // Push the new post data to the 'posts' node
      const newPostRef = push(dbRef, postData);

      // Get the newly generated post key
      const postId = newPostRef.key;

      // Dispatch an action indicating success
      dispatch({ type: 'CREATE_POST_SUCCESS', payload: postId });
    } catch (error) {
      // Dispatch an action indicating failure
      dispatch({ type: 'CREATE_POST_FAILURE', payload: error.message });
    }
  };
};*/

/*export const addProduct = (postData) => {
  return async (dispatch) => {
    try {
      // Create a reference to the 'posts' node in the database
      const postsRef = database.ref('posts');

      // Push the new post data to the 'posts' node
      const newPostRef = await postsRef.push(postData);

      // Get the newly generated post key
      const postId = newPostRef.key;

      // Dispatch an action indicating success
      dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: postId });
    } catch (error) {
      // Dispatch an action indicating failure
      dispatch({ type: 'ADD_PRODUCT_FAILURE', payload: error.message });
    }
  };
};*/

/*export const addProduct = (postData) => {
  console.log("Called AddPorduct , the data is", postData)
  return async (dispatch) => {
    try {
      // Push the new post data to Firebase
      const newPostRef = await database.ref("posts").push(postData);

      // Get the newly generated post key
      const postId = newPostRef.key;

      // Dispatch an action indicating success
      dispatch({ type: "CREATE_POST_SUCCESS", payload: postId });
    } catch (error) {
      // Dispatch an action indicating failure
      dispatch({ type: "CREATE_POST_FAILURE", payload: error.message });
    }
  };
};*/


/*export const addProduct = (prod) => {
  return async (dispatch) => {
    try {
      const database = firebaseConfig.database();
      const prodsRef = database.ref('prods'); // Replace 'posts' with your Firebase database reference

      // Push the postData to the 'posts' node
      const newPostRef = await prodsRef.push(prod);

      // Dispatch a success action if the POST request is successful
      dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: newPostRef.key });
    } catch (error) {
      // Dispatch an error action if the POST request fails
      dispatch({ type: 'ADD_PRODUCT_ERROR', payload: error.message });
    }
  };
};*/


import { addDoc, collection,getDocs } from "@firebase/firestore"
//import { firestore } from "../services/firebase"
 
export const handleSubmit = async (testdata,dispatch) => {
  console.log("inside handlesubmit", 'productsy')

    const ref = collection(firestore, "Product_Data") // Firebase creates this automatically
 console.log("inside handlesubmit 2", ref)
  
    let data = {
        title: testdata.title,
        price: testdata.price,
        description: testdata.description,
        category: testdata.category,
        rating: testdata.rating, 
        thumbnail : testdata.thumbnail,
        images: testdata.images
    }
    console.log("inside handlesubmit 3", data)
    
    try {
      console.log("inside try of handlesubmit", ref, data)
    
      const newPostRef =  await addDoc(ref, data);

      // Get the newly generated post key
      const postId = newPostRef.id;
      console.log("the post id is : ", newPostRef.type)
console.log("the id after insertion is", newPostRef.id )

      // Dispatch an action indicating success
      dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: postId });
    } catch(error) {

        console.log(error)
        dispatch({ type: 'ADD_PRODUCT_ERROR', payload: error.message });
    }
  
}

/*export const handleSubmit = (testdata) => {
  const ref = collection(firestore, "test_data") // Firebase creates this automatically

  let data = {
      testData: testdata
  }
  
  try {
      addDoc(ref, data)
  } catch(err) {
      console.log(err)
  }
}*/


// Action type constants
//export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
//export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
//export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
//export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
//export const SORT_PRODUCTS_BY_PRICE = 'SORT_PRODUCTS_BY_PRICE';

// Action creators
/*export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

  var products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "APPle",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "HP Pavilion 15-DK1056WM",
      description:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      images: [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      ],
    },
  ];

// Async action creator to fetch products
export const fetchProducts = () => {
  return (dispatch) => {
    // Dispatch the request action
    dispatch(fetchProductsRequest());

    // Make the HTTP GET request to the API URL
    fetch('https://dummyjson.com/products/1')//https://my-json-server.typicode.com/AnushaSSR/ecommerce/products')
      .then((response) => {
        console.log(":jasjd", response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch the success action with the fetched data
        console.log("the data fetched is ", data);
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => {
        // Dispatch the failure action with the error message
        dispatch(fetchProductsFailure(error.message));
      });
  };
};*/
let message = ""
export const addProduct = async (product) => {
 // e.preventDefault();
console.log(product+"product ***************")
  try {
    console.log()
    // const response = await fetch('/api/products', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(product),
    // });

    // if (response.ok) {
    //   console.log('Product added successfully.');
    message = {status:"success", message: "Product added succesfully"}

    //   // You can redirect or show a success message here.
    // } else {
    //   console.error('Failed to add product.');
    message = {status:"failed", message: "Add product to database failed"}

    //   // Handle error scenarios
    // }
  } catch (error) {
    console.error('Error:', error);
    message = {status:"failed", message: "Add product to database failed"}
    // Handle network errors or other exceptions
  }
  return {
    type: ADD_PRODUCT,
    payload: product,
    message: message
  };
};

const fetchData = async () => {
  const res = await fetch("https://my-json-server.typicode.com/AnushaSSR/ecommerce/products") 
  //**/https://jsonplaceholder.typicode.com/todos
  console.log("the response is ", res);
  const data = await res.json();
  return data;
};
export const fetchProducts = () => async (dispatch) => {
  const productsFromApi = await fetchData();
  const querySnapshot = await getDocs(collection(firestore, "Product_Data"));
console.log("querySnapshot is : ",querySnapshot)
console.log("querySnapshot docs data is : ",querySnapshot.docs)
let prodDataFromDb = []
querySnapshot.docs.forEach((doc) => {
  console.log("looping through data is", doc.id, " => ", doc.data());
  // doc.data() is never undefined for query doc snapshots
  console.log("data is", doc.id, " => ", doc.data());
  let docdata = doc.data()
  docdata.id = doc.id;
  prodDataFromDb.push(docdata)
});
const products = [...productsFromApi, ...prodDataFromDb];
console.log("prodDataFromDb", prodDataFromDb)
  console.log("the response is ", products);
  console.log("Making call here...")
console.log("the payload that will be sent is",products)
localStorage.setItem("products", JSON.stringify(products));


  dispatch ({
    type:FETCH_PRODUCTS,
    payload: products,
    prodDataFromDb : prodDataFromDb
  })
};

export const setProduct = (product) => async (dispatch) => {
  //const products = await fetchData();
  console.log("the response is ", product);
  console.log("Making call here...")
console.log("the payload that will be sent is",product)

  dispatch ({
    type:SET_PRODUCT,
    payload: product
  })
};
export const editProduct = (prods,product,desc,title,price,rating, dispatch) =>{
  console.log("inside edit ", prods, product , desc, title, price, rating);
  const productsList = prods.slice();
  message ="Changes saved succesfully"

  productsList.forEach(prod => {
      if (prod.id === product.id) {
        prod.description= desc;
        prod.rating = rating;
        prod.title = title;
      }
  });
  return dispatch({
      type: EDIT_PRODUCT,
      payload: productsList,
      message: message
  })


}


export const sortProducts = (items, sort, dispatch) => {
  console.log("inside sortProducts", items, sort )
    const products = items.slice();
    if (sort !== '') {
      console.log("inde if ", sort )
        products.sort((a, b) => (sort === 'lowest'
            ? ((a.price > b.price) ? 1 : -1)
            : ((a.price < b.price) ? 1 : -1)));
    } else {
        products.sort((a, b) => (a.id > b.id) ? 1 : -1);
    }
    return dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            products: products
        }
    })
}

export const deleteProduct = (products, product, dispatch) => {
  console.log("Called to deleteProduct");
  const productsList = products.slice().filter(prod => prod.id !== product.id);
  //localStorage.setItem("productsList", JSON.stringify(productsList));
  message = "Product deleted succesfully"

  return dispatch({
      type: DELETE_PRODUCT,
      payload: {
          products: productsList
      },
      message: message
  })
}
