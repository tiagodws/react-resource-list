import axios from "axios";

export const CHANGE_AUTH = "change_auth";
export const SIGN_IN_USER = "sign_in";

export function changeAuth(isLoggedin) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedin,
    };
}

export function signInUser({ email, password }) {
    const url = ``;
    const request = axios.post(url, { email, password });

    return {
        type: SIGN_IN_USER,
        payload: request,
    };
}
