const router = require("express").Router();
const { newQuiz, getAllQuizzes } = require("../controllers/quizController");
const verifyToken = require("../services/verifyToken");

router.post("/new", verifyToken, newQuiz);
router.get("/", verifyToken, getAllQuizzes);

module.exports = router;
