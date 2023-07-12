
export const todoReducer = ( initialState, action) => {

  switch ( action.type ) {
    case 'ADD':
      return [
        ...initialState,
        action.payload
      ]
    case 'DELETED':
      return initialState.filter( tarea => tarea.id !== action.payload );
    case 'DONE':
      return initialState.map( todo => {
        if( todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      });
    default:
      return initialState;
  }

}