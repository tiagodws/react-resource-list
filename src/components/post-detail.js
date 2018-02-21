import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPost } from "../actions";
import { deletePost } from "../actions";

class PostDetail extends Component {
    constructor(props) {
        super(props);

        this.onDeletePost = this.onDeletePost.bind(this);
    }

    componentDidMount() {
        const { fetchPost, match: { params } } = this.props;
        fetchPost(params.id);
    }

    onDeletePost() {
        const { deletePost, history, match } = this.props;

        deletePost(match.params.id).then(() => history.push("../"));
    }

    render() {
        const { post } = this.props;

        if (!post) return <div>Loading...</div>;

        return (
            <div className="col-12">
                <h3 className="page-title">{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
                <button type="button" className="btn btn-danger" onClick={this.onDeletePost}>
                    Delete post
                </button>
                <Link className="btn btn-secondary" to="../">
                    Go back
                </Link>
            </div>
        );
    }
}

function mapStateToProps({ posts }, { match: { params } }) {
    return { post: posts[params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostDetail);

PostDetail.propTypes = {
    post: PropTypes.object,
    fetchPost: PropTypes.func,
    deletePost: PropTypes.func,
    match: PropTypes.any,
    history: PropTypes.any,
};
