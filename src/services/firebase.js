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