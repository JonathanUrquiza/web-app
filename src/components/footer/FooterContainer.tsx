'use client'
import React from 'react'
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import Link from 'next/link'
import gitHub from '@/assets/icons/icons8-github-50.png'
import whatsapp from '@/assets/icons/icons8-whatsapp-50.png'
import linkedin from '@/assets/icons/icons8-linkedin-50.png'
import { Container, Navbar, Nav } from 'react-bootstrap'


export default function FooterContainer() {
  return (
    <>
      <footer className="container-fluid py-5 text-light bg-dark">
        <div className="row">
          <div className="col-8 offset-4">
            <h5>Redes</h5>
            <ul className="list-group list-unstyled text-small d-flex flex-md-row">
              <li className="list-item mx-4 my-2"><Link className="link-secondary"
                href="https://www.linkedin.com/in/jonathan-urquiza-179a70119/" target="_blank"><Image
                  className="bg-light border-5 rounded-2" width={50} height={50} src={linkedin} alt="linkedin" /></Link>
              </li>
              <li className="list-item mx-4 my-2"><Link className="link-secondary" href="https://github.com/JonathanUrquiza"
                target="_blank"><Image className="bg-light border-5 rounded-5" width={50} height={50} src={gitHub} alt=""
                /></Link></li>
              <li className="list-item mx-4 my-2"><Link className="link-secondary" href="https://wa.me/5491168370362"
                target="_blank"><Image className="bg-light border-1 rounded-5" width={50} height={50} src={whatsapp} alt=""
                /></Link></li>
            </ul>
          </div>

        </div>

        <div className="row">
          <div className="col-12 d-flex flex-column justify-content-around align-items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
              stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img"
              viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path
                d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <small className="d-block mb-3" id="clock">2022 – <span id="toDay"></span></small>
            <small className="d-block mb-3">&copy; Jonathan Javier Urquiza</small>
          </div>
          <Container>
            <Navbar className="navbar fixed-bottom bg-black px-4 border-top border-warning">
              <Nav>
              <Nav.Link className="day card-text lead"></Nav.Link>
              <Nav.Link className="clock text-info"></Nav.Link>
              <Nav.Link className="city lead"></Nav.Link>
              </Nav>
            </Navbar>
          </Container>
        </div>
      </footer>
    </>
  )
}
