import axios from "axios";

const ROOT_URL = "http://localhost:3090";

export const CHANGE_AUTH = "CHANGE_AUTH";
export const SIGN_IN_USER = "SIGN_IN_USER";
export const SIGN_OUT_USER = "SIGN_OUT_USER";

export function changeAuth(isLoggedin) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedin,
    };
}

export function signInUser({ email, password }) {
    const url = `${ROOT_URL}/signin`;
    const request = axios.post(url, { email, password });

    return {
        type: SIGN_IN_USER,
        payload: request,
    };
}

export function signOutUser() {
    return {
        type: SIGN_OUT_USER,
    };
}
