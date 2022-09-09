import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext= React.createContext();

function TodoProvider(props){

    

// Used states in React -------------------------- 
  const {
    item: todos,
    loading,
    error,
    saveItem: saveTodos
  }= useLocalStorage('TODOS_V1',[])
const [searchValue, setSearchValue]= React.useState('');
const [openModal, setOpenModal]= React.useState(false);

// Filter todo in the search --------------------------------------

const completedTodos= todos.filter(todo=> !!todo.completed).length;
const totalTodos= todos.length;

let searchedTodos=[];

if(searchValue.length<=1){
  searchedTodos=todos;
}else{
  searchedTodos=todos.filter(todo=>{
    const todoText= todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
  })
  
}

// Create todo   -------------------------------------------
const addTodo=(text)=>{
 const newTodos=[...todos]
 newTodos.push({
  completed: false,
  text:text
 });

 // setTodos(newTodos);
  saveTodos(newTodos)
};
 
// Mark todo as completed -------------------------------------------

const completeTodos=(text)=>{
  const index= todos.findIndex(todo=> todo.text===text);
 const newTodos=[...todos]
  todos[index].completed=true;
 // setTodos(newTodos);
  saveTodos(newTodos)
};

// Delete todo using id like text --------------------------------------------

const deleteTodo=(text)=>{
  const index= todos.findIndex(todo=> todo.text===text);
 const newTodos=[...todos]
 newTodos.splice(index,1);
 // setTodos(newTodos);
  saveTodos(newTodos);
  
};

// ----------------------------------------------
    return(
        <TodoContext.Provider value={{
            error,
            loading,
            completedTodos,
            totalTodos,
            setSearchValue,
            searchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo

        }}>
            {props.children}
        </TodoContext.Provider>
    );

}
 export {TodoContext, TodoProvider};