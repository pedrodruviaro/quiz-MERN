import styled from "styled-components";

export const Alternative = styled.p`
    font-size: 1.15rem;
    background-color: ${(props) =>
        props.selected ? "#fff" : "rgb(255, 249, 218)"};

    border: 2px solid;
    border-color: ${(props) =>
        props.selected ? `green` : "rgb(255, 249, 218)"};

    font-weight: 500;
    color: #333;
    padding: 1rem;
    margin: 1rem 0;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(1.1);
    }
`;
