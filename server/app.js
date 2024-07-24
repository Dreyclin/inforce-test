const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());


app.get("/", (req, res) => {
    res.send("HELLO WORLD!");
})

app.listen(process.env.PORT, (req, res) => {
    console.log("APP IS LISTENING ON " + process.env.PORT)
})
