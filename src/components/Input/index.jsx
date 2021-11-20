import { Div } from "./style";

const Input = ({ id, type, placeholder, register, error }) => {
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
        <Div>
            <span>{ error?.message }</span>
            <input id={ id } type={ type } onChange={ onChange } { ...(register)? register(id, {
                onChange: onChange
            }) : {}} />
            <label htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Input;
