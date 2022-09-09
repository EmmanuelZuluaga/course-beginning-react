import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm(){

    const [text, setText]= React.useState('');

    const value = React.useContext(TodoContext);

    const onCancel=()=>{
        //TODO
        value.setOpenModal(false);
        
    }
    const onSubmit=(event)=>{
        //TODO
        event.preventDefault();
        value.addTodo(text);
        value.setOpenModal(false);

    }

    const onChange=(event)=>{
        setText(event.target.value)
    };

    return (

        <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
        value={text}
        onChange={onChange}
            placeholder="Cortar la cebolla para el almuerzo"
        />
        <div className="TodoForm-buttonContainer">
            <button 
            className="TodoForm-button TodoForm-button--cancel"
            type="button"
            onClick={onCancel}
            > Cancelar </button>
            <button
            className="TodoForm-button TodoForm-button--add"
                type="submit"
              > Añadir </button>
        </div>
        </form>
       
    );
}

export {TodoForm};