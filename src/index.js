import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter } from "react-router-dom";

import "../style/style.scss";

import reducers from "./reducers";
import Header from "./components/header";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container"),
);
