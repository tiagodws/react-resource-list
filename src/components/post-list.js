import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="col-12">
                <h3 className="page-title">Posts</h3>
                <div className="text-sm-right form-group">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a post
                    </Link>
                </div>
                <ul className="list-group posts">{this.renderPosts()}</ul>
            </div>
        );
    }

    renderPosts() {
        const { posts } = this.props;
        return Object.values(posts).map(post => (
            <li onClick={() => this.onPostClick(post)} className="list-group-item" key={post.id}>
                {post.title}
            </li>
        ));
    }

    onPostClick(post) {
        const { history } = this.props;
        history.push(`/posts/${post.id}`);
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);

PostList.propTypes = {
    posts: PropTypes.object,
    fetchPosts: PropTypes.func,
    history: PropTypes.any,
};
