import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const RecipeCard = ({ recipe }) => {
  const { title, ingredients, instructions, imageUrl } = recipe;

  return (
    <Card>
      <img src={imageUrl} alt={title} />
      <CardContent>
        <Typography variant="h5" component="h2">{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Ingredients: {ingredients.join(', ')}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Instructions: {instructions}
        </Typography>
        <Button variant="contained" color="primary">Save Recipe</Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;