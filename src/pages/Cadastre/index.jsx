

import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Cadastre = () => {
    return (
        <Form autoComplete="off">
            <Input id="name" type="text" placeholder="Nome" />
            <Input id="email" type="email" placeholder="E-mail" />
            <Input id="contact" type="text" placeholder="Contato" />
            <Input id="bio" type="text" placeholder="Bio" />
            <label htmlFor="">Selecionar módulo:</label>
        </Form>
    );
};

export default Cadastre;
