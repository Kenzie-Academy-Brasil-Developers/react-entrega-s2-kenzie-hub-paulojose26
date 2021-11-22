import { Section, ArticleDesc, ArticleUser, Item } from "./style";

import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FiGitPullRequest, FiCodesandbox } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMobile, AiOutlineMail } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import Api from "../../services/Api";
import Button from "../../components/Button";
import FormTech from "../../components/FormTech";
import FormWork from "../../components/FormWork";

const User = ({ user, setUser }) => {
    const history = useHistory();
    const [ atualizar, setAtualizar ] = useState(false);
    const [ tech, setTech ] = useState(null);
    const [ techForm, setTechForm ] = useState(false);
    const [ work, setWork ] = useState(null);
    const [ workForm, setWorkForm ] = useState(false);

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
    }, [atualizar]);

    return (
        <>
        <Section>
            <ArticleDesc>
                <header className="header--tech">
                    <h1>Minhas Tecnologias</h1>
                    <button onClick={() => setTechForm(true)}><AiOutlinePlus /></button>
                </header>
                { user && user.techs.map(tech => (
                    <Item className="item--tech" key={ tech.id } 
                        onClick={ ()=> {
                            setTechForm(true);
                            setTech(tech);
                        }}>
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
                    <button onClick={() => setWorkForm(true)}><AiOutlinePlus /></button>
                </header>
                { user && user.works.map(work => (
                    <Item className="item--work" key={work.id}>
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
                    <Button onClick={ () => {
                        setUser(null);
                        localStorage.removeItem("token");
                        history.push("/login");
                    }} className="button--gray">Sair</Button>
                </section>
            </ArticleUser>
        </Section>
        {techForm && <FormTech setAtualizar={ setAtualizar } setTechForm={ setTechForm } 
            tech={ tech } setTech={ setTech } atualizar={ atualizar } />}
        {workForm && <FormWork setAtualizar={ setAtualizar } setWorkForm={ setWorkForm } 
            work={ work } setWork={ setWork } />}
        </>
    );
};

export default User;
