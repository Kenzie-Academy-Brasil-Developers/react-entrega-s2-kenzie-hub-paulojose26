import { Div } from "./style";

const Radio = ({ id, name, placeholder }) => {
    return (
        <Div>
            <input id={ id } name={name} type="radio" />
            <label htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Radio;