import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,
    data: [],
    error: ''
}

export const catsAsync = createAsyncThunk(
    'cats/fetchCats',
    async (value, {rejectWithValue}) => {
        try {
            const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${value.page}&category_ids=${value.id}`);
            return response.data;
        } catch (e) {
            throw rejectWithValue(e.response.data.message);
        }
    }
)

export const catsSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(catsAsync.pending, (state) => {
                state.status = false
            })
            .addCase(catsAsync.fulfilled, (state, action) => {
                state.status = true
                state.data = action.payload
            })
            .addCase(catsAsync.rejected, (state, action) => {
                state.status = false
                state.error = action.payload
            })
    },
})

export default catsSlice.reducer