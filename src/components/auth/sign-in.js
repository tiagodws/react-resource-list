import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { signInUser } from "../../actions";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit({ email, password }) {
        const { signInUser } = this.props;
        signInUser({ email, password });
    }

    render() {
        const { handleSubmit, error } = this.props;

        return (
            <div className="row">
                <div className="offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-4 col-xl-4">
                    <div className="card">
                        <h1 className="card-header">Sign in to your account</h1>
                        <div className="card-body">
                            {error && (
                                <div className="alert alert-danger text-center" role="alert">
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(this.onFormSubmit)}>
                                <div className="form-group">
                                    <Field
                                        label="Email"
                                        name="email"
                                        component={this.renderField}
                                        type="email"
                                        required={true}
                                        icon="person"
                                    />
                                    <Field
                                        label="Password"
                                        name="password"
                                        component={this.renderField}
                                        type="password"
                                        required={true}
                                        icon="lock"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block mb-3">
                                    Sign in
                                </button>

                                <div className="card-footer">
                                    <span>Not registered yet? </span>
                                    <Link className="font-weight-bold" to="/auth/signup">
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

    renderField({ input, meta, label, icon, type, required }) {
        const hasError = meta.touched && meta.error;
        const inputClassName = `form-control ${hasError ? "is-invalid" : ""}`;

        return (
            <div className="input-group mb-3">
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
                {hasError ? <small className="form-text text-danger">{meta.error}</small> : ""}
            </div>
        );
    }
}

function validate() {
    const errors = {};

    return errors;
}

function mapStateToProps({ auth }) {
    return { error: auth.error };
}

export default reduxForm({
    form: "signIn",
    fields: ["email", "password"],
    validate,
})(connect(mapStateToProps, { signInUser })(SignIn));

SignIn.propTypes = {
    history: PropTypes.any,
    signInUser: PropTypes.func,
    handleSubmit: PropTypes.func,
    error: PropTypes.string,
};
