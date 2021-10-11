const Quiz = require("../models/Quiz");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Inserting a new quiz
async function newQuiz(req, res) {
    const { userId } = jwt.decode(
        req.header("Authorization"),
        process.env.TOKEN_SECRET
    );

    // checking user
    try {
        const userIsValid = await User.findOne({ _id: userId });
        if (!userIsValid) return res.status(401).json("Invalid user!");
    } catch (err) {
        return res.status(500).json(err);
    }

    // insert quiz
    const newQuiz = new Quiz({
        userId: userId,
        questions: req.body.questions,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
    });

    try {
        const savedQuiz = await newQuiz.save();
        res.status(200).json(savedQuiz);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// Inserting a new quiz
async function getAllQuizzes(req, res) {
    // getting userId
    const { userId } = jwt.decode(
        req.header("Authorization"),
        process.env.TOKEN_SECRET
    );

    // checking user
    try {
        const userIsValid = await User.findOne({ _id: userId });
        if (!userIsValid) return res.status(401).json("Invalid user!");
    } catch (err) {
        return res.status(500).json(err);
    }

    // getting all quizzes
    try {
        const quizzes = await Quiz.find({ userId: userId });
        res.status(200).json(quizzes);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = { newQuiz, getAllQuizzes };
