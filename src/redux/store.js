import {configureStore} from '@reduxjs/toolkit'
import categoriesReduce from "./categoriesSlice";
import catsReduce from "./catsSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReduce,
        cats: catsReduce,
    },
})