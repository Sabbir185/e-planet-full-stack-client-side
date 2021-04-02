import React, { useContext, useEffect } from 'react';
import Header from './../Header/Header';
import './Order.css'
import { useState } from 'react';
import { UserContext } from './../../App';
import { Spinner, Table } from 'react-bootstrap';
import OrderList from './../OrderList/OrderList';

const Order = () => {
    const [userOrder, setUserOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch(`https://sabbir185-eplanetshop.herokuapp.com/orderList?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])

  
    return (
        <div className='container-fluid home-container'>
            <div className='container pt-2 order-container'>
                <Header></Header>

                <div className="row mt-4">
                    <div className="col-sm-12 col-md-4 col-lg-3 col-xlg-3 user-info text-center">
                        <h3>Welcome !</h3>
                        <h3>{loggedInUser.name}</h3>
                    </div>
                    <div className="col order-info">
                        <h3 className='text-center'>Total order list :</h3>
                        <Table striped bordered hover className="mt-3 table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                
                                {
                                    userOrder.map(order => <OrderList orderInfo={order}></OrderList>)
                                }
                                
                            </tbody>
                        </Table>
                        {
                            userOrder.length == 0 && <div className='spinner2'>
                                <Spinner variant='success' animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;