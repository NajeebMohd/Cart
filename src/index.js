import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import firebase from 'firebase';
//import 'firebase/firestore';
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAKWZT4ZWieR4oomLJbKQ5sNgyU3H9HhqI",
  authDomain: "cart-9f6fe.firebaseapp.com",
  projectId: "cart-9f6fe",
  storageBucket: "cart-9f6fe.appspot.com",
  messagingSenderId: "986660423973",
  appId: "1:986660423973:web:6cc3833aea5d0504d732cc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

