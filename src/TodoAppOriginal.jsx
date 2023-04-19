import { useState } from 'react';
import { InputSearchTodo } from './components/InputSearchTodo';
import { TodoGrid } from './components/TodoGrid';

export const TodoAppOriginal = () => {
    const [todoList, setTodoList] = useState([]);
    const [word, setWord] = useState('');

    // const updateTodoList = (tasksFound) => {
    //     setTodoList([...todoList, tasksFound]);
    // };
    const updateword = (w) => {
        setWord(w);
        console.log(w);
    };


    return (
        <>
            {/* Titulo  */}
            <h1>Busqueda de tareas</h1>
            <p>
                Introduce una palabra y saldran todas las tareas con esa palabra
            </p>
            {/* Input */}
            <InputSearchTodo updateWordFunction={updateword} />
            <TodoGrid word={word} />
        </>
    );
};
