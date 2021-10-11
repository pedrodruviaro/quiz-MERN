const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 100,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 150,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            min: 6,
            max: 1000,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
