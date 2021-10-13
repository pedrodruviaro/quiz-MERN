import { useContext } from "react";
import { PlayQuizContext } from "../contexts/playQuizContext";

export function usePlayQuiz() {
    const value = useContext(PlayQuizContext);
    return value;
}
