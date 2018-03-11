import axios from "axios";

const ROOT_URL = "http://localhost:3090";

export const AUTH_USER = "AUTH_USER";
export const DEAUTH_USER = "DEAUTH_USER";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_REQUEST_FAIL = "AUTH_REQUEST_FAIL";

export function authUser(token) {
    localStorage.setItem("token", token);

    return {
        type: AUTH_USER,
    };
}

export function deauthUser() {
    localStorage.removeItem("token");

    return {
        type: DEAUTH_USER,
    };
}

export function signUpUser({ name, email, password }) {
    return dispatch => {
        const url = `${ROOT_URL}/signup`;
        const request = axios
            .post(url, { name, email, password })
            .then(res => dispatch(authUser(res.data.token)))
            .catch(err => dispatch({ type: AUTH_REQUEST_FAIL, payload: err }));

        dispatch({
            type: AUTH_REQUEST,
            payload: request,
        });
    };
}

export function signInUser({ email, password }) {
    return dispatch => {
        const url = `${ROOT_URL}/signin`;
        const request = axios
            .post(url, { email, password })
            .then(res => dispatch(authUser(res.data.token)))
            .catch(err => dispatch({ type: AUTH_REQUEST_FAIL, payload: err }));

        dispatch({
            type: AUTH_REQUEST,
            payload: request,
        });
    };
}
