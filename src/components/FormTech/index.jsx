import { Section } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Form from "../Form";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Button from "../Button";
import Api from "../../services/Api";

const FormTech = ({ tech, setTech, atualizar, setAtualizar, setTechForm }) => {
    const validation = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().nullable().required("Campo Obrigatório")
    });
    console.log(tech);
    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    function onSubmit(datas){
        let token = localStorage.getItem("token");
        if(!tech){
            toast.loading("Espere...");   
            Api.post("/users/techs", datas, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                toast.remove();
                toast.success("Tecnologia cadastrada");
                setTech(null);
                setAtualizar(!atualizar);
                setTechForm(false);
            }).catch(error => {
                toast.remove();
                toast.error("Erro na operação", {
                    duration: 2000
                })
                console.log(error.message);
            });
        }
        else{
            toast.loading("Espere...");
            delete datas.title;
            Api.put(`/users/techs/${ tech.id }`, datas, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                toast.remove();
                toast.success("Tecnologia Editada");
                setTech(null);
                setAtualizar(!atualizar);
                setTechForm(false);
            }).catch(error => {
                toast.remove();
                toast.error("Erro na operação", {
                    duration: 2000
                })
                console.log(error.message);
            });
        }
    }

    function onClickDelete(){
        let token = localStorage.getItem("token");
        if(tech){
            toast.loading("Espere...");
            Api.delete(`/users/techs/${ tech.id }`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                toast.remove();
                toast.success("Tecnologia Deletada");

                setTech(null);
                setAtualizar(!atualizar);
                setTechForm(false);
            }).catch(error => {
                toast.remove();
                toast.error("Erro na operação", {
                    duration: 2000
                })
                console.log(error.message);
            });
        }
    }

    return (
        <Section>
            <Form onSubmit={ handleSubmit(onSubmit) }>
                <h2>Cadastrar Tecnologia 
                    <button type="button" 
                        onClick={() => {
                            setTech(null);
                            setTechForm(false);
                        } }>X</button>
                </h2>
                <Input id="title" placeholder="Nome da tecnologia*" type="text" 
                    register={ register } error={ errors.title } value={ tech && tech.title } 
                    className={ (!tech)? "" : "input--focus" } classLabel={ (!tech)? "" : "label--focus" } />
                <label>Selecionar status:</label>
                <div>
                    <Radio id="inicio" name="status" placeholder="Iniciante" 
                        value="Iniciante" register={ register } />
                    <Radio id="medio" name="status" placeholder="intermediário" 
                        value="Intermediário" register={ register } />
                    <Radio id="avanco" name="status" placeholder="Avançado" 
                        value="Avançado" register={ register } />
                    <span>{ errors.status?.message }</span>
                </div>
                {(!tech)? <Button type="submit" className="button--purple">Cadastrar</Button>: (
                    <>
                        <Button type="submit" className="button--green">Salvar alterações</Button>
                        <Button type="button" className="button--gray" 
                            onClick={ onClickDelete }>Excluir</Button>
                    </>
                )}
            </Form>
        </Section>
    )
};

export default FormTech;
