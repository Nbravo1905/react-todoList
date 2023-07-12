import { TodoAdd, TodoList } from "./components";
import { useTodo } from "./hooks/useTodo";

export const TodoApp = () => {

  const {
    todos,
    counts,
    pendingCounts,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>

      <div className="grid grid-cols-8 gap-2 h-screen">

        <div className="col-span-4 p-5 ">
          <h2 className="font-mono text-3xl">Tareas: {counts} | Pendientes: {pendingCounts}</h2>

          <TodoList 
            todos={todos} 
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />

        </div>

        <div className="col-span-4 p-5 border shadow-lg shadow-cyan-500/40 ">
          <h2 className="font-mono text-3xl pb-2">Crear Tarea</h2>
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>

      </div>
          
    </>
  )
}
