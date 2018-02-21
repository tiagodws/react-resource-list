import React, { Component } from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { createPost } from "../actions";

class PostNew extends Component {
    constructor(props) {
        super(props);

        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(values) {
        const { createPost, history } = this.props;
        createPost(values).then(() => history.push("../"));
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="col-12">
                <h3 className="page-title">New Post</h3>
                <form onSubmit={handleSubmit(this.onFormSubmit)}>
                    <Field label="Title" name="title" component={this.renderField} />
                    <Field label="Categories" name="categories" component={this.renderField} />
                    <Field label="Post Content" name="content" component={this.renderField} />

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <Link className="btn btn-secondary" to="../">
                        Cancel
                    </Link>
                </form>
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

function validate(values) {
    const errors = {};

    if (!values.title) errors.title = "Title is required";
    if (!values.categories) errors.categories = "Categories is required";
    if (!values.content) errors.content = "Content is required";

    return errors;
}

export default reduxForm({ form: "PostNewForm", validate })(connect(null, { createPost })(PostNew));

PostNew.propTypes = {
    createPost: PropTypes.func,
    handleSubmit: PropTypes.func,
    history: PropTypes.any,
};
