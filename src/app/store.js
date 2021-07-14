import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../features/userLogin"
export default configureStore({
    reducer:{
        user:userReducer,
    }
});