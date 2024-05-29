import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://api.spoonacular.com/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes: ', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Welcome to the Recipe App!</h1>
      <h2>Featured Recipes:</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;