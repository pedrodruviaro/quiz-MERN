import React from "react";
import styled from "styled-components";

const Styled = styled.div`
    background-color: white;
    padding: 1rem;
    color: black;
`;

export default function Index({ results }) {
    return (
        <Styled>
            <h3>Your Results:</h3>
            <p>{results}</p>
        </Styled>
    );
}
