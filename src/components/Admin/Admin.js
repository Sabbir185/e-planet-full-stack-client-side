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
import './Admin.css';


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
        <div className='container-fluid home-container'>
        <div className='container bg-color pt-2 Admin-container'>
            <Header></Header>

            <Router>
                <div style={{ display: "flex" }}>
                    <div
                        style={{
                            padding: "10px",
                            width: "25%",
                            background: "#f0f0f0",
                            height:'12rem',
                            fontWeight:'600',
                            marginTop:'25px'
                        }}
                        >
                        <ul style={{ listStyleType: "none", padding: 0 }} >
                            <li className='mt-4 ml-3 admin-item'>
                                <Link to="/manageProduct" className='text-decoration-none'>Manage Product</Link>
                            </li>
                            <li className='mt-2 ml-3 admin-item'>
                                <Link to="/addProduct" className='text-decoration-none'>Add Product</Link>
                            </li>
                            <li className='mt-2 ml-3 admin-item'>
                                <Link to="/editProduct" className='text-decoration-none'>Edit Product</Link>
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

        </div> 
    );
};

export default Admin;