import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../style/style.css";

import reducers from "./reducers";
import PostList from "./components/post-list";
import PostNew from "./components/post-new";
import PostDetail from "./components/post-detail";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <div className="row">
                    <h1 className="app-title col-12">Resource List</h1>
                </div>
                <div className="row">
                    <Switch>
                        <Route path="/posts/new" component={PostNew} />
                        <Route path="/posts/:id" component={PostDetail} />
                        <Route path="/" component={PostList} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>,
    document.querySelector(".container"),
);
