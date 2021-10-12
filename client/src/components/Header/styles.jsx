import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    box-shadow: 0px 4px 8px -8px rgba(255, 255, 255, 1);

    > div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        > span {
            font-weight: 500;
            font-size: 1.15rem;
        }

        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 0.5rem;
            font-size: 1rem;
            background-color: ${(props) => props.theme.accentLight};
        }
    }
`;
