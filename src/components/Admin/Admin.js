import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Header from '../Header/Header';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from './../AddProduct/AddProduct';
import EditProduct from './../EditProduct/EditProduct';


const routes = [
    {
      path: "/manageProduct",
      exact: true,
      sidebar: () => <div></div>,
      main: () => <ManageProduct></ManageProduct>
    },
    {
      path: "/addProduct",
      sidebar: () => <div></div>,
      main: () => <AddProduct></AddProduct>
    },
    {
      path: "/editProduct",
      sidebar: () => <div></div>,
      main: () => <EditProduct></EditProduct>
    }
];  


const Admin = () => {


    return (
        <div className='container'>
            <Header></Header>

            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "25%",
                            background: "#f0f0f0",
                            textAlign:'center'
                        }}
                        >
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            <li>
                                <Link to="/manageProduct">Manage Product</Link>
                            </li>
                            <li>
                                <Link to="/addProduct">Add Product</Link>
                            </li>
                            <li>
                                <Link to="/editProduct">Edit Product</Link>
                            </li>
                        </ul>

                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.sidebar />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div style={{ flex: 1, padding: "10px" }}>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>  
    );
};

export default Admin;