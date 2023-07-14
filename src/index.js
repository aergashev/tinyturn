import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj-Ce5TjyU6oayttTw9AbA2SrtJoxrrtQ",
  authDomain: "tinyturn-d1ce7.firebaseapp.com",
  projectId: "tinyturn-d1ce7",
  storageBucket: "tinyturn-d1ce7.appspot.com",
  messagingSenderId: "58874125458",
  appId: "1:58874125458:web:d176dee1a121bfca9eda4b",
  measurementId: "G-667KPTGYC0",
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
