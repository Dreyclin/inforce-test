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

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [{
            imgUrl: "https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg",
            name: "Potato",
            count: 4,
            weight: 200
        }]
    },
    reducers: {
    },
    extraReducers: builder => {
        
    }
})



export default productsSlice.reducer;