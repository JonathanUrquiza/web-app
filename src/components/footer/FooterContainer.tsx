'use client'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo/Logo.png'

export default function FooterContainer() {
  const [currentYear, setCurrentYear] = useState<number>(2022)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <>
      <footer className="bg-dark text-light">
        {/* Top section */}
        <div className="container py-5">
          <div className="row">

            {/* Col 1 — Brand */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <div className="d-flex align-items-center gap-2 mb-2">
                <Image src={Logo} alt="Logo" width={50} height={50} />
                <span className="fs-4 fw-bold">
                  <span className="text-info">Dev</span>
                  <span className="text-warning">Ur</span>
                  <span className="text-info">Web</span>
                </span>
              </div>
              <p className="text-secondary mb-1">Desarrollador Web Fullstack</p>
              <p className="text-secondary mb-0">Buenos Aires, Argentina</p>
            </div>

            {/* Col 2 — Navegación */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h6 className="text-light fw-semibold mb-3">Navegación</h6>
              <Link href="/" className="text-secondary text-decoration-none d-block mb-2">Inicio</Link>
              <Link href="/devweb" className="text-secondary text-decoration-none d-block mb-2">Ejemplos</Link>
              <Link href="/promociones" className="text-secondary text-decoration-none d-block mb-2">Promociones</Link>
              <Link href="/resume" className="text-secondary text-decoration-none d-block mb-2">Resume</Link>
            </div>

            {/* Col 3 — Contacto */}
            <div className="col-12 col-md-4">
              <h6 className="text-light fw-semibold mb-3">Contacto</h6>
              <Link
                href="https://www.linkedin.com/in/jonathan-urquiza-179a70119/"
                target="_blank"
                className="d-flex align-items-center gap-2 mb-3 text-light text-decoration-none"
              >
                <img src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                <span>Jonathan Urquiza</span>
              </Link>
              <Link
                href="https://github.com/JonathanUrquiza"
                target="_blank"
                className="d-flex align-items-center gap-2 mb-3 text-light text-decoration-none"
              >
                <img src="/icons/github.svg" alt="GitHub" width={24} height={24} />
                <span>JonathanUrquiza</span>
              </Link>
              <Link
                href="https://wa.me/5491168370362"
                target="_blank"
                className="d-flex align-items-center gap-2 mb-3 text-light text-decoration-none"
              >
                <img src="/icons/whatsapp.gif" alt="WhatsApp" width={24} height={24} />
                <span>+54 11 6837 0362</span>
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-top border-secondary">
          <div className="container py-3 text-center">
            <small className="text-secondary">
              &copy; 2022 &ndash; {currentYear} Jonathan Javier Urquiza. Todos los derechos reservados.
            </small>
          </div>
        </div>
      </footer>
    </>
  )
}
