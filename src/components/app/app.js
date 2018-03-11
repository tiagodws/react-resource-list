import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Header from "./header";
import Home from "./home";

class App extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <Header />
                <div className="page-content container-fluid">
                    <Route path={`${match.url}/`} component={Home} />
                </div>
            </div>
        );
    }
}

export default App;

App.propTypes = {
    match: PropTypes.any,
};
