import "./App.css";
import React from "react";
import { 
  BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './components/Home';
// import Restaurants from './components/Restaurants';
import FoodPage from './pages/FoodPage';
import Restaurants from './pages/RestaurantPage';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" component={Home}/> */}
        <Route path="/Restaurant" component={Restaurants}/> 
        <Route path="/food" component={FoodPage}/>
      </Switch>
    </Router>
  );
}
export default App;
