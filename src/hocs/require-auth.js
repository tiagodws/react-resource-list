import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function(ComposedComponent) {
    class RequireAuth extends Component {
        componentWillMount() {
            const { authenticated, history } = this.props;
            if (!authenticated) history.push("auth/signin");
        }

        componentWillUpdate(nextProps) {
            const { history } = this.props;
            const { authenticated } = nextProps;
            if (!authenticated) history.push("auth/signin");
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps({ auth }) {
        return { authenticated: auth.authenticated };
    }

    RequireAuth.propTypes = {
        authenticated: PropTypes.bool,
        history: PropTypes.any,
    };

    return connect(mapStateToProps)(RequireAuth);
}
