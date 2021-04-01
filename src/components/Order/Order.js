import React, { useContext, useEffect } from 'react';
import Header from './../Header/Header';
import './Order.css'
import { useState } from 'react';
import { UserContext } from './../../App';
import { Table } from 'react-bootstrap';
import OrderList from './../OrderList/OrderList';

const Order = () => {
    const [userOrder, setUserOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch(`http://localhost:5000/orderList?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[])

    // console.log(userOrder)
    return (
        <div className='container'>
            <Header></Header>

            <div className="row mt-4">
                <div className="col-sm-12 col-md-4 col-lg-3 col-xlg-3 user-info text-center">
                    <h3>Welcome !</h3>
                    <h3>{loggedInUser.name}</h3>
                </div>
                <div className="col order-info">
                    <h3 className='text-center'>Total order list :</h3>
                    <Table striped bordered hover className="mt-3">
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
                </div>
            </div>
        </div>
    );
};

export default Order;