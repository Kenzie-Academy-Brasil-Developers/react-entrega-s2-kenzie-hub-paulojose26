import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 20px;

    span{
        position: absolute;
        left: 10px;
        top: 100%;
        font-size: 12px;
        color: red;
    }
    label{
        position: absolute;
        left: 10px;
        top: 50%;
        padding: 0 3px;
        transform: translateY(-40%);
        font-size: 16px;
        color: gray;
        transition: all .3s;
    }
    textarea{
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        min-height: 100px;
        max-height: 100px;
        padding: 10px 5px;
        border-radius: 5px;
        border: 2px solid transparent;
        background-color: rgb(236, 236, 236);
    }
    textarea:focus, .input--focus{
        background-color: white;
        border: 2px solid black;
    }
    textarea:focus + label, .label--focus{
        top: -1px;
        font-size: 12px;
        background-color: white;
    }
`;