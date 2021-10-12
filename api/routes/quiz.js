const router = require("express").Router();
const {
    newQuiz,
    getAllQuizzes,
    getSingleQuiz,
} = require("../controllers/quizController");
const verifyToken = require("../services/verifyToken");

router.post("/new", verifyToken, newQuiz);
router.get("/", verifyToken, getAllQuizzes);

router.get("/play/:id", getSingleQuiz);

module.exports = router;
