import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";

const rootReducer = combineReducers({
    authenticated: AuthReducer,
});

export default rootReducer;
