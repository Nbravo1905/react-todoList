

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  
  return (
    <div className={`flex justify-between items-center p-3 mt-5 border
      shadow-lg shadow-${todo.done ? 'green' : 'red'}-500/30 rounded-xl`}>
      <p className="font-mono text-xl">{todo.todo}</p>
      <div>
        {
          !todo.done && (
            <button
              type="button"
              className="font-mono mr-1 bg-green-500 p-2 w-25 rounded-xl text-sm font-bold text-white shadow-lg shadow-green-500/30"
              onClick={ () => onToggleTodo(todo.id) }
            >
              Terminar
            </button>
          )
        }
        <button
          type="button"
          className="font-mono ml-1 bg-red-500 p-2 w-25 rounded-xl text-sm font-bold text-white shadow-lg shadow-red-500/30"
          onClick={ () => onDeleteTodo(todo.id) }
        >
          Eliminar 
        </button>
      </div>
    </div>
  )
}
