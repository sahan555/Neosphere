const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
      unique: true,
    },
    catagories: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    price: {
      type: String,
    },
    details: {
      type: String,
      trim: true,
      min: 3,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("product",productSchema);
