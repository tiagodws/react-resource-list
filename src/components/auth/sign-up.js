import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { signUpUser } from "../../actions";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit({ name, email, password }) {
        const { signUpUser } = this.props;
        signUpUser({ name, email, password });
    }

    render() {
        const { handleSubmit, error } = this.props;
        return (
            <div className="row">
                <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-4 col-xl-4">
                    <div className="card">
                        <h1 className="card-header">Create a new account</h1>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger text-center" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                                <div className="form-group">
                                    <Field
                                        label="Name"
                                        name="name"
                                        component={this.renderField}
                                        type="name"
                                        required={true}
                                        icon="person"
                                    />
                                    <Field
                                        label="Email"
                                        name="email"
                                        component={this.renderField}
                                        type="email"
                                        required={true}
                                        icon="email"
                                    />
                                    <hr />
                                    <Field
                                        label="Password"
                                        name="password"
                                        component={this.renderField}
                                        type="password"
                                        required={true}
                                        icon="lock"
                                    />
                                    <Field
                                        label="Password Confirmation"
                                        name="passwordConfirm"
                                        component={this.renderField}
                                        type="password"
                                        required={true}
                                        icon="lock_outline"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">
                                    Sign Up
                                </button>

                                <div className="card-footer">
                                    <span>Already have an account? </span>
                                    <Link className="font-weight-bold" to="/auth/signin">
                                        Sign in
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderField({ input, meta, label, icon, type, required }) {
        const hasError = meta.touched && meta.error;
        const inputClassName = `form-control ${hasError ? "is-invalid" : ""}`;

        return (
            <div className="mb-3">
                <div className="input-group">
                    {icon && (
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="material-icons md-18 dark" aria-hidden="true">
                                    {icon}
                                </i>
                            </span>
                        </div>
                    )}
                    <input placeholder={label} className={inputClassName} type={type} required={required} {...input} />
                </div>
                {hasError ? <small className="form-text text-danger">{meta.error}</small> : ""}
            </div>
        );
    }
}

function validate({ password, passwordConfirm }) {
    const errors = {};

    if (password !== passwordConfirm) errors.passwordConfirm = "Passwords don't match";

    return errors;
}

function mapStateToProps({ auth }) {
    return { error: auth.error };
}

export default reduxForm({
    form: "signUp",
    fields: ["name", "email", "password", "passwordConfirm"],
    validate,
})(connect(mapStateToProps, { signUpUser })(SignUp));

SignUp.propTypes = {
    history: PropTypes.any,
    signUpUser: PropTypes.func,
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
};
