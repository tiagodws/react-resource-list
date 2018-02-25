import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function(ComposedComponent) {
    class RequireAuth extends Component {
        componentWillMount() {
            const { authenticated, history } = this.props;
            if (!authenticated) history.push("/");
        }

        componentWillUpdate(nextProps) {
            const { history } = this.props;
            const { authenticated } = nextProps;
            if (!authenticated) history.push("/");
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps({ authenticated }) {
        return { authenticated };
    }

    RequireAuth.propTypes = {
        authenticated: PropTypes.bool,
        history: PropTypes.any,
    };

    return connect(mapStateToProps)(RequireAuth);
}
