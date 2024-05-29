import React, { useState, useEffect } from 'react';
import { getRecipes } from '../utils/api';
import RecipeList from '../components/RecipeList';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      getRecipes(searchQuery)
        .then((data) => setSearchResults(data))
        .catch((error) => console.error(error));
    }
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults([]);
    if (searchQuery.trim() !== '') {
      setSearchQuery(searchQuery.trim());
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 ? (
        <RecipeList recipes={searchResults} />
      ) : (
        <p>No recipes found. Try a different search query.</p>
      )}
    </div>
  );
};

export default Search;