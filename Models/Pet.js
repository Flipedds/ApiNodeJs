const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Pet = new Schema({
  nome: {
    type: String,
  },
  especie: {
    type: String,
  },
  cor: {
    type: String,
  },
  idade: {
    type: Number,
  },
  foto: {
    type: String,
  },
  peso: {
    type: Number,
  }
},{
    collection: 'pet'
});
    
module.exports = mongoose.model("Pet", Pet);