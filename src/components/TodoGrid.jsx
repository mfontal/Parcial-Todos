import { useFetchTodos } from '../hooks/useFetchTodos';
import { TaskItem } from './TaskItem';

export const TodoGrid = ({ word }) => {
    const { todoData, isLoading } = useFetchTodos(word);
    console.log(todoData);
    return (
        <>
         <h3>Lista de Tareas</h3>
         {
            isLoading && (<h2>Cargando...</h2>)
         }

         <div >
            
            {todoData.map((todo) => {
               return (
                  <TaskItem
                     key={todo.id}
                     {...todo}
                  />
               );
            })}
         </div>
      </>
    );
};
