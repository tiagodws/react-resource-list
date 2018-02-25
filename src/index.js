import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style/style.scss";

import reducers from "./reducers";
import Header from "./components/header";
import Home from "./components/home";
import Resources from "./components/resources";
import requireAuth from "./components/require-auth";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Header />
                <div className="row page-content">
                    <Switch>
                        <Route path="/resources" component={requireAuth(Resources)} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container"),
);
