import React, { Component } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Watches App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/likes">Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default Header
