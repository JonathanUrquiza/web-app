'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function PromoNav() {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark bg-black">
            <Container className="justify-content-center">
                <Navbar.Toggle aria-controls="promo-navbar-nav" />
                <Navbar.Collapse id="promo-navbar-nav" className="justify-content-center">
                    <Nav>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light promo-nav-link' href='/promociones/web'>
                                Desarrollo web
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light promo-nav-link' href='/promociones/front'>
                                Frontend Development
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='text-decoration-none text-light promo-nav-link' href='/promociones/back'>
                                Backend Development
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
