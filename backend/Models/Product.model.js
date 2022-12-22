const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  imgUrl: String,
  title: String,
  rate: String,
  top: String,
  price: Number,
  save: String,
  end: String,
  brand: String,
  p1:String,
  p2:String
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
