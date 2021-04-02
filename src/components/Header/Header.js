import React, { useContext } from 'react';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'



const Header = (props) => {
    const logoIcon = <FontAwesomeIcon icon={faShoppingBag} />
    const loggedInUser = useContext(UserContext);
    const {email, name, photoURL} = loggedInUser[0];
    const badge = props.idFound;
    

    return (
        <div className='mt-2'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><Link to='/'><h1 className='text-warning'>{logoIcon}</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link > <Link to='/home'><h4 className='text-light navbar-brand'>E-Planet</h4></Link></Nav.Link>
                    </Nav>
                    <Nav className='d-flex align-items-center'>
                        <Nav.Link className='mr-3'> <Link to='/home' className='nav-link'> Home </Link> </Nav.Link>
                        <Nav.Link className='mr-3'> <Link to='/order' className='nav-link'> Order </Link> </Nav.Link>
                        <Nav.Link className='mr-3'> <Link to='/admin' className='nav-link'> Admin </Link> </Nav.Link>
                        <Nav.Link className='mr-3'> <Link to='/checkout' className='nav-link'> { badge ?  <span class="badge bg-info text-light fontSize">Checkout <span class="badge bg-warning text-dark">1</span></span> : 'Checkout'} </Link> </Nav.Link>
                        {
                            email ? 
                            <Nav.Link className='mr-3'> <Link to='/home' className='nav-link'> <img className='googlePhoto' src={photoURL} alt=""/> </Link> </Nav.Link>

                            // <h5 className='user-name'>{name}</h5> :
                            :
                            <Button variant="outline-success"> <Link to='/login' className='nav-link'> Login </Link> </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;