import React from "react";
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoSearch } from '../TodoSearch/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { TodoList } from '../TodoList/index.js';
import { TodoContext } from "../TodoContext/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";


function AppUI(){

 const value= React.useContext(TodoContext);

    return (    
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch 
   
         />
        <TodoList>
              {value.error && <p>Desesperate, hubo un error ...</p>}
              {value.loading && <p>Estamos cargando, no desesperes ...</p>}
              {(!value.loading && !value.searchedTodos.length) && <p>Crea tu primer TODO!</p>}
              {value.searchedTodos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text}
                completed={todo.completed}
                 onCompleted={()=>value.completeTodos(todo.text)}
                 onDelete={()=>value.deleteTodo(todo.text)}/>
        ))}
       </TodoList>

                {value.openModal&&(
                  <Modal
       
                  >
                   <TodoForm/>
                   
                  </Modal>
                )}
       <CreateTodoButton
       setOpenModal={value.setOpenModal}/>
      </React.Fragment>
        );
}

export {AppUI};