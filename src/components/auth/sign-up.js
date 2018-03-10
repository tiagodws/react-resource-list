import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit({ email, password }) {
        const { signInUser } = this.props;
        signInUser({ email, password });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="row">
                <div className="offset-md-2 col-md-8 offset-lg-4 col-lg-4">
                    <div className="card">
                        <h1 className="card-header">Sign in to your account</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                                <div className="form-group">
                                    <Field label="Email" name="email" component={this.renderField} icon="fa fa-envelope fa-fw" />
                                    <Field label="Password" name="password" component={this.renderField} icon="fa fa-unlock-alt fa-fw" />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">
                                    Sign in
                                </button>

                                <div className="card-footer">
                                    <span>Not registered yet? </span>
                                    <Link className="font-weight-bold" to="../">
                                        Sign up
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderField({ input, meta, label, icon }) {
        const hasError = meta.touched && meta.error;
        const inputClassName = `form-control ${hasError ? "is-invalid" : ""}`;

        return (
            <div className="input-group mb-3">
                {icon ? (
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className={icon} aria-hidden="true" />
                        </span>
                    </div>
                ) : null}
                <input placeholder={label} className={inputClassName} type="text" {...input} />
                {hasError ? <small className="form-text text-danger">{meta.error}</small> : ""}
            </div>
        );
    }
}

function validate() {
    const errors = {};

    return errors;
}

export default reduxForm({
    form: "signIn",
    fields: ["email", "password"],
    validate,
})(connect(null, actions)(SignUp));

SignUp.propTypes = {
    history: PropTypes.any,
    signInUser: PropTypes.func,
    handleSubmit: PropTypes.func,
};
