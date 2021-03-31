import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';

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
          <Route path="/admin">
            <Home/>
          </Route>
          <Route path="/About">
            <Home/>
          </Route>
          <Route path="/users">
            <Home/>
          </Route>

        </Switch>
    </Router>
  );
}

export default App;
