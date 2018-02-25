import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { changeAuth } from "../actions";

class Header extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar-main">
                    <div className="navbar-title">
                        <Link to="/">
                            <i className="fa fa-file navbar-logo" />Resource List
                        </Link>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className="btn btn-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className="btn btn-link" to="/resources">
                                Resources
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-user">{this.renderAuthButton()}</div>
                </nav>
            </div>
        );
    }

    renderAuthButton() {
        const { authenticated } = this.props;
        if (authenticated)
            return (
                <button className="btn btn-outline-primary" onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        else
            return (
                <button className="btn btn-outline-primary" onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            );
    }
}

function mapStateToProps({ authenticated }) {
    return { authenticated };
}

export default connect(mapStateToProps, { changeAuth })(Header);

Header.propTypes = {
    authenticated: PropTypes.bool,
    changeAuth: PropTypes.func,
};
