const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  name: { type: String, required: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true },
  adjective: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  category: {
    name: {
        type: String
    },    
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
