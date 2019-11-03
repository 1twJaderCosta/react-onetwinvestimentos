import React from "react";
import ReactDOM from "react-dom";

import storeSettings from "./app/store/storeSettings";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const store = storeSettings();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
