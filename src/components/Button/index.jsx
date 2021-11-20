import { Section } from "./style";

const Button = ({ children, type, onClick }) => {
    return(
        <Section type={ type } onClick={ onClick }>{ children }</Section>
    );
};

export default Button;
