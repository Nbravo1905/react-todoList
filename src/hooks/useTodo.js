import { useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/todoReducer";


/*const initialState = [
  {
    id: new Date().getTime(),
    todo: 'Recolectar la piedra del Alma',
    done: false
  },
];*/

const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: 'ADD',
      payload: todo
    };

    dispatch(action);
  }

  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: 'DELETED',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: 'DONE',
      payload: id
    });
  }

  return {
    todos,
    counts: todos.length,
    pendingCounts: todos.filter( todo => !todo.done ).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }

}