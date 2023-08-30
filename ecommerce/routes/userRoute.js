const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");


// api to save user data
router.post('/users/savedata', (req, res) => {
    const data=req.body;
    if (!data) {
        res.status(400).json({ msg: 'Data not found' });
        return;
    }
    const user = new userModel({
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        contactNumber: data.contactNumber,
        // age:req.body.age,
        age:data.age,

    });

    user.save().then((data) => {
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