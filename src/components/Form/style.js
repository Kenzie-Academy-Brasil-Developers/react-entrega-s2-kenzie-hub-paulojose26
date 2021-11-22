import styled from "styled-components";

export const Section = styled.form`
    width: 100%;
    max-width: 400px;
    padding: 15px;
    border: 1px solid rgb(236, 236, 236);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    
    p{
        font-size: 14px;
        color: gray;
        text-align: center;
        align-self: center;
        margin: 20px 0;
    }

    @media (min-width: 500px){
        margin: 20px 0;
        background-color: white;
    }
`;