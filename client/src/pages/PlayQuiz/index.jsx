import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../styles/Loader";
import { Container } from "../../styles/Container";
import PlayQuiz from "../../components/PlayQuiz";
import api from "../../services/api";
import PlayQuizContextProvider from "../../contexts/playQuizContext";

export default function Index() {
    const idParam = useParams().id;
    const [quiz, setQuiz] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const quizId = idParam;
                const { data } = await api.get(`/api/quiz/${quizId}`);
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

    if (error) return <h1>Quiz not found!</h1>;

    if (loading)
        return (
            <Container justify="center">
                <Loader />
            </Container>
        );

    return (
        <Container>
            <PlayQuizContextProvider>
                <PlayQuiz quiz={quiz} />
            </PlayQuizContextProvider>
        </Container>
    );
}
