import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: gray;
        border-radius: 20px;
    }

    @media (min-width: 700px){
        padding: 15px 30px;
        background-color: rgb(236, 236, 236);
    }
`;

export const Hearder = styled.header`
    width: 100%;
    max-width: 1200px;
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

    @media (min-width: 600px){
        border-radius: 10px;
        background-color: white;

        a{
            font-size: 25px;
        }
        a strong{
            font-size: 19px;
        }
    }
`;
