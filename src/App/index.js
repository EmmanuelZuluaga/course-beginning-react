import React from 'react';
import { AppUI } from './appUI';
import { TodoProvider } from '../TodoContext';


function App() {




// Config the principal component and their variables -------------------------------

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
