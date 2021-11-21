import { Section, ArticleDesc, ArticleUser, Item } from "./style";

import { useHistory } from "react-router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FiGitPullRequest, FiCodesandbox } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

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
    }, []);

    return (
        <Section>
            <ArticleDesc>
                <header className="header--tech">
                    <h1>Minhas Tecnologias</h1>
                    <button><AiOutlinePlus /></button>
                </header>
                { user && user.techs.map(tech => (
                    <Item className="item--tech">
                        <figure className="image--tech">
                            <FiCodesandbox />
                        </figure>
                        <div className="description--tech">
                            <h2>{ tech.title }</h2>
                            <p>{ tech.status }</p>
                        </div>
                    </Item>
                ))}
            </ArticleDesc>
            <ArticleDesc>
                <header className="header--work">
                    <h1>Meus Trabalhos</h1>
                    <button><AiOutlinePlus /></button>
                </header>
                { user && user.works.map(work => (
                    <Item className="item--work">
                        <figure className="image--work">
                            <FiGitPullRequest />
                        </figure>
                        <div className="description--work">
                            <h2>{ work.title }</h2>
                            <p>{ work.description.slice(0, 50) + "..." }</p>
                        </div>
                    </Item>
                ))}
            </ArticleDesc>
            <ArticleUser>
                <header>
                    { user && (
                        <>
                            <figure>
                                { (user.avatar_url)? <img src={ user.avatar_url } alt={ user.name } /> : <FaUserAlt />}
                            </figure>
                            <div>
                                <h1>{ user.name }</h1>
                                <p>{ user.course_module }</p>
                            </div>
                        </>
                    )}
                </header>
                <section>
                    <article className="contact">
                        <figure>
                            <AiOutlineMobile />
                        </figure>
                        { user && (
                            <div>
                                <h2>Ligar agora</h2>
                                <p>{ user.contact }</p>
                            </div>
                        )}
                    </article>
                    <article className="email">
                        <figure>
                            <AiOutlineMail />
                        </figure>
                        { user && (
                            <div>
                                <h2>Enviar e-mail</h2>
                                <p>{ user.email }</p>
                            </div>
                        )}
                    </article>
                </section>
            </ArticleUser>
        </Section>
    );
};

export default User;
