import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar-main">
                    <div className="navbar-title">
                        <Link to="/">
                            <i className="material-icons md-36 navbar-logo">playlist_add_check</i>
                        </Link>
                    </div>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className="btn btn-link" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-user">
                        <Link className="btn" to="/auth/signout">
                            Sign out
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
