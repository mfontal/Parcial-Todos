import { useEffect, useState } from 'react';
import { getTodos } from '../helpers/getTodos';

export const useFetchTodos = (searchTerm) => {
    const [todoData, setTodoData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(todoData);
    const getTodosData = async () => {
        const newTodosData = await getTodos(searchTerm);
        setTodoData(newTodosData);
        setIsLoading(false);
    };

    useEffect(() => {
        getTodosData();
    }, []);

    return {
        todoData,
        isLoading,
    };
};
