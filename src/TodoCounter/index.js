import React  from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

const estilos={
    color:'red',
    backgroundColor: 'yellow'

}
 
function TodoCounter(){
    const value = React.useContext(TodoContext)
    return (
        <h2  className="TodoCounter"> Has completado {value.completedTodos} de {value.totalTodos} TODOs</h2>
    );
}

export {TodoCounter};  