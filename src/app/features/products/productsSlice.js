import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addProduct = createAsyncThunk(
    "products/add",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/addProduct", data)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const removeProduct = createAsyncThunk(
    "products/remove",
    async () => {
        try {
            const response = await axios.post("http://localhost:4000/removeProduct")
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const getProductsData = createAsyncThunk(
    "products/getData",
    async () => {
        try {
            const response = await axios.post("http://localhost:4000/getProductsData")
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
)

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: null,
        err: null
    },
    reducers: {
    },
    extraReducers: builder => (
        builder.addCase(getProductsData.fulfilled, (state, action) => {
                state.items.push(...action.payload);
        }),
        builder.addCase(getProductsData.pending, (state, action) => {
            state.status = "pending"
        }),
        builder.addCase(getProductsData.rejected, (state, action) => {
            state.status = "failed";
            state.err = action.payload
        })
    )
})



export default productsSlice.reducer;