import { Form, ButtonLogin, ButtonCadastre } from "./style";

import { useHistory } from "react-router";

const Login = () => {
    const history = useHistory();

    function onChange(event){
        let label = event.target.parentElement.lastChild;

        if(event.target.value === ""){
            event.target.className = "";
            label.className = "";
        }
        else{
            event.target.className = "input--focus";
            label.className = "label--focus";
        }
    }

    return (
        <Form autoComplete="off">
            <div>
                <input id="email" type="text" onChange={ onChange } />
                <label htmlFor="email">Login</label>
            </div>
            <div>
                <input id="password" type="password" onChange={ onChange } />
                <label htmlFor="password">Senha</label>
            </div>
            <ButtonLogin type="submit">Logar</ButtonLogin>
            <p>Criar uma Página para mostar suas <br/><strong>habilidades metas e progresso</strong></p>
            <ButtonCadastre type="button" onClick={ () => history.push("/cadastre") }>Cadastrar</ButtonCadastre>
        </Form>
    );
};

export default Login;
