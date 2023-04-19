import { useState } from 'react';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './components/SearchResults';

export const TodoApp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (searchTerm) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`
        );
        const data = await response.json();
        setResults(data);
        // console.log(data);
    };

    return (
        <div>
            <div className='d-flex flex-column'>
                <h1>Busqueda de tareas</h1>
                <p>
                    Introduce una palabra y saldran todas las tareas con esa
                    palabra
                </p>
            </div>
            <SearchForm handleSearch={handleSearch} />
            <SearchResults results={results} />
        </div>
    );
};
