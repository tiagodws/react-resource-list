import { FETCH_POSTS, FETCH_POST, CREATE_POST, DELETE_POST } from "../actions/";

export default function(state = {}, { type, payload }) {
    switch (type) {
        case FETCH_POSTS: {
            return payload.data.reduce((postsObj, post) => {
                postsObj[post.id] = post;
                return postsObj;
            }, {});
        }
        case FETCH_POST:
        case CREATE_POST: {
            const post = payload.data;
            return { ...state, [post.id]: post };
        }
        case DELETE_POST: {
            const post = payload.data;
            const posts = { ...state };
            delete posts[post.id];
            return posts;
        }
        default: {
            return state;
        }
    }
}
