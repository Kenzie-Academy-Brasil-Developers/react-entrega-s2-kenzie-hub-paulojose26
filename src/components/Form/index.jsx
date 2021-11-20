import { Section } from "./style";

const Form = ({ children, onSubmit }) => {
    return (
        <Section autoComplete="off" onSubmit={ onSubmit } >{ children }</Section>
    );
};

export default Form;