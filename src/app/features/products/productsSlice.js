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
    async (data) => {
        try {
            console.log(data);
            const response = await axios.post("http://localhost:4000/removeProduct", { data })
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

export const editProduct = createAsyncThunk(
    "products/edit",
    async (data) => {
        try {
            const response = await axios.post("http://localhost:4000/editProduct", {data})
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
            state.status = "done";
        }),
        builder.addCase(getProductsData.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(getProductsData.rejected, (state, action) => {
            state.status = "failed";
            state.err = action.payload
        }),
        builder.addCase(addProduct.fulfilled, (state) => {
            state.status = "done"
        }),
        builder.addCase(addProduct.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(addProduct.rejected, (state, action) => {
            state.status = "failed"
            state.err = action.payload
        }),
        builder.addCase(removeProduct.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "done";
        }),
        builder.addCase(removeProduct.pending, (state) => {
            state.status = "pending"
        }),
        builder.addCase(removeProduct.rejected, (state, action) => {
            state.status = "failed"
            state.err = action.payload
        })
    )
})



export default productsSlice.reducer;