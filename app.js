const express = require('express');
const Mongo = require("./Models/Mongo")
const connection = new Mongo().connect();
const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World!");
})

app.listen(3000);