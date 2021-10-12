import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: ${(props) =>
        props.direction ? props.direction : "column"};
    align-items: ${(props) => (props.align ? props.align : "center")};
    justify-content: ${(props) =>
        props.justify ? props.justify : "flex-start"};
    gap: ${(props) => (props.gap ? props.gap : "1.5rem")};

    padding: ${(props) => (props.section ? "2rem 1rem" : "1rem")};
`;
