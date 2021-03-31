import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Header = () => {
    const logoIcon = <FontAwesomeIcon icon={faShoppingBag} />

    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><Link to='/'><h1 className='text-warning'>{logoIcon}</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link > <Link to='/home'><h4 className='text-light'>E-Planet</h4></Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link to='/home' className='mr-3'> <Link to='/home' className='nav-link'> Home </Link> </Nav.Link>
                        <Nav.Link to='/order' className='mr-3'> <Link to='/order' className='nav-link'> Order </Link> </Nav.Link>
                        <Nav.Link to='/admin' className='mr-3'> <Link to='/admin' className='nav-link'> Admin </Link> </Nav.Link>
                        <Nav.Link to='/about' className='mr-3'> <Link to='/about' className='nav-link'> About </Link> </Nav.Link>
                        <Button variant="outline-success"> <Link to='/login' className='nav-link'> Login </Link> </Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;