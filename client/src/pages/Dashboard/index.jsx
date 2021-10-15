import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Container } from "../../styles/Container";
import api from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import QuizCardPreview from "../../components/QuizCardPreview";
import { DashboardQuizList } from "./styles";
import { Loader } from "../../styles/Loader";
import { SectionHeading } from "../../styles/Typography";

export default function Index() {
    const { logoutUser, user } = useAuth();

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            if (user) {
                try {
                    const { data } = await api.get("/api/quiz/all");
                    if (data) {
                        setQuizzes(data);
                        setLoading(false);
                    }
                } catch (err) {
                    console.log(err.response);
                }
            }
        })();

        return () => {
            setQuizzes([]);
            setLoading(true);
        };
    }, [user]);

    return (
        <>
            <Header />
            <Container section gap="3rem">
                <SectionHeading>Here are your quizzes</SectionHeading>

                {loading && <Loader />}

                <DashboardQuizList>
                    {quizzes.map((quiz) => (
                        <QuizCardPreview key={quiz.createdAt} quiz={quiz} />
                    ))}
                </DashboardQuizList>
                <button onClick={logoutUser}>Logout</button>
            </Container>
        </>
    );
}
