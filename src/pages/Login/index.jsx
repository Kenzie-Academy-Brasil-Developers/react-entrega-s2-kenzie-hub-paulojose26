import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useEffect } from "react";

import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Api from "../../services/Api"

const Login = () => {
    const history = useHistory();

    const validation = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("E-mail Inválido"),
        password: yup.string().required("Campo Obrigatório")
    });

    useEffect(() => {
        if(localStorage.getItem("token")){
            history.push("/");
        }
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    function loginAccount(datas){
        toast.loading("Espere...");
        Api.post("/sessions", datas)
            .then(response => {
                toast.remove();
                toast.success(`Bem vindo, ${ response.data.user.name }`, {
                    duration: 2000
                });
                localStorage.setItem("token", response.data.token);
                history.push("/");
            })
            .catch(errors => {
                toast.remove();
                toast.error("E-mail ou senha inválidos", {
                    duration: 2000
                });
            });
    }

    return (
        <Form onSubmit={ handleSubmit(loginAccount) }>
            <Input id="email" type="text" placeholder="Login" register={ register } error={ errors.email }/>
            <Input id="password" type="password" placeholder="Senha" register={ register } error={ errors.password } />
            <Button type="submit">Logar</Button>
            <p>Criar uma Página para mostar suas <br/><strong>habilidades metas e progresso</strong></p>
            <Button type="button" onClick={ () => history.push("/cadastre") }>Cadastrar</Button>
        </Form>
    );
};

export default Login;
