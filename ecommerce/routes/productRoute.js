const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

// api to save user data
router.post("/products/savedata", (req, res) => {
  const data = req.body;
  if (!data) {
    res.status(400).json({ msg: "Data not found" });
    return;
  }
  const product = new productModel({
    name: data.name,
    catagories: data.catagories,
    price: data.price,
    details: data.details,
  });

  product
    .save()
    .then((data) => {
      console.log(data);
      res.json({ msg: "Data inserted", success: true, data });
    })
    .catch((error) => {
      res.status(500).json({ msg: error, success: false });
    });
});

router.get("/products/getdata", (req, res) => {
  productModel
    .find()
    .then((data) => {
      console.log(data);
      res.json({ msg: "Data fetched", success: true, data });
    })
    .catch((err) => {
      res.status(500).json({ msg: err, success: false });
    });
});
router.get("/products/async/getdata/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({ msg: "data fetched successguly", success: true, product });
  } catch (e) {
    res.status(500).json({ msg: e.message, success: false });
  }
});

router.put("/products/async/update/:id", async (req, res) => {
  const data = req.body;
  const product = await productModel.findById(req.params.id);
  if (!data) {
    res.status(400).json({ msg: "data not found" });
    return;
  }
  if (!product) {
    res.status(400).json({ msg: "user not found" });
    return;
  }
  try {
    product.name = data.name ? data.name : product.name;
    product.catagories = data.catagories ? data.catagories : product.catagories;
    product.price = data.price ? data.price : product.price;
    product.details = data.details ? data.details : product.details;
    const updatedProduct = await product.save();
    res.json({ msg: "Data updated", success: true, updatedProduct });
  } catch (e) {
    res.status(500).json({ msg: e.message, success: false });
  }
});
// api to get all product data

module.exports = router;
