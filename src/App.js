import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from "./components/Home";


function App() {

  return (
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
  );
}

export default App;
