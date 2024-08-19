'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function ResumeNav() {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-black">
            <Container>
                <Navbar.Brand href="/resume"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/resume/experiencia'>
                                Experiencia laboral
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/resume/formacion'>
                                Formación academica
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light' href='/resume/dashboard'>
                                Dashboard de habilidades
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
