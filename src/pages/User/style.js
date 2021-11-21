import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    max-width: 1200px;
    min-height: 70vh;
    margin: 15px 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 900px){
        flex-direction: row;
        align-items: flex-start;
    }
`;

export const ArticleDesc = styled.article`
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    header{
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header h1{
        font-size: 20px;
        font-weight: bolder;
    }
    header button{
        display: flex;
        justify-content: center;
        font-size: 18px;
        align-items: center;
        padding: 5px 10px;
        color: white;
        border-radius: 5px;
        cursor: pointer;
    }
    .header--tech button{
        background-color: #11995E;
    }
    .header--work button{
        background-color: #403CAA;
    }

    @media (min-width: 900px){
        max-width: 400px;
        margin-right: 15px;
    }
`;

export const ArticleUser = styled.article`
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    background-color: white;

    section{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;
    }

    section article{
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 10px;
    }

    section article figure{
        width: 60px;
        height: 60px;
        margin-right: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: white;
    }
    section article.contact{
        background-color: rgba(78, 71, 255, 0.1);
    }
    section article.contact figure{
        background-color: #403CAA;
    }

    section article.email{
        background-color: rgb(190, 248, 224);
    }
    section article.email figure{
        background-color: #11995E;
    }
    section article div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    section article h2{
        font-size: 20px;
        margin-bottom: 5px;
        font-weight: bolder;
    }
    section article p{
        color: gray;
    }

    header{
        width: 100%;
        padding: 15px;
        display: flex;
        align-items: center;
        background-color: #403CAA;
        border-radius: 10px 10px 0 0;
    }

    header figure{
        font-size: 40px;
        width: 55px;
        height: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        background-color: rgb(236, 236, 236);
    }
    header figure img{
        width: 100%;
    }
    header div{
        width: 70%;
        padding: 10px;
    }
    header div h1{
        font-size: 18px;
        font-weight: bolder;
        height: 20px;
        margin-bottom: 10px;
        overflow: hidden;
        color: white;
    }
    header div p{
        font-size: 12px;
        color: rgb(236, 236, 236);
    }

    @media (min-width: 900px){
        max-width: 340px;
    }
`;

export const Item = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border-right: 5px solid rgb(236, 236, 236);
    cursor: pointer;

    &.item--tech:hover{
        border-right: 5px solid #11995E;
    }
    &.item--tech:hover figure{
        background-color: #11995E;
        color: white;
    }
    &.item--work:hover{
        border-right: 5px solid #403CAA;
    }
    &.item--work:hover figure{
        background-color: #403CAA;
        color: white;
    }

    figure{
        width: 70px;
        height: 77px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    }
    figure.image--tech{
        background-color: rgb(226, 248, 239);
        color: #11995E;
    }
    figure.image--work{
        background-color: rgba(78, 71, 255, 0.1);
        color: #403CAA;
    }

    div{
        display: flex;
        width: 70%;
        height: 100%;
        padding: 5px 15px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
    div h2{
        font-size: 18px;
        font-weight: bolder;
    }
    div.description--tech p{
        text-align: center;
        padding: 7px;
        border-radius: 5px;
        background-color: #F5F5F5;
        color: #11995E;
    }
    div.description--work p{
        font-size: 14px;
        color: #999999;
    }
`;
