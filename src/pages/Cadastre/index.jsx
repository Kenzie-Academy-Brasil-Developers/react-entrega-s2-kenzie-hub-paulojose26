import { Section } from "./style";

import Form from "../../components/Form";
import Input from "../../components/Input";
import Radio from "../../components/Radio";
import Button from "../../components/Button";

const Cadastre = () => {
    return (
        <Form autoComplete="off">
            <Input id="name" type="text" placeholder="Nome" />
            <Input id="email" type="email" placeholder="E-mail" />
            <Input id="contact" type="text" placeholder="Contato" />
            <Input id="bio" type="text" placeholder="Bio" />
            <label htmlFor="">Selecionar módulo:</label>
            <Section>
                <Radio id="first--module" name="module" placeholder="Primeiro" />
                <Radio id="second--module" name="module" placeholder="Segundo" />
                <Radio id="third--module" name="module" placeholder="Terceiro" />
                <Radio id="fourth--module" name="module" placeholder="Quarto" />
            </Section>
            <Input id="password" type="text" placeholder="Senha"/>
            <Input id="confirm--password" type="text" placeholder="Confirme a senha"/>
            <Button type="submit">Cadastrar</Button>
        </Form>
    );
};

export default Cadastre;
