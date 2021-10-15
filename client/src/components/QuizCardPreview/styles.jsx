import styled from "styled-components";

export const QuizCardPreview = styled.article`
    align-items: center;
    color: ${(props) => props.theme.dark};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;

    background-color: ${(props) => props.theme.light};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='141' height='141' viewBox='0 0 20 20'%3E%3Cg %3E%3Cpolygon fill='%23FBFBFB' points='20 10 10 0 0 0 20 20'/%3E%3Cpolygon fill='%23FBFBFB' points='0 10 0 20 10 20'/%3E%3C/g%3E%3C/svg%3E");

    box-shadow: 6px 6px ${(props) => props.theme.accent};

    &:hover {
        transform: translate(-6px, -6px);
        box-shadow: 12px 12px ${(props) => props.theme.accent};
    }

    > header {
        h3 {
            font-size: 1.25rem;
            font-weight: 600;
            text-align: center;
            margin-bottom: 1rem;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;

            > span {
                opacity: 0.9;
                font-size: 0.9rem;
            }

            > p {
                display: flex;
                align-items: center;

                &::before {
                    content: "";
                    background-color: ${(props) => props.theme.accent};
                    display: block;
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    margin-right: 0.25rem;
                }
            }
        }
    }

    > main {
        p {
            font-size: 1.15rem;
        }
    }

    > footer {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
        width: 100%;

        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
        }
    }
`;
