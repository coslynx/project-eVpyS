import axios from 'axios';

const API_KEY = 'YOUR_SPOONACULAR_API_KEY';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
});

const getRecipesByQuery = async (query) => {
  try {
    const response = await api.get('/complexSearch', {
      params: {
        apiKey: API_KEY,
        query: query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    return null;
  }
};

export {
  getRecipesByQuery,
  getRecipeById,
};