import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                       <p><span>Apple Komola</span></p>
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Navbar.Brand as={Link} to="/home">
                                Home
                            </Navbar.Brand>
                            <Nav.Link as={Link} to="/items">Items</Nav.Link>


                            {
                                user && <>
                                    <Nav.Link as={Link} to='/inventory/:itemId'>Inventory</Nav.Link>
                                    <Nav.Link as={Link} to='/manageInventories'>Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to='/addItem'>Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/myItems'>My Item</Nav.Link>

                                </>
                            }
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        

                            {
                                user ?
                                    <button className='btn btn-link text-danger text-decoration-none' onClick={handleSignOut}>SignOut</button>
                                    :

                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;