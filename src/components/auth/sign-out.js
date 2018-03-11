import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deauthUser } from "../../actions";

class SignOut extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-4 col-xl-4">
                    <div className="card">
                        <div className="card-body">Signing out...</div>
                    </div>
                </div>
            </div>
        );
    }

    componentWillMount() {
        const { deauthUser } = this.props;
        deauthUser();
    }

    componentWillReceiveProps(nextProps) {
        const { history } = this.props;
        if (!nextProps.authenticated) history.push("../signin");
    }
}

function mapStateToProps({ auth }) {
    return { authenticated: auth.authenticated };
}

export default connect(mapStateToProps, { deauthUser })(SignOut);

SignOut.propTypes = {
    authenticated: PropTypes.bool,
    history: PropTypes.any,
    deauthUser: PropTypes.func,
};
