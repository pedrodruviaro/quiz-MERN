const router = require("express").Router();
const {
    newQuiz,
    getAllQuizzes,
    getSingleQuiz,
    updateQuiz,
} = require("../controllers/quizController");
const verifyToken = require("../services/verifyToken");

router.post("/new", verifyToken, newQuiz);
router.get("/all", verifyToken, getAllQuizzes);
router.get("/:id", getSingleQuiz);
router.put("/:id", verifyToken, updateQuiz);

module.exports = router;
