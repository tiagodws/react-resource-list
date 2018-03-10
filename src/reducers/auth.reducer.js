import { SIGN_IN_USER, SIGN_OUT_USER } from "../actions/";

export default function(state = {}, { type, payload }) {
    switch (type) {
        case SIGN_IN_USER: {
            const error = payload instanceof Error;
            const { data, status } = error ? payload.response : payload;

            if (error && status == 401) return { error: "Wrong username or password" };
            else if (error) return { error: "It was not possible to sign-in right now. Please try again later." };

            localStorage.setItem("token", data.token);
            return { authenticated: true };
        }
        case SIGN_OUT_USER: {
            localStorage.removeItem("token");
            return { authenticated: false };
        }
        default: {
            return state;
        }
    }
}
