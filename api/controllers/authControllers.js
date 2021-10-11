const {
    registerValidation,
    loginValidation,
} = require("../services/validations");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    // validating
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    // hashing pass
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // inserting into db
    const newUser = new User({
        username: req.body.username,
        password: hashedPass,
        email: req.body.email,
    });

    try {
        const savedUser = await newUser.save();
        const { password, ...rest } = savedUser._doc;
        return res.status(200).json(rest);
    } catch (error) {
        return res.status(500).json(error);
    }
}

async function login(req, res) {
    // validating
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    try {
        // cheking if user exists (via email)
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json("User not found");

        // checking if passwords match
        const validPass = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPass) return res.status(400).json("Wrong password");

        // all got -> sending token
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET);
        const { password, ...rest } = user._doc;
        return res.header("Authorization").json({ token, ...rest });
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { register, login };
