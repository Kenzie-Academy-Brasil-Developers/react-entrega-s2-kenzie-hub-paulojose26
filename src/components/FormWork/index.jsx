import { Section } from "./style";

import Form from "../Form";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Button from "../Button";


const FormWork = ({ setAtualizar, setWorkForm, work, setWork }) => {
    return (
        <Section>
            <Form>
                <h2>Cadastrar Tecnologia <button  type="button" 
                    onClick={ () => {
                        setWorkForm(false);
                        setWork({});
                    } }>X</button> </h2>
                <Input id="title" placeholder="Nome do Trabalho" type="text" />
                <Textarea id="description" placeholder="Descrição" />
                <Button type="submit" className="button--purple">Cadastrar</Button>
            </Form>
        </Section>
    )
};

export default FormWork;
