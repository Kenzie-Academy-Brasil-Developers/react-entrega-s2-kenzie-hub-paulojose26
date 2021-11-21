import styled from "styled-components";

export const Section = styled.button`
    padding: 10px 5px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

    &.button--green{

    }
    &.button--gray{
        background-color: rgb(236, 236, 236);
        color: gray;
    }
    &.button--purple{
        background-color: rgb(68, 47, 163);
        color: white;
    }
`;