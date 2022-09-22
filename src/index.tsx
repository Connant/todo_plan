import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";
import App from "./components/App";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";

const element = document.getElementById("root")!;

const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
