import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    margin-bottom: 25px;
    position: relative;

    label{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-40%);
        font-size: 16px;
        color: gray;
        transition: all .3s;
    }
    input{
        width: 100%;
        padding: 10px 5px;
        border-radius: 5px;
        border: 2px solid transparent;
        background-color: rgb(236, 236, 236);
    }
    input:focus, .input--focus{
        background-color: white;
        border: 2px solid black;
    }
    input:focus + label, .label--focus{
        top: -1px;
        font-size: 12px;
        background-color: white;
    }
`;