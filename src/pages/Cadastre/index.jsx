import { Section } from "./style";

import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import Api from "../../services/Api";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Button from "../../components/Button";

const Cadastre = () => {
    const history = useHistory();

    const validation = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("E-mail Inválido"),
        contact: yup.string().required("Campo Obrigatório").matches("(?=.*[0-9])", "Apenas números"),
        bio: yup.string(),
        course_module: yup.string().nullable().required("Selecione uma das opções"),
        password: yup.string().required("Campo Obrigatório").min(6, "Mínimo 6 caracteres"),
        confirm_password: yup.string().oneOf([yup.ref("password")], "Senhas diferentes")
    });

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    function cadastreAccount(datas){
        toast.loading("Espere...");
        Api.post("/users", datas).then(response => {
            toast.remove();
            toast.success("Cadastro realizado com Sucesso", {
                duration: 2000
            });
            history.push("/login");
        }).catch(error => {
            console.log(error.message);
            toast.remove();
            toast.error("Esse e-mail já existente", {
                duration: 2000
            })
        });
    }

    return (
        <Form autoComplete="off" onSubmit={ handleSubmit(cadastreAccount) }>
            <Input id="name" type="text" placeholder="Nome*" register={ register } error={ errors.name } />
            <Input id="email" type="email" placeholder="E-mail*" register={ register } error={ errors.email } />
            <Input id="contact" type="text" placeholder="Contato*" register={ register } />
            <Input id="bio" type="text" placeholder="Bio" register={ register } />
            <label htmlFor="">Selecionar módulo*:</label>
            <Section>
                <Radio id="first--module" name="course_module" placeholder="Primeiro" 
                    register={ register } value="Primeiro módulo (Introdução ao Frontend)" />
                <Radio id="second--module" name="course_module" placeholder="Segundo" 
                    register={ register } value="Segundo módulo (Frontend Avançado)" />
                <Radio id="third--module" name="course_module" placeholder="Terceiro" 
                    register={ register } value="Terceiro módulo (Introdução ao Backend)" />
                <Radio id="fourth--module" name="course_module" placeholder="Quarto" 
                    register={ register } value="Quarto módulo (Backend Avançado)" />
                <span>{ errors.course_module?.message }</span>
            </Section>
            <Input id="password" type="password" placeholder="Senha*" register={ register } 
                error={ errors.password } />
            <Input id="confirm_password" type="password" placeholder="Confirme a senha*" 
                register={ register } error={ errors.confirm_password } />
            <Button type="submit" className="button--purple">Cadastrar</Button>
        </Form>
    );
};

export default Cadastre;
