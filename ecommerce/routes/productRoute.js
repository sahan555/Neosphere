const express = require("express");
const router = express.Router();
const productModel = require("../model/productModel");
const userModel = require("../model/userModel");
const categoryModel = require("../model/categoriesModel");
const domain = "http://localhost:5000";
const auth = require("../config/auth.js");
const uploadServices = require("../services/uploadServices");

// @route POST profile/create by taking the ref of the user
// @desc Create a profile

// @access Private
router.post(
  "/product/create",
  uploadServices.productImage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    const data = req.body;

    const category = await categoryModel.find({ name: data.category });
    console.log(category);
    const category_id = category[0]._id;
    const file = req.file;
    const admin = await userModel.findOne({ _id: req.userData._id });
    if (admin.role !== "admin") {
      return res
        .status(400)
        .json({ error: "You are not authorized to create category" });
    }
    try {
      const existingProduct = await productModel.findOne({ name: data.name });

      if (existingProduct) {
        return res.status(400).json({ error: "Profile already exists" });
      }
      if (!file || file.length === 0) {
        return res.status(400).send("Please upload an image");
      }
      const image = domain + "/public/product/" + file.filename;
      const product = new productModel({
        category: category_id,
        name: data.name,
        price: data.price,
        details: data.details,
        stockquantity: data.stockquantity,
        productImg: image,
      });
      await product.save();
      res.status(200).json({ msg: "product created successfully", product });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);
// @route put profile/update by taking the ref of the user
// @desc update a profile
// @access Private
router.put(
  "/product/update/:id",
  uploadServices.productImage.single("image"),
  auth.verifyUser,
  async (req, res) => {
    const data = req.body;
    const file = req.file;
    const admin = await userModel.findOne({ _id: req.userData._id });
    if (admin.role !== "admin") {
      return res
        .status(400)
        .json({ error: "You are not authorized to update prdouct" });
    }
    // if (req.userData.role !== "admin") {
    //   return res
    //     .status(401)
    //     .json({ error: "You are not authorized to update a product" });
    // }

    try {
      const product = await productModel.findById(req.params.id);
      if (!product) {
        res.status(400).json({ msg: "product not found" });
        return;
      }
      // Update the product properties with the provided data
      if (data.name) product.name = data.name;
      if (data.price) product.price = data.price;
      if (data.quantity) product.quantity = data.quantity;
      if (data.description) product.description = data.description;

      // Update the image if a new image was uploaded
      if (file) {
        const oldImagePath = product.image;
        const newImage = domain + "/public/product/" + req.file.filename;
        product.image = newImage;

        // Remove the old image file if it exists
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      // Save the updated product to the database
      await product.save();
      return res.status(200).json({
        msg: "Product updated successfully",
        product,
      });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Server Error" });
    }
  }
);
// code for get the profile by taking the ref of the user
// @route GET profile/get
// @desc Get a profile
// @access Private
router.get("/product/get", async (req, res) => {
  try {
    const product = await productModel.find();
    if (!product) {
      return res.status(400).send("product not found");
    }
    res.json({ msg: "product fetched", success: true, product });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/product/get/:id", auth.verifyUser, async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(400).send("product not found");
    }
    res.json({ msg: "product fetched", success: true, product });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// code for delete the profile by taking the ref of the user
// @route DELETE profile/delete
// @desc Delete a profile
// @access Private
router.delete("/product/delete/:id", auth.verifyUser, async (req, res) => {
  const admin = await userModel.findOne({ _id: req.userData._id });
  if (admin.role !== "admin") {
    return res
      .status(400)
      .json({ error: "You are not authorized to create category" });
  }
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);
    res.json({ msg: "product deleted successfully", success: true, product });
  } catch (err) {
    res.status(500).json({ msg: err.message, success: false });
  }
});
module.exports = router;
