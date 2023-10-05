const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      min: 3,
      max: 20,
      unique: true,
    },
    price: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
    },
    quantity: {
      type: String,
    },
    productImg: {
      type: String,
    },
    category:{
      type:Schema.Types.ObjectId,
      ref:"category",
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("product",productSchema);