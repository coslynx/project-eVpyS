import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import Moment from 'moment';
import { getMealPlan } from '../utils/api';

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState([]);

  useEffect(() => {
    fetchMealPlan();
  }, []);

  const fetchMealPlan = async () => {
    try {
      const data = await getMealPlan();
      setMealPlan(data);
    } catch (error) {
      console.error('Error fetching meal plan:', error);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Weekly Meal Planner</Typography>
      </Grid>
      {mealPlan.map((day, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="h6">{`Day ${index + 1}: ${Moment(day.date).format('dddd, MMMM Do YYYY')}`}</Typography>
          {day.meals.map((meal, mealIndex) => (
            <Grid item xs={12} key={mealIndex}>
              <Typography variant="subtitle1">{`Meal ${mealIndex + 1}: ${meal.name}`}</Typography>
              <Typography variant="body1">{`Time: ${meal.time}`}</Typography>
              <Typography variant="body1">{`Recipe: ${meal.recipe}`}</Typography>
            </Grid>
          ))}
        </Grid>
      ))}
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Generate New Meal Plan
        </Button>
      </Grid>
    </Grid>
  );
};

export default MealPlanner;