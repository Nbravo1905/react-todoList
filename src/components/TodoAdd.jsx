import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

  const { tarea, onInputChange, onResetForm } = useForm({
    tarea: ''
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if( tarea.length <= 2) return;

    const newTodo = {
      id: new Date().getTime(),
      todo: tarea,
      done: false
    };

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input 
        type="text"
        placeholder="¿Que hay que hacer?"
        className="border border-slate-300 w-full rounded-md py-2 pl-3 shadow-sm font-mono"
        name='tarea'
        value={tarea}
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="bg-cyan-500 font-mono p-2 w-32 rounded-xl font-bold my-4 text-white shadow-lg shadow-cyan-500/50"
      >
        Agregar 
      </button>
    </form>
  )
}
