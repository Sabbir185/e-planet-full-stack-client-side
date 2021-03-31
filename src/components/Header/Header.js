import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'



const Header = () => {
    const logoIcon = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><h1 className='text-warning'>{logoIcon}</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><h4 className='text-light'>E-Planet</h4></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to='/home' className='mr-3'>Home</Nav.Link>
                        <Nav.Link to='/home' className='mr-3'>Order</Nav.Link>
                        <Nav.Link to='/home' className='mr-3'>Admin</Nav.Link>
                        <Nav.Link to='/home' className='mr-3'>About</Nav.Link>
                        <Button variant="outline-success"> Login </Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;