import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';


function TodoSearch(){
    const value = React.useContext(TodoContext)
    
    const onSearchValueChange=(event)=>{
        console.log(event.target.value)
        value.setSearchValue(event.target.value)
    };
    return [
        <input 
        onChange={onSearchValueChange}
        value={value.searchValue}
        className="TodoSearch" placeholder="Cebolla"/>,
        <p>{value.searchValue}</p>
    ];
}

export {TodoSearch};