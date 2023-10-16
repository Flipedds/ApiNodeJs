const express = require('express');
const Mongo = require("./Models/Mongo")
const connection = new Mongo().connect();
const app = express();
const petRoute = require('./Routes/pet.route');

app.use(express.json());

app.use("/pet", petRoute);

app.listen(3000);