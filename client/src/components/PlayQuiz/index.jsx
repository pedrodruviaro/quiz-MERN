import moment from "moment";
import { useState } from "react";
import { usePlayQuiz } from "../../hooks/usePlayQuiz";
import { Alternative } from "./styles";

export default function Index({ quiz }) {
    const { stepper, setStepper, rightAnswers, setRightAnswers } =
        usePlayQuiz();

    const [done, setDone] = useState(false);
    const [selected, setSelected] = useState("");
    const [showAnswers, setShowAnswers] = useState(false);

    // handling the next question to be rendered
    function handleNextQuestion() {
        setSelected("");

        if (selected.trim() === "") {
            console.log("Select one alternative!");
            return;
        }

        if (stepper < quiz.questions.length - 1) {
            setStepper((prev) => prev + 1);
        }

        if (selected === quiz.questions[stepper].answer) {
            setRightAnswers((prev) => prev + 1);
        }
        if (stepper === quiz.questions.length - 2) {
            setDone(true);
        }
    }

    // handling the answer by the user
    function handleAnswer(value) {
        setSelected(value);
    }

    return (
        <div>
            <h1>{quiz.title}</h1>
            <p>{quiz.description}</p>
            <p>{quiz.category}</p>
            <p>{moment(quiz.createdAt).format("MMM Do YYYY")}</p>
            <p>{quiz.author}</p>
            <h2>{quiz.questions[stepper].label}</h2>

            <div>
                <Alternative
                    selected={
                        quiz.questions[stepper].alternatives[0] === selected
                            ? true
                            : false
                    }
                    onClick={() =>
                        handleAnswer(quiz.questions[stepper].alternatives[0])
                    }
                >
                    {quiz.questions[stepper].alternatives[0]}
                </Alternative>
                <Alternative
                    selected={
                        quiz.questions[stepper].alternatives[1] === selected
                            ? true
                            : false
                    }
                    onClick={() =>
                        handleAnswer(quiz.questions[stepper].alternatives[1])
                    }
                >
                    {quiz.questions[stepper].alternatives[1]}
                </Alternative>
                <Alternative
                    selected={
                        quiz.questions[stepper].alternatives[2] === selected
                            ? true
                            : false
                    }
                    onClick={() =>
                        handleAnswer(quiz.questions[stepper].alternatives[2])
                    }
                >
                    {quiz.questions[stepper].alternatives[2]}
                </Alternative>
                <Alternative
                    selected={
                        quiz.questions[stepper].alternatives[3] === selected
                            ? true
                            : false
                    }
                    onClick={() =>
                        handleAnswer(quiz.questions[stepper].alternatives[3])
                    }
                >
                    {quiz.questions[stepper].alternatives[3]}
                </Alternative>
            </div>

            {!done && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
            {done && (
                <button onClick={() => setShowAnswers(true)}>Finish!</button>
            )}
            {showAnswers && <h1>{rightAnswers}</h1>}
        </div>
    );
}
