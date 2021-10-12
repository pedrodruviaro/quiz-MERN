import { QuizCardPreview } from "./styles";
import { Button } from "../../styles/Button";
import moment from "moment";

export default function Index({ quiz }) {
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
                    <span>{quiz.deployed ? "Deployed" : "Not finished"}</span>
                </div>
                <Button>Play/Edit</Button>
            </footer>
        </QuizCardPreview>
    );
}
