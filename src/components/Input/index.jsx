import { Div } from "./style";

import { useState } from "react";

const Input = ({ id, type, placeholder, register, error, value, className, classLabel, disabled }) => {
    const [ txtInput, setTxtInput ] = useState(value);

    function onChange(event){
        let label = event.target.parentElement.lastChild;

        if(value){
            setTxtInput(event.target.value);
        }
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
            }) : {}} value={ value && txtInput } className={ className } disabled={ disabled } />
            <label className={ classLabel } htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Input;
