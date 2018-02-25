export const CHANGE_AUTH = "change_auth";

export function changeAuth(isLoggedin) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedin,
    };
}
