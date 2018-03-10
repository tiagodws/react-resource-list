import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import SignUp from "./sign-up";
import SignIn from "./sign-in";
import SignOut from "./sign-out";

class Auth extends Component {
    render() {
        const { match } = this.props;
        return (
            <div className="container-fluid auth">
                <Route path={`${match.url}/signup`} component={SignUp} />
                <Route path={`${match.url}/signin`} component={SignIn} />
                <Route path={`${match.url}/signout`} component={SignOut} />
            </div>
        );
    }

    componentWillReceiveProps({ authenticated }) {
        const { history } = this.props;
        if (authenticated) history.push("/");
    }
}

function mapStateToProps({ auth }) {
    return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps)(Auth);

Auth.propTypes = {
    history: PropTypes.any,
    authenticated: PropTypes.bool,
    match: PropTypes.any,
};
