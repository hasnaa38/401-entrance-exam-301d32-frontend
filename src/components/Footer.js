import React, { Component } from 'react'
import { Navbar,Container } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">&copy; Watches</Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}

export default Footer
