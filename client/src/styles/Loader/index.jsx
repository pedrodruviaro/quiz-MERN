import styled from "styled-components";

export const Loader = styled.div`
    width: 50px;
    height: 50px;

    border: 12px solid ${(props) => props.theme.light};
    border-radius: 50%;
    border-top: 12px solid ${(props) => props.theme.accent};

    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;
