import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    margin: 15px 0;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;

    span {
        position: absolute;
        left: 10px;
        top: 100%;
        font-size: 12px;
        color: red;
    }
`;