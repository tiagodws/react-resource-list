import { AUTH_USER, DEAUTH_USER, AUTH_REQUEST, AUTH_REQUEST_FAIL } from "../actions/";

export default function(state = {}, { type, payload }) {
    switch (type) {
        case DEAUTH_USER: {
            return { authenticated: false };
        }
        case AUTH_USER: {
            return { authenticated: true };
        }
        case AUTH_REQUEST: {
            return { ...state, error: undefined };
        }
        case AUTH_REQUEST_FAIL: {
            const { status, data } = payload.response;

            if (status == 401) return { error: "Wrong username or password" };
            return { ...state, error: data };
        }
    }
    return state;
}
