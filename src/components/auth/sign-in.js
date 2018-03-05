import React, { Component } from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

class SignIn extends Component {
    onFormSubmit({ email, password }) {
        console.log(email, password);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="card">
                <h1 className="card-header">Sign In</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(this.onFormSubmit)}>
                        <Field label="Email" name="email" component={this.renderField} />
                        <Field label="Password" name="password" component={this.renderField} />

                        <div className="button-bar">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <Link className="btn btn-link" to="../">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    renderField(field) {
        const hasError = field.meta.touched && field.meta.error;
        const inputClassName = `form-control ${hasError ? "is-invalid" : ""}`;

        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className={inputClassName} type="text" {...field.input} />
                {hasError ? <small className="form-text text-danger">{field.meta.error}</small> : ""}
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
})(SignIn);

SignIn.propTypes = {
    handleSubmit: PropTypes.func,
};
