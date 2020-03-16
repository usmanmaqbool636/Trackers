const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/User");
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        console.log(req.body);
        const user = new User({ email, password });
        await user.save();
        const token = jwt.sign({ userId: user._id }, 'this')
        console.log(token);
        return res.status(200).json({ token })
    }

    catch (error) {
        // console.log(err.errors.email.message);
        // console.log(err.errors.password.message);

        res.status(422).send(error)
    }
})
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({
            error: "Must provide email and password"
        })
    }
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(422).json({
            error: "Email or Password is invalid"
        })
    }
    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, "this");
        return res.status(200).json({ token });
    }
    catch (e) {
        console.log('auth=>', e);
        return res.status(422).json({
            error: "Email or Password is invalid"
        })
    }
})
module.exports = router;