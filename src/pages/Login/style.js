import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div{
        width: 100%;
        margin: 20px 0;
        position: relative;
    }
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
    p{
        font-size: 14px;
        color: gray;
        text-align: center;
        align-self: center;
        margin: 20px 0;
    }

    button {
        padding: 10px 5px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
    }

    @media (min-width: 500px){
        margin: 20px 0;
    }
`;

export const ButtonLogin = styled.button`
    background-color: rgb(68, 47, 163);
    color: white;
`;

export const ButtonCadastre = styled.button`
    background-color: rgb(236, 236, 236);
    color: gray;
`;