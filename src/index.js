import React from "react";
import ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import requireAuth from "./hocs/require-auth";
import App from "./components/app/app";
import Auth from "./components/auth/auth";

import "../style/theme.scss";
import "../style/style.scss";

import reducers from "./reducers";

import { AUTH_USER } from "./actions/index";

const logger = createLogger({ collapsed: true, predicate: (getState, action) => !action.type.includes("@@redux-form") });
const createStoreWithMiddleware = applyMiddleware(ReduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem("token");
if (token) store.dispatch({ type: AUTH_USER });

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/" component={requireAuth(App)} />
            </Switch>
        </HashRouter>
    </Provider>,
    document.querySelector(".app")
);
