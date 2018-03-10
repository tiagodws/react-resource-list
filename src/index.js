import React from "react";
import ReactDOM from "react-dom";
import ReduxPromise from "redux-promise";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import requireAuth from "./hocs/require-auth";
import App from "./components/app/app";
import Auth from "./components/auth/auth";

import "../style/theme.scss";
import "../style/style.scss";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <HashRouter>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" component={requireAuth(App)} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector(".app")
);
