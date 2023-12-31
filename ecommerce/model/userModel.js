const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
  {
    name: {
      type: String,
      required: false,
      trim: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    contactNumber: {
      type: String,
    },
    // profilePicture: {
    //   type: String,
    // },
    age:{
      type:String,
    }
  },
  { timestamps: true }
);
module.exports = mongoose.model("user",userSchema);