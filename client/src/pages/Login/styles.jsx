import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    margin: 0 auto;
    width: min(25rem, 100%);

    > input,
    > textarea,
    > label {
        width: 100%;
    }
`;

export const CustomText = styled.p`
    font-size: 1.05rem;
    margin: 1rem auto;

    > a {
        color: ${(props) => props.theme.accentLight};
        font-size: 1.15rem;
        position: relative;

        &::after {
            transform: scale(0);
            content: "";
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            bottom: -2px;
            right: 0;
            background-color: ${(props) => props.theme.accentLight};
            transition: transform 0.3s;
        }

        &:hover::after {
            transform: scale(1);
        }
    }
`;
