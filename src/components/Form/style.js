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
    
    p{
        font-size: 14px;
        color: gray;
        text-align: center;
        align-self: center;
        margin: 20px 0;
    }

    [type="submit"]{
        background-color: rgb(68, 47, 163);
        color: white;
    }

    [type="button"]{
        background-color: rgb(236, 236, 236);
        color: gray;
    }

    @media (min-width: 500px){
        margin: 20px 0;
    }
`;