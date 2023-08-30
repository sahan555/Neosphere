const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");


// api to save user data
router.post('/products/savedata', (req, res) => {
    const data=req.body;
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const product = new productModel({
        name: data.name,
        catagories: data.catagories,
        price: data.price,
        details: data.details,

    });

    product.save().then((data) => {
        console.log(data);
        res.json({ msg: 'Data inserted', success: true ,data});
    }
    ).catch((error) => {
        res.status(500).json({ msg: error, success: false });
    }
    );
});


// api to get all user data


module.exports = router;