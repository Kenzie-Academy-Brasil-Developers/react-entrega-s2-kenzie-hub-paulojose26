import { Div } from "./style";

const Input = ({ id, type, placeholder, register, error, value, className, classLabel }) => {
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
            }) : {}} value={ value && value } className={ className } />
            <label className={ classLabel } htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Input;
