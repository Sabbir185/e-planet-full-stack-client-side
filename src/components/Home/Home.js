import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import ProductCard from './../ProductCard/ProductCard';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
    return (
        <div className='container'>
            <Header></Header>

            <div className="row mt-3">
                <div className="col"></div>
                <div className="col text-center">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </div>
                <div className="col"></div>
            </div>

            <div className='card-style'>
                {
                    products.map( pd => <ProductCard key={pd._id} product={pd}></ProductCard> )
                }
            </div>

        </div>
    );
};

export default Home;