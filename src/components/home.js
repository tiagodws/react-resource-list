import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="page-title">Home</h1>
                <p>
                    Hello! This is a sample homepage. If you try to go to Resources without being logged in, you will be
                    redirected here.
                </p>
            </div>
        );
    }
}

export default Home;
