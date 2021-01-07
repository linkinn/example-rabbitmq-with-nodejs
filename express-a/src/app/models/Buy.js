const mongoose = require("mongoose");

const BuySchema = new mongoose.Schema({
  product: String,
  price: Number
});

module.exports = mongoose.model("Buy", BuySchema);