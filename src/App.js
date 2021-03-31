import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import About from './components/About/About';
import Login from './components/Login/Login';

function App() {


  return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
