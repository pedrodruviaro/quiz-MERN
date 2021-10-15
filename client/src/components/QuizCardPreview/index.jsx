import { QuizCardPreview } from "./styles";
import { Button } from "../../styles/Button";
import { useHistory } from "react-router-dom";
import moment from "moment";

export default function Index({ quiz }) {
    const history = useHistory();

    return (
        <QuizCardPreview>
            <header>
                <h3>{quiz.title}</h3>
                <div>
                    <span>{moment(quiz.createdAt).format("MMM Do YYYY")}</span>
                    <p>{quiz.category}</p>
                </div>
            </header>
            <main>
                <p>{quiz.description}</p>
            </main>
            <footer>
                <div>
                    <span>Questions: {quiz.questions.length}</span>
                    <span>{quiz.deployed ? "Finished!" : "Not finished"}</span>
                </div>
                <div>
                    <Button
                        variant="secondary"
                        onClick={() => history.push(`/play/${quiz._id}`)}
                    >
                        Play
                    </Button>
                    <Button>Edit</Button>
                </div>
            </footer>
        </QuizCardPreview>
    );
}
