import { Div } from "./style";

const Radio = ({ id, name, placeholder, value, register }) => {
    return (
        <Div>
            <input id={ id } name={ name } type="radio" value={ value } {...(register)? register(name) : {}} />
            <label htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Radio;