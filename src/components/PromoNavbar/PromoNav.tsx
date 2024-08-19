import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function PromoNav() {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-black">
            <Container>
                <Navbar.Brand href="/promociones">
                    <span className='text-info'>Pro</span><span className="text-warning">mo</span><span className='text-info'>ciones</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/promociones/web'>
                                Desarrollo web
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/promociones/front'>
                                Frontend Development
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/promociones/back'>
                                Backend Development
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
