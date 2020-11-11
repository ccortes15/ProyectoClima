import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useState } from 'react';

const NavContent = ({changeImage}) => {
    const [bgColor, setColor] = useState(true)

    return(
        <Navbar fixed="top" bg={bgColor ? null : 'dark'}>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Cambiar ciudad" id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={() => changeImage('london')}>Londres</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeImage('madrid')}>Madrid</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeImage('amsterdam')}>Amsterdam</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Button variant="link" onClick={() => setColor(!bgColor)}>Link</Button>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavContent;