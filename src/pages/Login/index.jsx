import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
    const validation = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("E-mail Inválido"),
        password: yup.string().required("Campo Obrigatório")
    });

    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    function loginAccount(){

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
