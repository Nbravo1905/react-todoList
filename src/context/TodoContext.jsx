import { createContext } from 'react';



export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

  return (
    <TodoContext.Provider value={{ }}>
      { children }
    </TodoContext.Provider>
  );
}