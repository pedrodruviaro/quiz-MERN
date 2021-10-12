import styled from "styled-components";

export const Input = styled.input`
    outline: none;
    border: 1px solid;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:hover {
        border-color: cyan;
    }

    &:focus {
        border-color: cyan;
    }
`;
