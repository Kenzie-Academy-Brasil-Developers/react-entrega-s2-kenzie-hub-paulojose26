import { Section, ArticleDesc, ArticleUser } from "./style";

import { useHistory } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";

import Api from "../../services/Api";

const User = ({ user, setUser }) => {
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token){
            Api.get("/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUser(response.data);
            }).catch(error => {
                console.log(error);
                setUser(null);
                localStorage.removeItem("token");
                toast("Faça Login para continuar", {
                    duration: 2000
                });
                history.push("/login");
            });
        }
        else{
            history.push("/login");
        }
    });

    return (
        <Section>
            <ArticleDesc></ArticleDesc>
            <ArticleDesc></ArticleDesc>
            <ArticleUser></ArticleUser>
        </Section>
    );
};

export default User;
