import styled from "styled-components";

export const Section = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0,0,0, .6);
    display: flex;
    justify-content: center;
    align-items: center;

    h2{
        width: 100%;
        font-size: 20px;
        font-weight: bolder;
        margin-bottom: 20px;
    }
    h2 button{
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        background-color: transparent;
        cursor: pointer;
    }
    & form > label{
        margin-top: 15px;
    }
    & form {
        position: relative;
        background-color: white;
    }
    & > div{
        display: flex;
        margin: 7px 0;
    }
`;
