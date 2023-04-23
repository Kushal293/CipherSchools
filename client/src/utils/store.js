import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";


const store = configureStore({
    reducer: {
        modals: modalSlice,
    }
});


export default store;