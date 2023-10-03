const express = require("express");
const router = express.Router();
const categoryModel = require("../model/categoriesModel");
const userModel = require("../model/userModel");
const auth = require("../config/auth");

// @route POST category/create
// @desc Create a category
// @access Private
router.post("/category/create", auth.verifyUser, async (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ error: "Please enter the category name" });
  }
  const admin = await userModel.findOne({ _id: req.userData._id });
  if (admin.role !== "admin") {
    return res
      .status(400)
      .json({ error: "You are not authorized to create category" });
  }

  try {
    const existingCategory = await categoryModel.findOne({ name: data.name });
    if (existingCategory) {
      return res.status(400).json({ error: "Category already exists" });
    }
    const category = new categoryModel({
      name: data.name,
    });
    await category.save();
    return res.status(200).json({
      msg: "Category created successfully",
      category,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server Error" });
  }
});
router.get("/category/get", async (req, res) => {
  try {
    const category = await categoryModel.find();
    if (!category) {
      return res.status(400).send("category not found");
    }
    res.json({ msg: "category fetched", success: true, category });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
router.get("/category/get/:id", async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      return res.status(400).send("category not found");
    }
    res.json({ msg: "category fetched", success: true, category });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;