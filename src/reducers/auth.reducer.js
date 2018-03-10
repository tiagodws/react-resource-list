import { SIGN_IN_USER, SIGN_OUT_USER, SIGN_UP_USER } from "../actions/";

export default function(state = {}, { type, payload }) {
    switch (type) {
        case SIGN_UP_USER: {
            const isError = payload instanceof Error;
            const { data } = isError ? payload.response : payload;

            if (isError) return { error: data };

            localStorage.setItem("token", data.token);
            return { authenticated: true };
        }
        case SIGN_IN_USER: {
            const isError = payload instanceof Error;
            const { data, status } = isError ? payload.response : payload;

            if (isError && status == 401) return { error: "Wrong username or password" };
            else if (isError) return { error: "It was not possible to sign-in right now. Please try again later." };

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
