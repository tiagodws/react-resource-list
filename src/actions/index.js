import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=tiagodws";

export function fetchPosts() {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POSTS,
        payload: request,
    };
}

export function fetchPost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.get(url);

    return {
        type: FETCH_POST,
        payload: request,
    };
}

export function createPost(post) {
    const url = `${ROOT_URL}/posts${API_KEY}`;
    const request = axios.post(url, post);

    return {
        type: CREATE_POST,
        payload: request,
    };
}

export function deletePost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;
    const request = axios.delete(url);

    return {
        type: DELETE_POST,
        payload: request,
    };
}
