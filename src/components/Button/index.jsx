import { Section } from "./style";

const Button = ({ children, type, onClick, className }) => {
    return(
        <Section type={ type } onClick={ onClick } className={className} >{ children }</Section>
    );
};

export default Button;
