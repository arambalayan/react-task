import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: [],
    error: ''
}

export const categoriesAsync = createAsyncThunk(
    'categories/fetchCategories',
    async (value, {rejectWithValue}) => {
        try {
            const response = await axios.get("https://api.thecatapi.com/v1/categories");
            return response.data;
        } catch (e) {
            throw rejectWithValue(e.response.data.message);
        }
    }
)

export const categoriesSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(categoriesAsync.pending, (state) => {
                state.status = false
            })
            .addCase(categoriesAsync.fulfilled, (state, action) => {
                state.status = true
                state.data = action.payload
            })
            .addCase(categoriesAsync.rejected, (state, action) => {
                state.status = false
                state.error = action.payload
            })
    },
})

export default categoriesSlice.reducer