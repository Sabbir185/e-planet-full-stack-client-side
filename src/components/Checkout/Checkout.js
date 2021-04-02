import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import Header from './../Header/Header';
import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { UserContext } from './../../App';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const {id} = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, price} = product;

    useEffect(()=>{
        fetch(`https://sabbir185-eplanetshop.herokuapp.com/product/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleOrderInfo = () => {
        const userInfo = {...loggedInUser, product, orderDate: new Date()}
        // console.log(userInfo)
        fetch('https://sabbir185-eplanetshop.herokuapp.com/addOrder',{
            method: "POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify(userInfo)
        })
        .then(res => {
            if(res){
                alert('Ordered Successful !');
                history.push('/');
            }
        })

    }


    return (
        <div className='container'>
            <Header idFound={id}></Header>

            <Table striped bordered hover className='mt-5'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> {name ? `${name}`: ''} </td>
                        <td> {name ? `1`: ''} </td>
                        <td> {price ? `$${price}`: ''}</td>
                    </tr>
                </tbody>
            </Table>
            {
                name ?
                <button className='btn btn-success ml-auto d-flex justify-content-end' onClick={handleOrderInfo}>Checkout</button> 
                :
                <Link to='/' className='nav-link'><button className='btn btn-success ml-auto d-flex justify-content-end'>Shop Now</button></Link>
            }
        </div>
    );
};

export default Checkout;