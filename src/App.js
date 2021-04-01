import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import ManageProduct from './components/ManageProduct/ManageProduct';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path="/admin">
              <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <Checkout/>
            </PrivateRoute>
            <Route path="/checkout">
              <Checkout/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>

            <PrivateRoute path="/manageProduct">
              <ManageProduct/>
            </PrivateRoute>
            <PrivateRoute path="/addProduct">
              <AddProduct/>
            </PrivateRoute>
            <PrivateRoute path="/editProduct">
              <EditProduct/>
            </PrivateRoute>


          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
