import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import Header from "./header";
import Resources from "./resources";

class App extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <Header />
                <div className="page-content container-fluid">App</div>
                <Route path={`${match.url}/resources`} component={Resources} />
            </div>
        );
    }
}

export default App;

App.propTypes = {
    match: PropTypes.any,
};
