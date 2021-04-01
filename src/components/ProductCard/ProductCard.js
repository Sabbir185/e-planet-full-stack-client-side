import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ProductCard.css'


const ProductCard = (props) => {
    const {name, brand, orderTime, price, imageLink, _id} = props.product;
    const history = useHistory();

    const checkoutHandle = (id) => {
       history.push(`/checkout/${id}`);
    }
    

    return (
        <div className='product'>
            <Card style={{ width: '18rem' }} className='card-container'>
                <div className='product-img'>
                    <Card.Img variant="top" src={imageLink} className='img-fluid'/>
                </div>
                <div className='body'>
                    <Card.Body>
                        <Card.Title><h6>{name}</h6></Card.Title>
                        <Card.Text>
                            <p><small  className='text-secondary'>Brand : {brand}</small></p>
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                           
                            <h5 className='d-inline-block text-info'>Price : ${price}</h5>
                        
                            <button onClick={()=>checkoutHandle(_id)} className='btn btn-info btn-sm m-2'>Buy Now</button>
    
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>    
    );
};

export default ProductCard;