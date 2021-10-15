import styled from "styled-components";

export const Button = styled.button`
    border: none;
    outline: none;
    padding: 0.5em 1em;
    background-color: ${(props) =>
        props.variant === "secondary"
            ? "lightcoral"
            : (props) => props.theme.accent};
    color: ${(props) => props.theme.light};
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: filter 0.3s ease-in-out;

    &:hover {
        filter: brightness(1.2);
    }
`;
