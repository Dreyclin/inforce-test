const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION_STRING)

const commentSchema = mongoose.Schema({
    productId: String,
    description: String,
    date: Date
})

const productSchema = mongoose.Schema({
    imgUrl: String,
    name: String,
    count: Number,
    weight: Number,
    comments: [commentSchema]
})

const Product = mongoose.model("Product", productSchema)
const Comment = mongoose.model("Comment", commentSchema)

app.get("/", (req, res) => {
    res.send("HELLO WORLD!");
})

app.post("/getProductsData", (req, res) => {
    Product.find({}).then(products => {
        if(products.length != 0) {
            res.send(products);
        } else {
            res.send(null);
        }
    })
})

app.post("/addProduct", (req, res) => {
    const name = req.body.name;
    const count = req.body.count;
    const imgUrl = req.body.imgUrl;
    const weight = req.body.weight;

    const product = new Product({
        imgUrl: imgUrl,
        count: count,
        name: name,
        weight: weight
    })

    product.save().then(() => {
        console.log("Product saved!");
    })
})

app.post("/removeProduct", (req, res) => {
    const id = req.body.data;

    Product.deleteOne({_id: id}).then(() => {
        Product.find({}).then(products => {
            res.send(products);
        })
    })
})

app.listen(process.env.PORT, (req, res) => {
    console.log("APP IS LISTENING ON " + process.env.PORT)
})
