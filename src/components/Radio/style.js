import styled from "styled-components"

export const Div = styled.div`
    margin: 10px 0;

    input{
        display: none;
    }
    label{
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        color: blue;
    }
    input:checked + label{
        background-color: rgb(228, 223, 252);
    }
`;