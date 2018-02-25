import { CHANGE_AUTH } from "../actions/";

export default function(state = false, { type, payload }) {
    switch (type) {
        case CHANGE_AUTH: {
            return payload;
        }
        default: {
            return state;
        }
    }
}
