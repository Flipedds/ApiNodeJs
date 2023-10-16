const mongoose = require("mongoose");

class Mongo {
  constructor(dbUser, dbPassword) {
    this.DbUser = dbUser;
    this.DbPassword = dbPassword;
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
