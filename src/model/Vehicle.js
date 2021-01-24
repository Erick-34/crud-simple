const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehicleSchema = new Schema({
  brand: {
    type: String,
    unique: false,
  },
  model: {
    type: String,
    unique: false,
  },
  year: {
    type: String,
    unique: false,
  },
  manufacturing: {
    type: String,
    unique: false,
  },
  board: {
    type: String,
  },
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
