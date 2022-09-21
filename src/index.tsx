import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { getTask } from "./store/selectors";

const element = document.getElementById("root")!;


const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
