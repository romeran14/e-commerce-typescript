import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ECommerceApp } from "./ECommerceApp";
import { store } from './store/store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter> 
        <ECommerceApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
