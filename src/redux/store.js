import { configureStore } from "@reduxjs/toolkit";
import { gymReducer } from "./reducers/reducerSlice";

let store = configureStore({
    reducer:{
        gymRegucer:gymReducer.reducer
    }
})
export default store