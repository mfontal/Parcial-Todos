import React, { useState } from 'react';

export const SearchForm = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm("")
  };

  return (
    <form onSubmit={handleSubmit} className='d-grid gap-2'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Palabra"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary mt-1">Buscar</button>
    </form>
  );
};