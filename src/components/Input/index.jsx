import { Div } from "./style";

const Input = ({ id, type, placeholder }) => {
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
            <input id={ id } type={ type } onChange={ onChange }/>
            <label htmlFor={ id }>{ placeholder }</label>
        </Div>
    );
};

export default Input;
