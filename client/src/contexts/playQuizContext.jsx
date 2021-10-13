import { createContext, useState } from "react";

export const PlayQuizContext = createContext();
PlayQuizContext.displayName = "Play Quiz";

export default function PlayQuizContextProvider({ children }) {
    const [stepper, setStepper] = useState(0);
    const [rightAnswers, setRightAnswers] = useState(0);

    return (
        <PlayQuizContext.Provider
            value={{ stepper, setStepper, rightAnswers, setRightAnswers }}
        >
            {children}
        </PlayQuizContext.Provider>
    );
}
