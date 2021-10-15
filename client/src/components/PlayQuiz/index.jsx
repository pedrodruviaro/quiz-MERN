import moment from "moment";
import { useState } from "react";
import { usePlayQuiz } from "../../hooks/usePlayQuiz";
import { Alternative, Error, QuestionStyled, QuizHeader } from "./styles";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import ShowQuizResults from "../../components/ShowQuizResults";

export default function Index({ quiz }) {
    const { stepper, setStepper, rightAnswers, setRightAnswers } =
        usePlayQuiz();

    const [lastQuestion, setLastQuestion] = useState(false);
    const [selected, setSelected] = useState("");
    const [showAnswers, setShowAnswers] = useState(false);
    const [error, setError] = useState(false);

    // show error msg
    function showError() {
        setError(true);
        setTimeout(() => {
            setError(false);
        }, 2000);
    }

    // handling the next question to be rendered
    function handleNextQuestion() {
        setSelected("");

        if (selected.trim() === "") {
            showError();
            return;
        }

        if (selected === quiz.questions[stepper].answer) {
            setRightAnswers((prev) => prev + 1);
        }

        if (stepper < quiz.questions.length - 1) {
            setStepper((prev) => prev + 1);
        }

        if (stepper === quiz.questions.length - 2) {
            setLastQuestion(true);
        }
    }

    // handling if is the last question
    function handleLastQuestion() {
        if (selected.trim() === "") {
            console.log("Select one alternative!");
            return;
        }

        if (selected === quiz.questions[stepper].answer) {
            setRightAnswers((prev) => prev + 1);
        }

        setShowAnswers(true);
    }

    // handling the answer by the user
    function handleAnswer(value) {
        setSelected(value);
        return <h1>{rightAnswers}</h1>;
    }

    return (
        <Container>
            <QuizHeader>
                <h3>{quiz.title}</h3>
                <p>{quiz.description}</p>
                <div>
                    <span>{quiz.category}</span>
                    <span>Created by: {quiz.author}</span>
                    <span>{moment(quiz.createdAt).format("MMM Do YYYY")}</span>
                </div>
            </QuizHeader>

            <QuestionStyled>
                {showAnswers === false ? (
                    <>
                        <h2>{quiz.questions[stepper].label}</h2>

                        {quiz.questions[stepper].alternatives.map(
                            (alt, key) => (
                                <Alternative
                                    key={alt}
                                    selected={
                                        quiz.questions[stepper].alternatives[
                                            key
                                        ] === selected
                                            ? true
                                            : false
                                    }
                                    onClick={() =>
                                        handleAnswer(
                                            quiz.questions[stepper]
                                                .alternatives[key]
                                        )
                                    }
                                >
                                    {alt}
                                </Alternative>
                            )
                        )}
                    </>
                ) : (
                    <ShowQuizResults results={rightAnswers} />
                )}
            </QuestionStyled>
            {error && <Error>Select one alternative!</Error>}
            {!lastQuestion && (
                <Button onClick={handleNextQuestion}>Next Question</Button>
            )}

            {lastQuestion && !showAnswers && (
                <Button onClick={handleLastQuestion}>Finish!</Button>
            )}
        </Container>
    );
}
