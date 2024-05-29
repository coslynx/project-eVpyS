import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import MealPlanner from './pages/MealPlanner';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/mealplanner" component={MealPlanner} />
      </Switch>
    </Router>
  );
}

export default App;