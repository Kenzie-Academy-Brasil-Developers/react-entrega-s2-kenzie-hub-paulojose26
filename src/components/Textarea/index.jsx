import { Div } from "./style";

const Textaria = ({ id, placeholder, register, error }) => {
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
            <textarea id={ id } onChange={ onChange } { ...(register)? register(id, {
                onChange: onChange
            }) : {}} />
            <label htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Textaria;
