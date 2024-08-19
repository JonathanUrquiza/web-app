import Link from 'next/link'
import React from 'react'
import 'react-bootstrap'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function DevNavbar() {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-black">
            <Container>
                <Navbar.Brand href="/promociones"></Navbar.Brand>
                    <Nav className='w-100 flex flex-row gap-5'>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/devweb/view'>
                                Vistas
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/devweb/proyect'>
                                Más proyectos
                            </Link>
                        </Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}
