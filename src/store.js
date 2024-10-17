import { configureStore } from "@reduxjs/toolkit";
import test from "./features/productsSlice"

const store = configureStore({
    reducer: {
        products: test
    }
})

export default store;