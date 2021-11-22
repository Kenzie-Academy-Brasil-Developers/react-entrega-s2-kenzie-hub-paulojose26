import { Section } from "./style";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

import Form from "../Form";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Button from "../Button";

const FormTech = ({ tech, setTech, setAtualizar, setTechForm }) => {
    const validation = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        status: yup.string().nullable().required("Campo Obrigatório")
    });

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    function onSubmit(){

    }

    return (
        <Section>
            <Form onSubmit={ handleSubmit(onSubmit) }>
                <h2>Cadastrar Tecnologia <button type="button" 
                    onClick={() => {
                        setTechForm(false);
                        setTech({});
                    } }>X</button> </h2>
                <Input id="title" placeholder="Nome da tecnologia*" type="text" 
                    register={ register } error={ errors.title } />
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
                {(tech)? <Button type="submit" className="button--purple">Cadastrar</Button>: (
                    <>
                        <Button type="submit" className="button--green">Salvar alterações</Button>
                        <Button type="button" className="button--gray">Excluir</Button>
                    </>
                )}
            </Form>
        </Section>
    )
};

export default FormTech;
