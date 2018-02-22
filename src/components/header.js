import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        return <button className="btn btn-outline-primary">Sign In</button>;
    }
}

export default Header;
