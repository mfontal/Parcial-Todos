import React, { useState } from 'react';

export const InputSearchTodo = ({ updateWordFunction }) => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (inputEvt) => {
        setInputValue(inputEvt.target.value);
    };

    const updateWord = (formEvt) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        const SearchWord = inputValue.toLowerCase();
        updateWordFunction(SearchWord);
        setInputValue('');
    };

    return (
        <form onSubmit={updateWord}>
            <input
                type="text"
                onChange={changeInputValue}
                value={inputValue}
            />
        </form>
    );
};
