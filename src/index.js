import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { createStore, compose, applyMiddleware } from "redux";
import todoApp from "./reducers";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let store = createStore(todoApp, compose(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
