import { useHistory } from "react-router";

import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
    const history = useHistory();

    return (
        <Form>
            <Input id="email" type="text" placeholder="Login" />
            <Input id="password" type="password" placeholder="Senha" />
            <Button type="submit">Logar</Button>
            <p>Criar uma Página para mostar suas <br/><strong>habilidades metas e progresso</strong></p>
            <Button type="button" onClick={ () => history.push("/cadastre") }>Cadastrar</Button>
        </Form>
    );
};

export default Login;
