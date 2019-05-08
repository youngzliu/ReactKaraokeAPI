import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import middlewareLogger from "./middleware/middleware-logger";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-app-root")
);
