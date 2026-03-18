'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/Logo/Logo.png';

export default function NavbarContainer() {

  return (
    <>
      <header>
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-black">
          <Container fluid className="px-4">
            <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
              <Image
                src={Logo}
                alt="DevUrWeb logo"
                width={40}
                height={40}
                priority
              />
              <span className='text-info'>Dev</span><span className="text-warning">Ur</span><span className='text-info'>Web</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} className='text-decoration-none text-light' href="https://www.linkedin.com/in/jonathan-urquiza-179a70119/">LinkedIn</Nav.Link>
                <Nav.Link as={Link} className='text-decoration-none text-light' href="https://github.com/JonathanUrquiza/JonathanUrquiza">Github</Nav.Link>
                <NavDropdown title="Ejemplos" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} className='nav-dropdown-link' href="/devweb">
                    Desarrollo Web
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='nav-dropdown-link' href="/frontend">
                    Frontend
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='nav-dropdown-link' href="/backend">
                    Backend
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} className='nav-dropdown-link' href="/programacion">
                    Programación
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} className='text-decoration-none text-light' href="/promociones">
                  Promociones
                </Nav.Link>
                <Nav.Link as={Link} className='text-decoration-none text-light' href="/resume">
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
