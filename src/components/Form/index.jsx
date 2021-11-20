import { Section } from "./style";

const Form = ({ children }) => {
    return (
        <Section autoComplete="off">{ children }</Section>
    );
};

export default Form;