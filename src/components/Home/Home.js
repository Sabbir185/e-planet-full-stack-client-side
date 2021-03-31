import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Header from '../Header/Header';

const Home = () => {



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

            

        </div>
    );
};

export default Home;