import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    padding: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 500px){
        justify-content: start;
    }
`;

export const Hearder = styled.header`
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    a, a strong{
        font-size: 20px;
        font-weight: bold;
    }
    a strong{
        padding: 2px;
        border-radius: 2px;
        font-size: 14px;
        font-weight: bolder;
        background-color: purple;
        color: white;
    }

    a.perfilUser{
        font-size: 30px;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        background-color: rgb(236, 236, 236);
        margin-left: auto;
    }
    a.perfilUser img{
        width: 100%;
    }

    @media (min-width: 500px){
        a{
            font-size: 25px;
        }
        a strong{
            font-size: 19px;
        }
    }
`;
