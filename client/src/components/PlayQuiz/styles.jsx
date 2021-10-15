import styled from "styled-components";

export const QuizHeader = styled.header`
    background-color: ${(props) => props.theme.light};
    color: ${(props) => props.theme.dark};
    padding: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    width: 100%;
    font-size: 1.15rem;
    border-radius: 4px;

    > h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        font-size: 0.9rem;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        padding-top: 1rem;

        > span:first-child {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        > span:first-child::before {
            content: "";
            background-color: ${(props) => props.theme.accent};
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
        }
    }
`;

export const QuestionStyled = styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem;
    background-color: ${(props) => props.theme.light};
    color: ${(props) => props.theme.dark};
    border-radius: 4px;

    > h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
`;

export const Alternative = styled.p`
    font-size: 1.15rem;
    background-color: ${(props) => (props.selected ? "#444" : "#333")};
    border: 2px solid;
    border-color: ${(props) =>
        props.selected ? `#2980b9` : "rgb(255, 249, 218)"};

    color: #fff;
    font-weight: 500;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: filter 0.2s;
    font-size: 1.05rem;
    border-radius: 4px;

    &:hover {
        filter: brightness(1.3);
    }
`;

export const Error = styled.span`
    color: #ff7675;
    font-weight: 500;
    font-size: 1.25rem;
`;
