import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Form from "./components/Form";
import NotFound from "./components/NotFound";


function App() {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/oddaj-rzeczy" component={Form}/>
          <Route path="/logowanie" component={Login}/>
          <Route path="/rejestracja" component={Register}/>
          <Route path="/wylogowano" component={Logout}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
  );
}

export default App;
