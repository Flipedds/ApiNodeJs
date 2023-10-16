const mongoose = require("mongoose");
require('dotenv').config();

class Mongo {
  constructor() {
    this.DbUser = process.env.DB_USER;
    this.DbPassword = process.env.DB_PASS;
  }

  async connect() {
    await mongoose
      .connect(
        `mongodb+srv://${this.DbUser}:${this.DbPassword}@cluster0.6emua71.mongodb.net/?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("conectou ao banco!");
      })
      .catch((err) => console.log(err));
  }
}

module.exports = Mongo;
