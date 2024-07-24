const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

const productSchema = mongoose.Schema({
    id: String,
    imgUrl: String,
    name: String,
    count: Number,
    size: {
        width: Number,
        height: Number
    },
    weight: String,
    comments: [commentSchema]
})

const commentSchema = mongoose.Schema({
    id: String,
    productId: String,
    description: String,
    date: Date
})

const Product = mongoose.model("Product", productSchema)
const Comment = mongoose.model("Comment", commentSchema)

app.get("/", (req, res) => {
    res.send("HELLO WORLD!");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("APP IS LISTENING ON " + process.env.PORT)
})
