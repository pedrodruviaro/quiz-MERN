const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        questions: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
            min: 6,
            max: 200,
        },
        description: {
            type: String,
            required: true,
            min: 6,
            max: 500,
        },
        category: {
            type: String,
            required: true,
        },
        deployed: {
            type: Boolean,
            default: false,
        },
        author: {
            type: String,
            required: true,
            min: 6,
            max: 200,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("quizzes", QuizSchema);
