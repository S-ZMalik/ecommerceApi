const mongoose = require("mongoose");

const reviesSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  cutPrice: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  boolean: {
    type: Boolean,
    default: false
  },
  about: {
    type: String,
    required: true,
  },
  images: [{ type: String, required: true }],
  reviews: [reviesSchema],
});

module.exports = mongoose.model("Product", productSchema);
