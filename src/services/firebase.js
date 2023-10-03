// // firebase.js
// /*import firebase from 'firebase/compat/app'; // Import 'compat/app' for Firebase v8 and later
// import 'firebase/compat/database'; // Import 'compat/database' or other Firebase services you need
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDXI3PbXWVyRTkwuah6pfCGgNqGNmWS1LI",
//     authDomain: "ecommerce--react-redux.firebaseapp.com",
//     projectId: "ecommerce--react-redux",
//     storageBucket: "ecommerce--react-redux.appspot.com",
//     messagingSenderId: "1014498894808",
//     appId: "1:1014498894808:web:82d5fbd9d1ecdd487e88ad"
//   };
//   const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);

// export default firebase;*/


// // src/firebase.js

// // import firebase from "firebase/app";
// // import "firebase/database";
// // src/firebase.js
// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database';

// const firebaseConfig = {
//     apiKey: "AIzaSyDXI3PbXWVyRTkwuah6pfCGgNqGNmWS1LI",
//     authDomain: "ecommerce--react-redux.firebaseapp.com",
//     projectId: "ecommerce--react-redux",
//     storageBucket: "ecommerce--react-redux.appspot.com",
//     messagingSenderId: "1014498894808",
//     appId: "1:1014498894808:web:82d5fbd9d1ecdd487e88ad"
//   };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

// export { database };

// /*import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDXI3PbXWVyRTkwuah6pfCGgNqGNmWS1LI",
//     authDomain: "ecommerce--react-redux.firebaseapp.com",
//     projectId: "ecommerce--react-redux",
//     storageBucket: "ecommerce--react-redux.appspot.com",
//     messagingSenderId: "1014498894808",
//     appId: "1:1014498894808:web:82d5fbd9d1ecdd487e88ad"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get the Firebase database instance
// const database = getDatabase(app);

// export { database };*/


import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXI3PbXWVyRTkwuah6pfCGgNqGNmWS1LI",
    authDomain: "ecommerce--react-redux.firebaseapp.com",
    projectId: "ecommerce--react-redux",
    storageBucket: "ecommerce--react-redux.appspot.com",
    messagingSenderId: "1014498894808",
    appId: "1:1014498894808:web:82d5fbd9d1ecdd487e88ad"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)