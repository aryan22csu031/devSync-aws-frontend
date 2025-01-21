import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import requestReducer from "./requestSlice";
const Store = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        requests: requestReducer,
    },
});

export default Store;