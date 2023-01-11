import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { ECommerceApp } from "./ECommerceApp";
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ECommerceApp />
    </Provider>
  </React.StrictMode>
);
