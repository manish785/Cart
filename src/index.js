import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAmxBKNnBZjmNBSWG8pLftY1JfaZT5MTLE",
  authDomain: "cart-6f782.firebaseapp.com",
  projectId: "cart-6f782",
  storageBucket: "cart-6f782.appspot.com",
  messagingSenderId: "858381887398",
  appId: "1:858381887398:web:0edd8a40f4709fa670d167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
