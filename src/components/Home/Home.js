import React, { useEffect, useState } from 'react';
import { Form, FormControl, Button, Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import ProductCard from './../ProductCard/ProductCard';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const url = `https://sabbir185-eplanetshop.herokuapp.com/products`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    
    return (
        <div className='container-fluid home-container'>
            <div className='container bg-color pt-2'>
                <Header></Header>

                <div className="row mt-3">
                    <div className="col"></div>
                    <div className="text-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className='btnStyle' type="submit" variant="outline-success">Search</Button>
                        </Form>
                    </div>
                    <div className="col"></div>
                </div>

                {
                    products.length == 0 && <div className='spinner'>
                        <Spinner variant='danger' animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                        </div>
                }
                
                <div className='card-style'>
                    {
                        products.map( pd => <ProductCard key={pd._id} product={pd}></ProductCard> )
                    }
                </div>

            </div>

        </div>
    );
};

export default Home;