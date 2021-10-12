import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../styles/Loader";
import { Container } from "../../styles/Container";
import { Button } from "../../styles/Button";
import moment from "moment";
import api from "../../services/api";

export default function Index() {
    const idParam = useParams().id;
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // stepper
    const [stepper, setStepper] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const quizId = idParam;
                const { data } = await api.get(`/api/quiz/play/${quizId}`);
                console.log(data);
                setQuiz(data[0]);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();

        return () => {
            setQuiz([]);
            setLoading(true);
            setError("");
        };
    }, [idParam]);

    // useEffect(() => {
    //     if (!loading && stepper <= quiz.questions.length - 1) {
    //         console.log(quiz.questions[stepper]);
    //     }
    // }, [stepper, quiz, loading]);

    if (error) return <h1>Quiz not found!</h1>;

    if (loading)
        return (
            <Container justify="center">
                <Loader />
            </Container>
        );

    return (
        <Container>
            <div>
                <h1>{quiz.title}</h1>
                <p>{quiz.description}</p>
                <p>{quiz.category}</p>
                <p>{moment(quiz.createdAt).format("MMM Do YYYY")}</p>
                <p>{quiz.author}</p>
            </div>

            <section></section>

            <Button>Play Quiz!</Button>

            <button onClick={() => setStepper((prev) => prev + 1)}>NEXT</button>
        </Container>
    );
}
